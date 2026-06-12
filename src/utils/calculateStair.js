/**
 * Calculate staircase dimensions and compliance
 * @param {Object} inp - Input measurements
 * @param {number} inp.totalRise - Total vertical height
 * @param {number} inp.totalRun - Total horizontal distance
 * @param {number} inp.stairWidth - Stair width
 * @param {number} inp.numStepsOverride - Override step count
 * @param {Object} code - Building code object
 * @returns {Object|null} Calculation results or null if invalid input
 */
export function compute(inp, code) {
  const rise  = parseFloat(inp.totalRise);
  const run   = parseFloat(inp.totalRun);
  const width = parseFloat(inp.stairWidth) || 0;
  if (!rise || !run || rise <= 0 || run <= 0) return null;

  const nSteps = inp.numStepsOverride
    ? Math.max(2, Math.min(50, parseInt(inp.numStepsOverride)))
    : Math.max(2, Math.round(rise / code.riserMax));

  const riser   = rise / nSteps;
  const tread   = run  / nSteps;
  const angle   = Math.atan2(riser, tread) * 180 / Math.PI;
  const stringer = Math.sqrt(rise * rise + run * run);
  const formula = 2 * riser + tread;

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
  
  if (code.formulaRange) {
    checks.push({
      label: "2R + T formula", val: formula.toFixed(1) + " mm",
      pass: formula >= code.formulaRange[0] && formula <= code.formulaRange[1],
      req: `${code.formulaRange[0]}–${code.formulaRange[1]} mm`,
    });
  }

  const idealN  = Math.round(rise / code.idealRiser);
  const suggestN = (rise / code.idealRiser).toFixed(1);

  return { 
    nSteps, 
    riser, 
    tread, 
    angle, 
    stringer, 
    formula, 
    checks, 
    ok: checks.every(c => c.pass), 
    idealN, 
    suggestN 
  };
}
