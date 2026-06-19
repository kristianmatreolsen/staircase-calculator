// ─── 2D Blueprint Views ───────────────────────────────────────────────────────
// Each staircase type gets its own SVG side-elevation / plan view.

import { COLORS } from "../styles/theme.js";

const SVG_W = 620, SVG_H = 420;
const PAD_L = 72, PAD_T = 36, PAD_R = 36, PAD_B = 60;
const DW = SVG_W - PAD_L - PAD_R;
const DH = SVG_H - PAD_T - PAD_B;

// ─── Shared helpers ───────────────────────────────────────────────────────────

function BpBase({ children, badge }) {
  return (
    <svg width="100%" viewBox={`0 0 ${SVG_W} ${SVG_H}`} preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id="bpa"  markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#E8A030"/>
        </marker>
        <marker id="bpas" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto-start-reverse">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#E8A030"/>
        </marker>
      </defs>
      <rect width={SVG_W} height={SVG_H} fill={COLORS.bg}/>
      {[...Array(22)].map((_,i) => <line key={`vg${i}`} x1={i*30} y1={0} x2={i*30} y2={SVG_H} stroke={COLORS.gridLine} strokeWidth="1"/>)}
      {[...Array(15)].map((_,i) => <line key={`hg${i}`} x1={0} y1={i*30} x2={SVG_W} y2={i*30} stroke={COLORS.gridLine} strokeWidth="1"/>)}
      {children}
      {badge && (
        <>
          <rect x={SVG_W-120} y={6} width={114} height={20} rx={3} fill="#0A2030"/>
          <text x={SVG_W-63} y={20} fill="#2A6EA8" fontSize="10" fontFamily="monospace" textAnchor="middle">{badge}</text>
        </>
      )}
    </svg>
  );
}

function DimH({ x1, x2, y, label }) {
  return (
    <>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke="#E8A030" strokeWidth="1" markerStart="url(#bpas)" markerEnd="url(#bpa)"/>
      <line x1={x1} y1={y-4} x2={x1} y2={y+4} stroke="#E8A030" strokeWidth="1"/>
      <line x1={x2} y1={y-4} x2={x2} y2={y+4} stroke="#E8A030" strokeWidth="1"/>
      <text x={(x1+x2)/2} y={y+14} fill="#E8A030" fontSize="10" fontFamily="monospace" textAnchor="middle">{label}</text>
    </>
  );
}

function DimV({ x, y1, y2, label }) {
  return (
    <>
      <line x1={x} y1={y1} x2={x} y2={y2} stroke="#E8A030" strokeWidth="1" markerStart="url(#bpas)" markerEnd="url(#bpa)"/>
      <line x1={x-4} y1={y1} x2={x+4} y2={y1} stroke="#E8A030" strokeWidth="1"/>
      <line x1={x-4} y1={y2} x2={x+4} y2={y2} stroke="#E8A030" strokeWidth="1"/>
      <text x={x-14} y={(y1+y2)/2+4} fill="#E8A030" fontSize="10" fontFamily="monospace" textAnchor="middle" transform={`rotate(-90 ${x-14} ${(y1+y2)/2+4})`}>{label}</text>
    </>
  );
}

function StepPath({ ox, oy, nSteps, riser, tread, sc }) {
  let d = `M ${ox} ${oy}`;
  for (let i = 0; i < nSteps; i++) {
    const xn = ox + (i + 1) * tread * sc;
    const yr = oy - riser * sc;
    d += ` V ${yr} H ${xn}`;
    oy = yr;
  }
  return d;
}

function StepShape({ ox, oy0, nSteps, riser, tread, sc, fill = COLORS.stepFill, stroke = COLORS.stepStroke }) {
  let path = `M ${ox} ${oy0}`;
  let cy = oy0;
  for (let i = 0; i < nSteps; i++) {
    const nx = ox + (i + 1) * tread * sc;
    cy = cy - riser * sc;
    path += ` V ${cy} H ${nx}`;
  }
  const fillPath = `${path} L ${ox + nSteps * tread * sc} ${oy0} Z`;
  return (
    <>
      <path d={fillPath} fill={fill} opacity="0.85"/>
      <path d={path} fill="none" stroke={stroke} strokeWidth="2.2" strokeLinejoin="miter"/>
      <path d={path} fill="none" stroke="#7ACFFF" strokeWidth="0.7" strokeLinejoin="miter" opacity="0.5"/>
    </>
  );
}

function AngleArc({ ox, oy, angle, size }) {
  const aRad = angle * Math.PI / 180;
  const ax = ox + size * Math.cos(aRad);
  const ay = oy - size * Math.sin(aRad);
  const arcPath = `M ${ox + size} ${oy} A ${size} ${size} 0 0 0 ${ax} ${ay}`;
  return (
    <>
      <path d={arcPath} fill="none" stroke={COLORS.teal} strokeWidth="1.3"/>
      <text
        x={ox + size * 0.65 * Math.cos(aRad / 2)}
        y={oy - size * 0.65 * Math.sin(aRad / 2) + 4}
        fill={COLORS.teal} fontSize="11" fontFamily="monospace" textAnchor="middle"
      >{angle.toFixed(1)}°</text>
    </>
  );
}

function EmptyBlueprint({ message = "ENTER MEASUREMENTS" }) {
  return (
    <BpBase>
      <text x={SVG_W/2} y={SVG_H/2-8} fill="#193450" fontSize="12" fontFamily="monospace" textAnchor="middle">{message}</text>
      <text x={SVG_W/2} y={SVG_H/2+14} fill="#122840" fontSize="10" fontFamily="monospace" textAnchor="middle">to generate blueprint</text>
    </BpBase>
  );
}

// ─── Straight ────────────────────────────────────────────────────────────────

function StraightBlueprint({ result }) {
  if (!result) return <EmptyBlueprint/>;
  const { nSteps, riser, tread, angle, totalRise: rise, totalRun: run } = result;

  const scX = DW / run, scY = DH / rise;
  const sc  = Math.min(scX, scY) * 0.85;
  const dW  = run * sc, dH = rise * sc;
  const ox  = PAD_L + (DW - dW) / 2;
  const oy  = PAD_T + (DH - dH) / 2 + dH; // bottom-left origin

  return (
    <BpBase badge={`${nSteps} STEPS · ${angle.toFixed(1)}°`}>
      <line x1={ox-24} y1={oy}    x2={ox+dW+16} y2={oy}    stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={ox}    y1={oy-dH-16} x2={ox}    y2={oy+24} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={ox} y1={oy} x2={ox+dW} y2={oy-dH} stroke="#0F3A5C" strokeWidth="1.5" strokeDasharray="6,3"/>
      <StepShape ox={ox} oy0={oy} nSteps={nSteps} riser={riser} tread={tread} sc={sc}/>
      <AngleArc ox={ox} oy={oy} angle={angle} size={Math.min(dW, dH) * 0.22}/>
      <DimV x={ox-38} y1={oy-dH} y2={oy} label={`${rise.toFixed(0)} mm`}/>
      <DimH x1={ox} x2={ox+dW} y={oy+34} label={`${run.toFixed(0)} mm`}/>
      {riser * sc > 20 && <text x={ox+6} y={oy - riser*sc/2 + 4} fill="#6DB8E0" fontSize="9.5" fontFamily="monospace">{riser.toFixed(0)}R</text>}
      {tread * sc > 30 && <text x={ox + tread*sc/2} y={oy-6} fill="#6DB8E0" fontSize="9.5" fontFamily="monospace" textAnchor="middle">{tread.toFixed(0)}T</text>}
    </BpBase>
  );
}

// ─── L-Shaped ────────────────────────────────────────────────────────────────

function LShapedBlueprint({ result }) {
  if (!result) return <EmptyBlueprint message="ENTER RISE & RUNS"/>;
  const { nSteps, stepsF1, stepsF2, riser, tread1, tread2, angle, totalRise: rise, run1, run2, landingDepth } = result;

  // Scale to fit: flight1 goes right, landing, flight2 goes up
  const totalW = run1 + landingDepth;
  const totalH = rise;
  const scX = DW / totalW, scY = DH / totalH;
  const sc  = Math.min(scX, scY) * 0.80;

  const ox = PAD_L + (DW - totalW * sc) / 2;
  const oy = PAD_T + (DH - totalH * sc) / 2 + totalH * sc; // bottom-left

  const riseF1 = stepsF1 * riser;
  const riseF2 = stepsF2 * riser;
  const r1s    = run1 * sc;
  const r2s    = riseF2 * sc; // flight2 goes vertically, use rise as height
  const ld     = landingDepth * sc;

  // Flight 1: horizontal steps going right
  let f1path = `M ${ox} ${oy}`;
  let cy1 = oy;
  for (let i = 0; i < stepsF1; i++) {
    const nx = ox + (i+1) * tread1 * sc;
    cy1 -= riser * sc;
    f1path += ` V ${cy1} H ${nx}`;
  }
  const f1fill = `${f1path} L ${ox + r1s} ${oy} Z`;

  // Landing box (at corner)
  const lx = ox + r1s;
  const ly = cy1; // top of flight1 = landing level

  // Flight 2: steps going upward (left to right, rising)
  // Flight 2 turns 90°, so treads now go along the Y axis
  let f2path = `M ${lx + ld} ${ly}`;
  let cy2 = ly;
  for (let i = 0; i < stepsF2; i++) {
    cy2 -= riser * sc;
    f2path += ` V ${cy2} H ${lx + ld - tread2 * sc}`;
  }
  // close back to landing corner
  const f2fill = `${f2path} L ${lx + ld} ${ly} Z`;

  return (
    <BpBase badge={`${nSteps} STEPS · 90° TURN`}>
      {/* Datum lines */}
      <line x1={ox-20} y1={oy} x2={ox+totalW*sc+20} y2={oy} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      {/* Flight 1 */}
      <path d={f1fill} fill={COLORS.stepFill} opacity="0.85"/>
      <path d={f1path} fill="none" stroke={COLORS.stepStroke} strokeWidth="2.2" strokeLinejoin="miter"/>
      <path d={f1path} fill="none" stroke="#7ACFFF" strokeWidth="0.7" strokeLinejoin="miter" opacity="0.5"/>
      {/* Landing */}
      <rect x={lx} y={ly} width={ld} height={riser * sc} fill="#0B2A3E" stroke="#2A6080" strokeWidth="1.5" strokeDasharray="4,3"/>
      <text x={lx + ld/2} y={ly + riser*sc/2 + 4} fill="#1A4060" fontSize="8" fontFamily="monospace" textAnchor="middle">LANDING</text>
      {/* Flight 2 */}
      <path d={f2fill} fill={COLORS.stepFill} opacity="0.85"/>
      <path d={f2path} fill="none" stroke={COLORS.stepStroke} strokeWidth="2.2" strokeLinejoin="miter"/>
      <path d={f2path} fill="none" stroke="#7ACFFF" strokeWidth="0.7" strokeLinejoin="miter" opacity="0.5"/>
      {/* Angle marker on flight 1 */}
      <AngleArc ox={ox} oy={oy} angle={angle} size={Math.min(r1s, riseF1*sc) * 0.22}/>
      {/* Dimensions */}
      <DimH x1={ox} x2={ox+r1s} y={oy+34} label={`Run 1: ${run1.toFixed(0)} mm`}/>
      <DimV x={ox-38} y1={oy-rise*sc} y2={oy} label={`${rise.toFixed(0)} mm`}/>
      {/* Labels */}
      <text x={ox+r1s/2} y={oy-riseF1*sc/2} fill="#2A5080" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Flight 1</text>
      <text x={lx+ld+tread2*sc*0.8} y={ly-riseF2*sc/2} fill="#2A5080" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Flight 2</text>
    </BpBase>
  );
}

// ─── U-Shaped ────────────────────────────────────────────────────────────────

function UShapedBlueprint({ result }) {
  if (!result) return <EmptyBlueprint message="ENTER RISE & RUN"/>;
  const { stepsPerFlight, riser, tread, angle, totalRise: rise, flightRun, landingDepth, stairWidth, wellGap } = result;

  // Side elevation: show both parallel flights and landing
  // Footprint (plan view in 2D): totalWidth = 2*sw + wellGap, depth = flightRun + landingDepth
  const totalH = rise;
  const totalW = flightRun * 2 + landingDepth;
  const scX = DW / totalW, scY = DH / totalH;
  const sc  = Math.min(scX, scY) * 0.80;

  const ox = PAD_L + (DW - totalW * sc) / 2;
  const oy = PAD_T + DH - (DH - totalH * sc) / 2;

  const fr = flightRun * sc;
  const ld = landingDepth * sc;

  // Flight 1 side elevation (going up left to right)
  let f1path = `M ${ox} ${oy}`;
  let cy1 = oy;
  for (let i = 0; i < stepsPerFlight; i++) {
    const nx = ox + (i+1) * tread * sc;
    cy1 -= riser * sc;
    f1path += ` V ${cy1} H ${nx}`;
  }
  const landingY = cy1;
  const f1fill = `${f1path} L ${ox + fr} ${oy} Z`;

  // Landing platform
  const lx = ox + fr;

  // Flight 2 side elevation (going up right to left — symmetric descent shown going right still for clarity)
  let f2path = `M ${lx + ld} ${landingY}`;
  let cy2 = landingY;
  for (let i = 0; i < stepsPerFlight; i++) {
    cy2 -= riser * sc;
    f2path += ` V ${cy2} H ${lx + ld + (i+1) * tread * sc}`;
  }
  const f2fill = `${f2path} L ${lx + ld} ${landingY} Z`;

  return (
    <BpBase badge={`${stepsPerFlight * 2} STEPS · 180° TURN`}>
      <line x1={ox-20} y1={oy} x2={ox + totalW*sc + 20} y2={oy} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      {/* Flight 1 */}
      <path d={f1fill} fill={COLORS.stepFill} opacity="0.85"/>
      <path d={f1path} fill="none" stroke={COLORS.stepStroke} strokeWidth="2.2" strokeLinejoin="miter"/>
      <path d={f1path} fill="none" stroke="#7ACFFF" strokeWidth="0.7" strokeLinejoin="miter" opacity="0.5"/>
      {/* Landing */}
      <rect x={lx} y={landingY} width={ld} height={riser*sc} fill="#0B2A3E" stroke="#2A6080" strokeWidth="1.5" strokeDasharray="4,3"/>
      <text x={lx + ld/2} y={landingY + riser*sc/2 + 4} fill="#1A4060" fontSize="8" fontFamily="monospace" textAnchor="middle">LANDING</text>
      {/* 180° arrow */}
      <text x={lx + ld/2} y={landingY - 12} fill="#44C899" fontSize="11" fontFamily="monospace" textAnchor="middle">180°↩</text>
      {/* Flight 2 */}
      <path d={f2fill} fill={COLORS.stepFill} opacity="0.85"/>
      <path d={f2path} fill="none" stroke={COLORS.stepStroke} strokeWidth="2.2" strokeLinejoin="miter"/>
      <path d={f2path} fill="none" stroke="#7ACFFF" strokeWidth="0.7" strokeLinejoin="miter" opacity="0.5"/>
      {/* Angle on flight1 */}
      <AngleArc ox={ox} oy={oy} angle={angle} size={fr * 0.22}/>
      {/* Dims */}
      <DimH x1={ox} x2={ox+fr} y={oy+34} label={`${flightRun.toFixed(0)} mm`}/>
      <DimH x1={lx} x2={lx+ld} y={oy+34} label={`${landingDepth.toFixed(0)} mm`}/>
      <DimV x={ox-38} y1={oy-rise*sc} y2={oy} label={`${rise.toFixed(0)} mm`}/>
      <text x={ox+fr/2} y={oy-rise*sc/2} fill="#2A5080" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Flight 1</text>
      <text x={lx+ld+fr/2} y={landingY-rise*sc/2} fill="#2A5080" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Flight 2</text>
    </BpBase>
  );
}

// ─── Spiral ──────────────────────────────────────────────────────────────────

function SpiralBlueprint({ result }) {
  if (!result) return <EmptyBlueprint message="ENTER RISE & DIAMETER"/>;
  const { nSteps, riser, tread, degPerStep, outerRadius, innerRadius, totalRise: rise } = result;

  // Draw a top-down plan view of the spiral
  const maxR  = outerRadius;
  const sc    = Math.min(DW, DH) * 0.42 / maxR;
  const cx    = PAD_L + DW / 2;
  const cy    = PAD_T + DH / 2;
  const or    = outerRadius * sc;
  const ir    = innerRadius * sc;
  const SHOW  = Math.min(nSteps, 16); // cap drawn steps for clarity

  // Draw tread wedges
  const wedges = [];
  for (let i = 0; i < SHOW; i++) {
    const a1 = (i * degPerStep - 90) * Math.PI / 180;
    const a2 = ((i + 1) * degPerStep - 90) * Math.PI / 180;
    const x1 = cx + or * Math.cos(a1), y1 = cy + or * Math.sin(a1);
    const x2 = cx + or * Math.cos(a2), y2 = cy + or * Math.sin(a2);
    const ix1 = cx + ir * Math.cos(a1), iy1 = cy + ir * Math.sin(a1);
    const ix2 = cx + ir * Math.cos(a2), iy2 = cy + ir * Math.sin(a2);
    const large = (a2 - a1) > Math.PI ? 1 : 0;
    const d = `M ${ix1} ${iy1} L ${x1} ${y1} A ${or} ${or} 0 ${large} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${ir} ${ir} 0 ${large} 0 ${ix1} ${iy1} Z`;
    const alpha = 0.3 + (i / SHOW) * 0.55;
    wedges.push(<path key={i} d={d} fill={`rgba(30,90,140,${alpha})`} stroke={COLORS.stepStroke} strokeWidth="0.8"/>);
    // Nose line
    wedges.push(<line key={`n${i}`} x1={ix1} y1={iy1} x2={x1} y2={y1} stroke="#7ACFFF" strokeWidth="0.6" opacity="0.4"/>);
  }

  return (
    <BpBase badge={`${nSteps} STEPS · ${(nSteps * degPerStep / 360).toFixed(1)} TURNS`}>
      {/* Outer circle */}
      <circle cx={cx} cy={cy} r={or} fill="none" stroke="#174870" strokeWidth="1.5" strokeDasharray="6,3"/>
      {/* Inner pole */}
      <circle cx={cx} cy={cy} r={ir} fill="#07192A" stroke="#0E3050" strokeWidth="1.5"/>
      <circle cx={cx} cy={cy} r={Math.max(3, ir * 0.25)} fill="#1A4060"/>
      {/* Wedges */}
      {wedges}
      {/* Radius labels */}
      <line x1={cx} y1={cy} x2={cx + or} y2={cy} stroke="#E8A030" strokeWidth="1"/>
      <text x={cx + or/2} y={cy - 6} fill="#E8A030" fontSize="9" fontFamily="monospace" textAnchor="middle">⌀{(outerRadius*2).toFixed(0)} mm</text>
      {/* Centre cross */}
      <line x1={cx-8} y1={cy} x2={cx+8} y2={cy} stroke="#44C899" strokeWidth="1"/>
      <line x1={cx} y1={cy-8} x2={cx} y2={cy+8} stroke="#44C899" strokeWidth="1"/>
      {/* Riser label */}
      <text x={cx} y={cy + or + 22} fill="#6DB8E0" fontSize="9.5" fontFamily="monospace" textAnchor="middle">
        Riser {riser.toFixed(0)} mm · {degPerStep.toFixed(1)}° / step
      </text>
      <text x={PAD_L + 4} y={PAD_T + 14} fill="#1A3F5C" fontSize="8.5" fontFamily="monospace">TOP-DOWN VIEW</text>
      {/* Total rise dim */}
      <DimV x={PAD_L - 18} y1={PAD_T + 18} y2={PAD_T + 18 + rise * (DH * 0.6) / rise} label={`${rise.toFixed(0)} mm`}/>
    </BpBase>
  );
}

// ─── Dispatcher ──────────────────────────────────────────────────────────────

export default function Blueprint2D({ result, stairType }) {
  switch (stairType) {
    case "lshaped": return <LShapedBlueprint result={result}/>;
    case "ushaped": return <UShapedBlueprint result={result}/>;
    case "spiral":  return <SpiralBlueprint  result={result}/>;
    default:        return <StraightBlueprint result={result}/>;
  }
}
