// ─── Staircase Calculation Logic ─────────────────────────────────────────────

/**
 * Build the shared compliance checks array used by all staircase types.
 */
function buildChecks(riser, tread, width, angle, formula, code) {
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
  return checks;
}

// ─── Straight ────────────────────────────────────────────────────────────────

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
  const checks   = buildChecks(riser, tread, width, angle, formula, code);
  const idealN   = Math.round(rise / code.idealRiser);

  return {
    type: "straight",
    nSteps, riser, tread, angle, stringer, formula, checks,
    ok: checks.every(c => c.pass),
    idealN,
    // raw dims for renderers
    totalRise: rise, totalRun: run, stairWidth: width,
  };
}

// ─── L-Shaped ────────────────────────────────────────────────────────────────

export function computeLShaped(inp, code) {
  const rise         = parseFloat(inp.totalRise);
  const run1         = parseFloat(inp.run1);        // first flight horizontal
  const run2         = parseFloat(inp.run2);        // second flight horizontal
  const width        = parseFloat(inp.stairWidth) || 0;
  const landingDepth = parseFloat(inp.landingDepth) || width;
  if (!rise || !run1 || !run2) return null;

  const totalRun = run1 + run2;

  // Split steps proportionally by run length
  const totalN  = inp.numStepsOverride
    ? Math.max(2, Math.min(50, parseInt(inp.numStepsOverride)))
    : Math.max(2, Math.round(rise / code.riserMax));

  const riser   = rise / totalN;
  // Tread is based on each flight's run; use the shorter flight run to be conservative
  const tread   = Math.min(run1, run2) / Math.round(totalN * Math.min(run1, run2) / totalRun);
  const angle   = Math.atan2(riser, tread) * 180 / Math.PI;
  const formula = 2 * riser + tread;

  // Steps per flight (proportional to run length)
  const stepsF1 = Math.max(1, Math.round(totalN * run1 / totalRun));
  const stepsF2 = totalN - stepsF1;
  const tread1  = run1 / stepsF1;
  const tread2  = run2 / stepsF2;

  const checks  = buildChecks(riser, Math.min(tread1, tread2), width, angle, formula, code);
  const idealN  = Math.round(rise / code.idealRiser);

  return {
    type: "lshaped",
    nSteps: totalN, stepsF1, stepsF2,
    riser, tread1, tread2, angle, formula, checks,
    ok: checks.every(c => c.pass),
    idealN,
    totalRise: rise, run1, run2, totalRun, stairWidth: width, landingDepth,
  };
}

// ─── U-Shaped ────────────────────────────────────────────────────────────────

export function computeUShaped(inp, code) {
  const rise         = parseFloat(inp.totalRise);
  const flightRun    = parseFloat(inp.flightRun);   // run of ONE flight
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
  const checks  = buildChecks(riser, tread, width, angle, formula, code);
  const idealN  = Math.round(rise / code.idealRiser);

  // Overall footprint: 2*width + well gap (min 100 mm) wide, flightRun + landing deep
  const wellGap     = Math.max(100, width * 0.15);
  const totalWidth  = 2 * width + wellGap;
  const totalDepth  = flightRun + landingDepth;

  return {
    type: "ushaped",
    nSteps: totalN, stepsPerFlight,
    riser, tread, angle, formula, checks,
    ok: checks.every(c => c.pass),
    idealN,
    totalRise: rise, flightRun, stairWidth: width, landingDepth,
    totalWidth, totalDepth, wellGap,
  };
}

// ─── Spiral ──────────────────────────────────────────────────────────────────

export function computeSpiral(inp, code) {
  const rise     = parseFloat(inp.totalRise);
  const diameter = parseFloat(inp.diameter) || 1600;   // overall column diameter
  const width    = parseFloat(inp.stairWidth) || 0;    // tread width (outer - inner radius)
  if (!rise) return null;

  const totalN = inp.numStepsOverride
    ? Math.max(4, Math.min(50, parseInt(inp.numStepsOverride)))
    : Math.max(4, Math.round(rise / code.riserMax));

  const riser        = rise / totalN;
  const outerRadius  = diameter / 2;
  const innerRadius  = Math.max(60, outerRadius - (width || outerRadius * 0.6));
  const midRadius    = (outerRadius + innerRadius) / 2;
  const degPerStep   = 360 / totalN;                           // degrees of rotation per step
  const tread        = midRadius * (degPerStep * Math.PI / 180); // arc length at mid-radius
  const angle        = Math.atan2(riser, tread) * 180 / Math.PI;
  const formula      = 2 * riser + tread;

  // Spiral stairs: relaxed tread check (measured at narrower inner edge)
  const innerTread  = innerRadius * (degPerStep * Math.PI / 180);
  const checks      = buildChecks(riser, innerTread, width || (outerRadius - innerRadius), angle, formula, code);
  // Override tread label for spiral clarity
  checks[1] = {
    ...checks[1],
    label: "Tread (inner arc)",
    val: innerTread.toFixed(1) + " mm",
  };

  // Spiral stairs often get a code exemption, mark angle separately
  const turnsTotal  = totalN / (360 / degPerStep);
  const idealN      = Math.round(rise / code.idealRiser);

  return {
    type: "spiral",
    nSteps: totalN, riser, tread, innerTread, angle, formula, checks,
    ok: checks.every(c => c.pass),
    idealN,
    totalRise: rise, diameter, outerRadius, innerRadius, midRadius,
    degPerStep, turnsTotal, stairWidth: outerRadius - innerRadius,
  };
}

// ─── Dispatcher ──────────────────────────────────────────────────────────────

export function compute(type, inputs, code) {
  switch (type) {
    case "straight": return computeStraight(inputs, code);
    case "lshaped":  return computeLShaped(inputs, code);
    case "ushaped":  return computeUShaped(inputs, code);
    case "spiral":   return computeSpiral(inputs, code);
    default:         return null;
  }
}
