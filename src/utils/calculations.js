// ─── Staircase Calculation Logic ─────────────────────────────────────────────

function buildChecks(riser, tread, width, angle, formula, code, headroom = null) {
  const checks = [
    {
      label: "Riser height", val: riser.toFixed(1) + " mm",
      pass: riser >= code.riserMin && riser <= code.riserMax,
      req: `${code.riserMin}–${code.riserMax} mm`,
    },
    {
      label: "Tread depth", val: tread.toFixed(1) + " mm",
      pass: tread >= code.treadMin,
      req: `≥ ${code.treadMin} mm`,
    },
    {
      label: "Stair angle", val: angle.toFixed(1) + "°",
      pass: angle >= 20 && angle <= 45,
      req: "20°–45° recommended",
    },
    {
      label: "Stair width", val: width.toFixed(0) + " mm",
      pass: width >= code.widthMin,
      req: `≥ ${code.widthMin} mm`,
    },
  ];
  if (code.formulaRange && formula !== null) {
    checks.push({
      label: "2R + T formula", val: formula.toFixed(1) + " mm",
      pass: formula >= code.formulaRange[0] && formula <= code.formulaRange[1],
      req: `${code.formulaRange[0]}–${code.formulaRange[1]} mm`,
    });
  }
  if (headroom !== null) {
    checks.push({
      label: "Headroom clearance", val: headroom.toFixed(0) + " mm",
      pass: headroom >= code.headroomMin,
      req: `≥ ${code.headroomMin} mm`,
    });
  }
  return checks;
}

function buildRecommendations(result, code) {
  if (!result || result.ok) return [];
  const recs = [];
  const { checks = [], nSteps, riser, angle, formula, totalRise, idealN } = result;

  for (const c of checks) {
    if (c.pass) continue;
    switch (c.label) {
      case 'Riser height': {
        if (riser > code.riserMax) {
          const n = Math.ceil(totalRise / code.riserMax);
          recs.push(`Riser ${riser.toFixed(0)} mm exceeds max ${code.riserMax} mm — try ${n}+ steps (${n} steps → ${(totalRise/n).toFixed(0)} mm riser)`);
        } else {
          const n = Math.floor(totalRise / code.riserMin);
          recs.push(`Riser ${riser.toFixed(0)} mm below min ${code.riserMin} mm — try ≤${n} steps (${n} steps → ${(totalRise/n).toFixed(0)} mm riser)`);
        }
        break;
      }
      case 'Tread depth':
      case 'Tread (inner arc)': {
        const t = result.tread || result.tread1 || 0;
        if (result.type === 'straight') {
          recs.push(`Tread ${t.toFixed(0)} mm below min ${code.treadMin} mm — increase run to ≥${Math.ceil(code.treadMin * nSteps)} mm`);
        } else if (result.type === 'lshaped') {
          recs.push(`Tread too shallow — increase run1 + run2 to ≥${Math.ceil(code.treadMin * nSteps)} mm total`);
        } else if (result.type === 'ushaped') {
          const sf = result.stepsPerFlight || Math.ceil(nSteps / 2);
          recs.push(`Tread too shallow — increase flight run to ≥${Math.ceil(code.treadMin * sf)} mm (${code.treadMin} × ${sf} steps)`);
        } else {
          recs.push(`Tread too narrow — increase diameter or reduce step count`);
        }
        break;
      }
      case 'Stair angle': {
        if (angle > 45) {
          if (result.type === 'straight' && result.totalRun) {
            recs.push(`Angle ${angle.toFixed(1)}° too steep — increase run to ≥${Math.ceil(totalRise)} mm, or add more steps`);
          } else {
            recs.push(`Angle ${angle.toFixed(1)}° too steep — increase run length or add more steps`);
          }
        } else {
          recs.push(`Angle ${angle.toFixed(1)}° too shallow (min 20°) — reduce run or increase rise`);
        }
        break;
      }
      case 'Stair width':
        recs.push(`Width too narrow — increase stair width to ≥${code.widthMin} mm`);
        break;
      case '2R + T formula': {
        if (code.formulaRange) {
          const [fMin, fMax] = code.formulaRange;
          if (formula < fMin) {
            recs.push(`2R+T = ${formula.toFixed(0)} mm (need ${fMin}–${fMax}) — increase tread to ≥${Math.ceil(fMin - 2 * riser)} mm`);
          } else {
            recs.push(`2R+T = ${formula.toFixed(0)} mm (need ${fMin}–${fMax}) — reduce tread to ≤${Math.floor(fMax - 2 * riser)} mm`);
          }
        }
        break;
      }
      case 'Landing depth': {
        const minL = Math.max(result.stairWidth || 900, 900);
        recs.push(`Landing too shallow — increase landing depth to ≥${minL} mm`);
        break;
      }
      case 'Headroom clearance':
        recs.push(`Headroom insufficient — verify ceiling height along stair path (need ≥${code.headroomMin} mm)`);
        break;
      default:
        break;
    }
  }

  if (idealN && idealN !== nSteps) {
    recs.push(`Optimal: ${idealN} steps → riser ≈${(totalRise / idealN).toFixed(0)} mm (code target: ${code.idealRiser} mm)`);
  }

  return recs;
}

export function computeStraight(inp, code) {
  const rise  = parseFloat(inp.totalRise);
  const run   = parseFloat(inp.totalRun);
  const width = parseFloat(inp.stairWidth) || 0;
  if (!rise || !run || rise <= 0 || run <= 0) return null;

  const nSteps = inp.numStepsOverride
    ? Math.max(2, Math.min(50, parseInt(inp.numStepsOverride)))
    : Math.max(2, Math.round(rise / code.riserMax));

  const riser    = rise / nSteps;
  const tread    = run  / nSteps;
  const angle    = Math.atan2(riser, tread) * 180 / Math.PI;
  const stringer = Math.sqrt(rise * rise + run * run);
  const formula  = 2 * riser + tread;
  const headroom = code.headroomMin;
  const checks   = buildChecks(riser, tread, width, angle, formula, code, headroom);
  const idealN   = Math.round(rise / code.idealRiser);

  const r = {
    type: "straight",
    nSteps, riser, tread, angle, stringer, formula, checks,
    ok: checks.every(c => c.pass),
    idealN,
    totalRise: rise, totalRun: run, stairWidth: width,
  };
  r.recommendations = buildRecommendations(r, code);
  return r;
}

export function computeLShaped(inp, code) {
  const rise         = parseFloat(inp.totalRise);
  const run1         = parseFloat(inp.run1);
  const run2         = parseFloat(inp.run2);
  const width        = parseFloat(inp.stairWidth) || 0;
  const landingDepth = parseFloat(inp.landingDepth) || width;
  if (!rise || !run1 || !run2) return null;

  const totalRun = run1 + run2;
  const totalN  = inp.numStepsOverride
    ? Math.max(2, Math.min(50, parseInt(inp.numStepsOverride)))
    : Math.max(2, Math.round(rise / code.riserMax));

  const riser   = rise / totalN;
  const tread   = Math.min(run1, run2) / Math.round(totalN * Math.min(run1, run2) / totalRun);
  const angle   = Math.atan2(riser, tread) * 180 / Math.PI;
  const formula = 2 * riser + tread;

  const stepsF1 = Math.max(1, Math.round(totalN * run1 / totalRun));
  const stepsF2 = totalN - stepsF1;
  const tread1  = run1 / stepsF1;
  const tread2  = run2 / stepsF2;
  const minTread = Math.min(tread1, tread2);

  const checks  = buildChecks(riser, minTread, width, angle, formula, code, code.headroomMin);
  
  const landingCheck = {
    label: "Landing depth", val: landingDepth.toFixed(0) + " mm",
    pass: landingDepth >= Math.max(width, 900),
    req: `≥ ${Math.max(width, 900)} mm`,
  };
  checks.push(landingCheck);

  const idealN  = Math.round(rise / code.idealRiser);

  const r = {
    type: "lshaped",
    nSteps: totalN, stepsF1, stepsF2,
    riser, tread1, tread2, angle, formula, checks,
    ok: checks.every(c => c.pass),
    idealN,
    totalRise: rise, run1, run2, totalRun, stairWidth: width, landingDepth,
  };
  r.recommendations = buildRecommendations(r, code);
  return r;
}

export function computeUShaped(inp, code) {
  const rise         = parseFloat(inp.totalRise);
  const flightRun    = parseFloat(inp.flightRun);
  const width        = parseFloat(inp.stairWidth) || 0;
  const landingDepth = parseFloat(inp.landingDepth) || width;
  if (!rise || !flightRun) return null;

  const totalN  = inp.numStepsOverride
    ? Math.max(2, Math.min(50, parseInt(inp.numStepsOverride)))
    : Math.max(2, Math.round(rise / code.riserMax));

  const riser   = rise / totalN;
  const stepsPerFlight = Math.ceil(totalN / 2);
  const tread   = flightRun / stepsPerFlight;
  const angle   = Math.atan2(riser, tread) * 180 / Math.PI;
  const formula = 2 * riser + tread;
  const checks  = buildChecks(riser, tread, width, angle, formula, code, code.headroomMin);
  
  const landingCheck = {
    label: "Landing depth", val: landingDepth.toFixed(0) + " mm",
    pass: landingDepth >= Math.max(width, 900),
    req: `≥ ${Math.max(width, 900)} mm`,
  };
  checks.push(landingCheck);

  const idealN  = Math.round(rise / code.idealRiser);
  const wellGap     = Math.max(100, width * 0.15);
  const totalWidth  = 2 * width + wellGap;
  const totalDepth  = flightRun + landingDepth;

  const r = {
    type: "ushaped",
    nSteps: totalN, stepsPerFlight,
    riser, tread, angle, formula, checks,
    ok: checks.every(c => c.pass),
    idealN,
    totalRise: rise, flightRun, stairWidth: width, landingDepth,
    totalWidth, totalDepth, wellGap,
  };
  r.recommendations = buildRecommendations(r, code);
  return r;
}

export function computeSpiral(inp, code) {
  const rise     = parseFloat(inp.totalRise);
  const diameter = parseFloat(inp.diameter) || 1600;
  const width    = parseFloat(inp.stairWidth) || (diameter / 2 * 0.6);
  if (!rise) return null;

  const totalN = inp.numStepsOverride
    ? Math.max(4, Math.min(50, parseInt(inp.numStepsOverride)))
    : Math.max(4, Math.round(rise / code.riserMax));

  const riser        = rise / totalN;
  const outerRadius  = diameter / 2;
  const innerRadius  = Math.max(60, outerRadius - width);
  const midRadius    = (outerRadius + innerRadius) / 2;
  const degPerStep   = 360 / totalN;
  const midTread     = midRadius * (degPerStep * Math.PI / 180);
  const innerTread   = innerRadius * (degPerStep * Math.PI / 180);
  const angle        = Math.atan2(riser, innerTread) * 180 / Math.PI;
  const formula      = 2 * riser + innerTread;
  
  const checks      = buildChecks(riser, innerTread, outerRadius - innerRadius, angle, formula, code, code.headroomMin);

  checks[1] = {
    ...checks[1],
    label: "Tread (inner arc)",
    val: innerTread.toFixed(1) + " mm",
  };

  const turnsTotal  = totalN / (360 / degPerStep);
  const idealN      = Math.round(rise / code.idealRiser);

  const r = {
    type: "spiral",
    nSteps: totalN, riser, tread: midTread, innerTread, angle, formula, checks,
    ok: checks.every(c => c.pass),
    idealN,
    totalRise: rise, diameter, outerRadius, innerRadius, midRadius,
    degPerStep, turnsTotal, stairWidth: outerRadius - innerRadius,
  };
  r.recommendations = buildRecommendations(r, code);
  return r;
}

export function compute(type, inputs, code) {
  switch (type) {
    case "straight": return computeStraight(inputs, code);
    case "lshaped":  return computeLShaped(inputs, code);
    case "ushaped":  return computeUShaped(inputs, code);
    case "spiral":   return computeSpiral(inputs, code);
    default:         return null;
  }
}
