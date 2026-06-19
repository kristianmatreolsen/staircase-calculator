import { COLORS } from "../styles/theme.js";

const SVG_W = 620, SVG_H = 420;
const PAD_L = 72, PAD_T = 112, PAD_R = 36, PAD_B = 36;
const SAFE_PAD = 16;
const SAFE_MARGIN = 28;
const SAFE_LEFT = PAD_L + SAFE_PAD / 2;
const SAFE_RIGHT = SVG_W - PAD_R - SAFE_PAD / 2;
const SAFE_TOP = PAD_T + SAFE_PAD / 2;
const SAFE_BOTTOM = SVG_H - PAD_B - SAFE_PAD / 2;
const DW = SAFE_RIGHT - SAFE_LEFT;
const DH = SAFE_BOTTOM - SAFE_TOP;
const SIDEBAR_X = SVG_W + 8;
const SIDEBAR_W = 204;
const SVG_TOTAL_W = SVG_W + SIDEBAR_W + 16;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function safeTextX(x) {
  return clamp(x, SAFE_LEFT + SAFE_MARGIN, SAFE_RIGHT - SAFE_MARGIN);
}

function safeTextY(y) {
  return clamp(y, SAFE_TOP + SAFE_MARGIN, SAFE_BOTTOM - SAFE_MARGIN);
}

function BpBase({ children, badge, result }) {
  return (
    <svg width="100%" viewBox={`0 0 ${SVG_TOTAL_W} ${SVG_H}`} preserveAspectRatio="xMidYMid meet" overflow="hidden" style={{ overflow: 'hidden' }}>
      <style>{`text { font-size: 50%; }`}</style>
      <defs>
        <marker id="bpa" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#E8A030"/>
        </marker>
        <marker id="bpas" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto-start-reverse">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#E8A030"/>
        </marker>
      </defs>
      <rect width={SVG_TOTAL_W} height={SVG_H} fill={COLORS.bg}/>
      {[...Array(22)].map((_,i) => <line key={`vg${i}`} x1={i*30} y1={0} x2={i*30} y2={SVG_H} stroke={COLORS.gridLine} strokeWidth="1"/>)}
      {[...Array(15)].map((_,i) => <line key={`hg${i}`} x1={0} y1={i*30} x2={SVG_W} y2={i*30} stroke={COLORS.gridLine} strokeWidth="1"/>)}
      {children}
      <rect x={SVG_W + 3} y={0} width={SVG_TOTAL_W - SVG_W - 3} height={SVG_H} fill={COLORS.bg}/>
      <line x1={SVG_W + 2} y1={0} x2={SVG_W + 2} y2={SVG_H} stroke="#0D2840" strokeWidth="1"/>
      {result && <InfoSidebar result={result}/>}
      {badge && (
        <>
          <rect x={SVG_W-120} y={6} width={114} height={20} rx={3} fill="#0A2030"/>
          <text x={SVG_W-63} y={20} fill="#2A6EA8" fontSize="10" fontFamily="monospace" textAnchor="middle">{badge}</text>
        </>
      )}
    </svg>
  );
}

function DimH({ x1, x2, y, label, textAbove = false }) {
  const x1c = clamp(x1, SAFE_LEFT, SAFE_RIGHT);
  const x2c = clamp(x2, SAFE_LEFT, SAFE_RIGHT);
  const yC = clamp(y, SAFE_TOP + 24, SAFE_BOTTOM - (textAbove ? 18 : 34));
  const labelY = textAbove ? yC - 8 : yC + 14;
  const labelX = clamp((x1c + x2c) / 2, SAFE_LEFT + 20, SAFE_RIGHT - 20);
  return (
    <>
      <line x1={x1c} y1={yC} x2={x2c} y2={yC} stroke="#E8A030" strokeWidth="1"/>
      <line x1={x1c} y1={yC-4} x2={x1c} y2={yC+4} stroke="#E8A030" strokeWidth="1"/>
      <line x1={x2c} y1={yC-4} x2={x2c} y2={yC+4} stroke="#E8A030" strokeWidth="1"/>
      <text x={labelX} y={labelY} fill="#E8A030" fontSize="10" fontFamily="monospace" textAnchor="middle">{label}</text>
    </>
  );
}

function DimV({ x, y1, y2, label }) {
  const xc = clamp(x, SAFE_LEFT + 20, SAFE_RIGHT - 20);
  const y1c = clamp(y1, SAFE_TOP + 12, SAFE_BOTTOM - 12);
  const y2c = clamp(y2, SAFE_TOP + 12, SAFE_BOTTOM - 12);
  const labelX = clamp(xc - 16, SAFE_LEFT + 20, SAFE_RIGHT - 20);
  const labelY = clamp((y1c + y2c) / 2 + 4, SAFE_TOP + 20, SAFE_BOTTOM - 20);
  return (
    <>
      <line x1={xc} y1={y1c} x2={xc} y2={y2c} stroke="#E8A030" strokeWidth="1"/>
      <line x1={xc-4} y1={y1c} x2={xc+4} y2={y1c} stroke="#E8A030" strokeWidth="1"/>
      <line x1={xc-4} y1={y2c} x2={xc+4} y2={y2c} stroke="#E8A030" strokeWidth="1"/>
      <text x={labelX} y={labelY} fill="#E8A030" fontSize="10" fontFamily="monospace" textAnchor="middle" transform={`rotate(-90 ${labelX} ${labelY})`}>{label}</text>
    </>
  );
}

function StepShape({ ox, oy0, nSteps, riser, tread, sc, fill = COLORS.stepFill, stroke = COLORS.stepStroke }) {
  let path = `M ${ox} ${oy0}`;
  let cy = oy0;
  for (let i = 0; i < nSteps; i++) {
    const nx = ox + (i + 1) * tread * sc;
    cy -= riser * sc;
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
        x={safeTextX(ox + size * 0.65 * Math.cos(aRad / 2))}
        y={safeTextY(oy - size * 0.65 * Math.sin(aRad / 2) + 4)}
        fill={COLORS.teal} fontSize="11" fontFamily="monospace" textAnchor="middle"
      >{angle.toFixed(1)}°</text>
    </>
  );
}

function InfoPanel({ title, totalRise, angle, diameter }) {
  const panelCenterX = 310;
  const panelY = 50;
  const panelWidth = 178;
  const lineHeight = 16;
  const textColor = "#82C4FF";
  const secondaryColor = "#C7E7FF";
  const lines = [
    title,
    `Total Rise: ${totalRise?.toFixed(0) ?? "--"} mm`,
  ];
  if (typeof angle === "number") {
    lines.push(`Angle: ${angle.toFixed(1)}°`);
  }
  if (typeof diameter === "number") {
    lines.push(`Diameter: ${diameter.toFixed(0)} mm`);
  }
  const panelHeight = 8 + lines.length * lineHeight;

  return (
    <>
      <rect x={panelCenterX - panelWidth / 2} y={panelY - 4} width={panelWidth} height={panelHeight} rx={8} fill="rgba(6,22,40,0.88)" stroke="#2A6EA8" strokeWidth="1"/>
      {lines.map((line, index) => (
        <text
          key={line}
          x={panelCenterX}
          y={panelY + index * lineHeight + 12}
          fill={index === 0 ? textColor : secondaryColor}
          fontSize={index === 0 ? 11 : 10}
          fontFamily="monospace"
          textAnchor="middle"
        >{line}</text>
      ))}
    </>
  );
}

function getMetrics(result) {
  switch (result.type) {
    case 'lshaped': return [
      { label: 'Total Height',  value: `${result.totalRise?.toFixed(0)} mm` },
      { label: 'Total Run',     value: `${result.totalRun?.toFixed(0)} mm` },
      { label: 'Total Steps',   value: `${result.nSteps}` },
      { label: 'F1 Steps',      value: `${result.stepsF1}` },
      { label: 'F2 Steps',      value: `${result.stepsF2}` },
      { label: 'Riser',         value: `${result.riser?.toFixed(1)} mm` },
      { label: 'Tread F1',      value: `${result.tread1?.toFixed(1)} mm` },
      { label: 'Tread F2',      value: `${result.tread2?.toFixed(1)} mm` },
      { label: 'Angle',         value: `${result.angle?.toFixed(1)}°` },
      { label: '2R + T',        value: `${result.formula?.toFixed(1)} mm` },
    ];
    case 'ushaped': return [
      { label: 'Total Height',  value: `${result.totalRise?.toFixed(0)} mm` },
      { label: 'Flight Run',    value: `${result.flightRun?.toFixed(0)} mm` },
      { label: 'Total Steps',   value: `${result.nSteps}` },
      { label: 'Steps/Flight',  value: `${result.stepsPerFlight}` },
      { label: 'Riser',         value: `${result.riser?.toFixed(1)} mm` },
      { label: 'Tread',         value: `${result.tread?.toFixed(1)} mm` },
      { label: 'Angle',         value: `${result.angle?.toFixed(1)}°` },
      { label: 'Total Width',   value: `${result.totalWidth?.toFixed(0)} mm` },
      { label: 'Total Depth',   value: `${result.totalDepth?.toFixed(0)} mm` },
      { label: '2R + T',        value: `${result.formula?.toFixed(1)} mm` },
    ];
    case 'spiral': return [
      { label: 'Total Height',  value: `${result.totalRise?.toFixed(0)} mm` },
      { label: 'Total Steps',   value: `${result.nSteps}` },
      { label: 'Turns',         value: `${result.turnsTotal?.toFixed(2)}×` },
      { label: 'Deg/Step',      value: `${result.degPerStep?.toFixed(1)}°` },
      { label: 'Riser',         value: `${result.riser?.toFixed(1)} mm` },
      { label: 'Tread (mid)',   value: `${result.tread?.toFixed(1)} mm` },
      { label: 'Tread (inner)', value: `${result.innerTread?.toFixed(1)} mm` },
      { label: 'Outer Radius',  value: `${result.outerRadius?.toFixed(0)} mm` },
      { label: 'Angle',         value: `${result.angle?.toFixed(1)}°` },
    ];
    default: return [
      { label: 'Total Height',  value: `${result.totalRise?.toFixed(0)} mm` },
      { label: 'Total Run',     value: `${result.totalRun?.toFixed(0)} mm` },
      { label: 'Steps',         value: `${result.nSteps}` },
      { label: 'Riser',         value: `${result.riser?.toFixed(1)} mm` },
      { label: 'Tread',         value: `${result.tread?.toFixed(1)} mm` },
      { label: 'Angle',         value: `${result.angle?.toFixed(1)}°` },
      { label: 'Stringer',      value: `${result.stringer ? (result.stringer / 1000).toFixed(3) : '--'} m` },
      { label: '2R + T',        value: `${result.formula?.toFixed(1)} mm` },
    ];
  }
}

function InfoSidebar({ result }) {
  if (!result) return null;
  const sx = SIDEBAR_X;
  const sw = SIDEBAR_W;
  const lx = sx + 8;
  const rx = sx + sw - 6;
  const metrics = getMetrics(result);
  const statusColor = result.ok ? '#44C899' : '#F06060';

  const titleY       = 22;
  const statusY      = titleY + 18;
  const mHeadY       = statusY + 22;
  const firstMetricY = mHeadY + 13;
  const cHeadY       = firstMetricY + metrics.length * 13 + 12;
  const firstCheckY  = cHeadY + 13;

  return (
    <>
      <rect x={sx - 2} y={6} width={sw + 4} height={SVG_H - 12} rx={3} fill="#040E18" stroke="#0D2840" strokeWidth="1"/>
      {/* Title */}
      <text x={sx + sw / 2} y={titleY} fill="#82C4FF" fontSize="9" fontFamily="monospace" textAnchor="middle" letterSpacing="1.5">RESULTS</text>
      <line x1={sx + 4} y1={titleY + 4} x2={sx + sw - 4} y2={titleY + 4} stroke="#0D2E4A" strokeWidth="0.8"/>
      {/* Status */}
      <text x={sx + sw / 2} y={statusY} fill={statusColor} fontSize="8.5" fontFamily="monospace" textAnchor="middle">{result.ok ? '✓  COMPLIANT' : '✗  VIOLATIONS'}</text>
      <line x1={sx + 4} y1={statusY + 4} x2={sx + sw - 4} y2={statusY + 4} stroke="#0D2E4A" strokeWidth="0.8"/>
      {/* Metrics heading */}
      <text x={lx} y={mHeadY} fill="#1E5080" fontSize="7.5" fontFamily="monospace" letterSpacing="1">METRICS</text>
      {/* Metric rows */}
      {metrics.map(({ label, value }, i) => (
        <g key={`sm${i}`}>
          <line x1={sx + 4} y1={firstMetricY + i * 13 - 10} x2={sx + sw - 4} y2={firstMetricY + i * 13 - 10} stroke="#060F1A" strokeWidth="0.5"/>
          <text x={lx} y={firstMetricY + i * 13} fill="#4A8AAA" fontSize="8" fontFamily="monospace">{label}</text>
          <text x={rx} y={firstMetricY + i * 13} fill="#C0DCF0" fontSize="8.5" fontFamily="monospace" textAnchor="end">{value}</text>
        </g>
      ))}
      <line x1={sx + 4} y1={cHeadY - 4} x2={sx + sw - 4} y2={cHeadY - 4} stroke="#0D2E4A" strokeWidth="0.8"/>
      {/* Compliance heading */}
      <text x={lx} y={cHeadY} fill="#1E5080" fontSize="7.5" fontFamily="monospace" letterSpacing="1">COMPLIANCE</text>
      {/* Compliance check rows */}
      {(result.checks || []).map((c, i) => {
        const cc = c.pass ? '#44C899' : '#F06060';
        const cy = firstCheckY + i * 22;
        return (
          <g key={`sc${i}`}>
            <text x={lx} y={cy} fill={cc} fontSize="9" fontFamily="monospace">{c.pass ? '✓' : '✗'}</text>
            <text x={lx + 11} y={cy} fill={cc} fontSize="7.5" fontFamily="monospace">{c.label}: {c.val}</text>
            <text x={lx + 11} y={cy + 11} fill="#1A3F5C" fontSize="7" fontFamily="monospace">{c.req}</text>
          </g>
        );
      })}
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

function StraightBlueprint({ result }) {
  if (!result) return <EmptyBlueprint/>;
  const { nSteps, riser, tread, angle, totalRise: rise, totalRun, stairWidth } = result;
  const width = stairWidth;
  const run = totalRun || (nSteps * tread);

  const scX = DW / run, scY = DH / rise;
  const sc  = Math.min(scX, scY) * 0.65;
  const dW  = run * sc, dH = rise * sc;
  const ox  = SAFE_LEFT + (DW - dW) / 2;
  const oy  = SAFE_TOP + (DH - dH) / 2 + dH;

  return (
    <BpBase badge={`${nSteps} STEPS · ${angle.toFixed(1)}°`} result={result}>
      <line x1={clamp(ox-24, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox+dW+16, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy-dH-16, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy+24, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox+dW, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy-dH, SAFE_TOP, SAFE_BOTTOM)} stroke="#0F3A5C" strokeWidth="1.5" strokeDasharray="6,3"/>
      <StepShape ox={ox} oy0={oy} nSteps={nSteps} riser={riser} tread={tread} sc={sc}/>
      <AngleArc ox={ox} oy={oy} angle={angle} size={Math.min(dW, dH) * 0.22}/>
      <DimV x={ox-38} y1={oy-dH} y2={oy} label={`Total Rise: ${rise.toFixed(0)} mm`}/>
      <DimH x1={ox} x2={ox+dW} y={oy+34} label={`Total Run: ${run.toFixed(0)} mm`}/>
      <InfoPanel title="ELEVATION VIEW" totalRise={rise} angle={angle} />
      {riser * sc > 20 && <text x={safeTextX(ox+6)} y={safeTextY(oy - riser*sc/2 + 4)} fill="#6DB8E0" fontSize="9.5" fontFamily="monospace">Riser {riser.toFixed(0)} mm</text>}
      {tread * sc > 30 && <text x={safeTextX(ox + tread*sc/2)} y={safeTextY(oy-6)} fill="#6DB8E0" fontSize="9.5" fontFamily="monospace" textAnchor="middle">Tread {tread.toFixed(0)} mm</text>}
    </BpBase>
  );
}

function LShapedBlueprint({ result }) {
  if (!result) return <EmptyBlueprint message="ENTER RISE & RUNS"/>;
  const { nSteps, stepsF1, stepsF2, riser, tread1, tread2, angle, totalRise: rise, run1, run2, landingDepth, stairWidth } = result;

  const totalW = run1 + landingDepth;
  const totalH = rise;
  const scX = DW / totalW, scY = DH / totalH;
  const sc  = Math.min(scX, scY) * 0.62;

  const ox = SAFE_LEFT + (DW - totalW * sc) / 2;
  const oy = SAFE_TOP + (DH - totalH * sc) / 2 + totalH * sc;

  const riseF1 = stepsF1 * riser;
  const riseF2 = stepsF2 * riser;
  const r1s    = run1 * sc;
  const ld     = landingDepth * sc;

  let f1path = `M ${ox} ${oy}`;
  let cy1 = oy;
  for (let i = 0; i < stepsF1; i++) {
    const nx = ox + (i+1) * tread1 * sc;
    cy1 -= riser * sc;
    f1path += ` V ${cy1} H ${nx}`;
  }
  const f1fill = `${f1path} L ${ox + r1s} ${oy} Z`;

  const lx = ox + r1s;
  const ly = cy1;
  const f2x = lx;
  const f2w = ld;
  const f2h = riseF2 * sc;
  const f2y = ly - f2h;

  return (
    <BpBase badge={`${nSteps} STEPS · 90° TURN`} result={result}>
      <line x1={clamp(ox-20, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox+totalW*sc+20, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy-rise*sc-16, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy+24, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox+r1s, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy-riseF1*sc, SAFE_TOP, SAFE_BOTTOM)} stroke="#0F3A5C" strokeWidth="1.5" strokeDasharray="6,3"/>
      <path d={f1fill} fill={COLORS.stepFill} opacity="0.85"/>
      <path d={f1path} fill="none" stroke={COLORS.stepStroke} strokeWidth="2.2" strokeLinejoin="miter"/>
      <path d={f1path} fill="none" stroke="#7ACFFF" strokeWidth="0.7" strokeLinejoin="miter" opacity="0.5"/>
      <rect x={lx} y={ly} width={ld} height={riser * sc} fill="#0B2A3E" stroke="#2A6080" strokeWidth="1.5" strokeDasharray="4,3"/>
      <text x={safeTextX(lx + ld/2)} y={safeTextY(ly + riser*sc/2 + 4)} fill="#1A4060" fontSize="8" fontFamily="monospace" textAnchor="middle">LANDING</text>
      <text x={safeTextX(lx + ld/2)} y={safeTextY(ly + riser*sc + 14)} fill="#44C899" fontSize="11" fontFamily="monospace" textAnchor="middle">90°↱</text>
      <rect x={f2x} y={f2y} width={f2w} height={f2h} fill={COLORS.stepFill} opacity="0.85"/>
      {[...Array(stepsF2 - 1)].map((_, i) => {
        const yi = ly - (i + 1) * riser * sc;
        return <line key={i} x1={f2x} y1={yi} x2={f2x + f2w} y2={yi} stroke={COLORS.stepStroke} strokeWidth="2" />;
      })}
      <path d={`M ${f2x} ${f2y} L ${f2x + f2w} ${f2y} L ${f2x + f2w} ${ly} L ${f2x} ${ly} Z`} fill="none" stroke={COLORS.stepStroke} strokeWidth="2.2"/>
      <AngleArc ox={ox} oy={oy} angle={angle} size={Math.min(r1s, riseF1*sc) * 0.22}/>
      <DimH x1={ox} x2={ox+r1s} y={oy+34} label={`Run 1: ${run1.toFixed(0)} mm`}/>
      <DimH x1={lx} x2={lx+ld} y={oy+34} label={`Landing: ${landingDepth.toFixed(0)} mm`}/>
      <DimV x={ox-38} y1={oy-rise*sc} y2={oy} label={`${rise.toFixed(0)} mm`}/>
      <DimV x={f2x + f2w + 28} y1={oy} y2={ly} label={`Flight 1: ${riseF1.toFixed(0)} mm`}/>
      <DimV x={f2x + f2w + 28} y1={ly} y2={f2y} label={`Flight 2: ${riseF2.toFixed(0)} mm`}/>
      <InfoPanel title="ELEVATION VIEW" totalRise={rise} angle={angle} />
      <text x={safeTextX(ox + r1s * 0.65)} y={safeTextY(oy-riseF1*sc/2)} fill="#44C899" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Flight 1</text>
      <text x={safeTextX(f2x + f2w * 0.5)} y={safeTextY(ly - f2h/2)} fill="#44C899" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Flight 2</text>
    </BpBase>
  );
}

function StraightTopDownBlueprint({ result }) {
  if (!result) return <EmptyBlueprint/>;
  const { nSteps, tread, stairWidth: sw, totalRun, totalRise: rise, angle } = result;
  const run = totalRun || (nSteps * tread);
  const width = sw;
  const scX = DW / run, scY = DH / width;
  const sc  = Math.min(scX, scY) * 0.62;
  const dW  = run * sc, dH = width * sc;
  const ox  = SAFE_LEFT + (DW - dW) / 2;
  const oy  = SAFE_TOP + (DH - dH) / 2;

  return (
    <BpBase badge={`${nSteps} STEPS · TOP-DOWN`} result={result}>
      <line x1={clamp(ox-24, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox+dW+16, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy-16, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy+dH+24, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <rect x={ox} y={oy} width={dW} height={dH} fill={COLORS.stepFill} opacity="0.85" stroke={COLORS.stepStroke} strokeWidth="2.2"/>
      {[...Array(nSteps - 1)].map((_, i) => (
        <line key={i} x1={ox + (i + 1) * tread * sc} y1={oy} x2={ox + (i + 1) * tread * sc} y2={oy + dH} stroke={COLORS.stepStroke} strokeWidth="1.5" />
      ))}
      <DimH x1={ox} x2={ox + dW} y={oy + dH + 24} label={`Run: ${run.toFixed(0)} mm`} />
      <DimV x={ox - 24} y1={oy} y2={oy + dH} label={`Width: ${width.toFixed(0)} mm`} />
      <InfoPanel title="TOP-DOWN VIEW" totalRise={rise} angle={angle} />
    </BpBase>
  );
}

function LShapedTopDownBlueprint({ result }) {
  if (!result) return <EmptyBlueprint message="ENTER RISE & RUNS"/>;
  const { stepsF1, stepsF2, riser, tread1, tread2, totalRise: rise, run1, run2, landingDepth, stairWidth: sw, angle } = result;
  const width = sw;
  const totalW = run1 + Math.max(landingDepth, width);
  const totalH = width + run2;
  const scX = DW / totalW, scY = DH / totalH;
  const sc  = Math.min(scX, scY) * 0.62;

  const ox = SAFE_LEFT + (DW - totalW * sc) / 2;
  const oy = SAFE_TOP + (DH - totalH * sc) / 2;

  const flight1Y = oy + run2 * sc;
  const flight2X = ox + run1 * sc;

  return (
    <BpBase badge={`${stepsF1 + stepsF2} STEPS · TOP-DOWN`} result={result}>
      <line x1={clamp(ox-20, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox+totalW*sc+20, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy-16, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy+totalH*sc+24, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <rect x={ox} y={flight1Y} width={run1 * sc} height={width * sc} fill={COLORS.stepFill} opacity="0.85" stroke={COLORS.stepStroke} strokeWidth="2.2"/>
      {[...Array(stepsF1 - 1)].map((_, i) => (
        <line key={`f1-${i}`} x1={ox + (i + 1) * tread1 * sc} y1={flight1Y} x2={ox + (i + 1) * tread1 * sc} y2={flight1Y + width * sc} stroke={COLORS.stepStroke} strokeWidth="1.5" />
      ))}
      <rect x={ox + run1 * sc} y={flight1Y} width={landingDepth * sc} height={width * sc} fill="#0B2A3E" stroke="#2A6080" strokeWidth="1.5" strokeDasharray="4,3"/>
      <rect x={flight2X} y={oy} width={width * sc} height={run2 * sc} fill={COLORS.stepFill} opacity="0.85" stroke={COLORS.stepStroke} strokeWidth="2.2"/>
      {[...Array(stepsF2 - 1)].map((_, i) => {
        const y = oy + (i + 1) * tread2 * sc;
        return <line key={`f2-${i}`} x1={flight2X} y1={y} x2={flight2X + width * sc} y2={y} stroke={COLORS.stepStroke} strokeWidth="1.5" />;
      })}
      <text x={safeTextX(ox + run1 * sc / 2)} y={safeTextY(flight1Y + width * sc / 2 + 4)} fill="#44C899" fontSize="9" fontFamily="monospace" textAnchor="middle">Flight 1</text>
      <text x={safeTextX(flight2X + width * sc / 2)} y={safeTextY(oy + run2 * sc / 2 + 4)} fill="#44C899" fontSize="9" fontFamily="monospace" textAnchor="middle">Flight 2</text>
      <DimH x1={ox} x2={ox + run1 * sc} y={flight1Y + width * sc + 24} label={`Run 1: ${run1.toFixed(0)} mm`} />
      <DimH x1={ox + run1 * sc} x2={ox + run1 * sc + landingDepth * sc} y={flight1Y + width * sc + 24} label={`Landing: ${landingDepth.toFixed(0)} mm`} />
      <DimV x={ox - 24} y1={flight1Y} y2={flight1Y + width * sc} label={`Width: ${width.toFixed(0)} mm`} />
      <DimV x={flight2X + width * sc + 24} y1={oy} y2={oy + run2 * sc} label={`Run 2: ${run2.toFixed(0)} mm`} />
      <InfoPanel title="TOP-DOWN VIEW" totalRise={rise} angle={angle} />
    </BpBase>
  );
}

function UShapedTopDownBlueprint({ result }) {
  if (!result) return <EmptyBlueprint message="ENTER RISE & RUN"/>;
  const { stepsPerFlight, riser, tread, flightRun, landingDepth, stairWidth: sw, angle } = result;
  const totalW = flightRun * 2 + landingDepth;
  const totalH = sw;
  const scX = DW / totalW, scY = DH / totalH;
  const sc  = Math.min(scX, scY) * 0.62;

  const ox = SAFE_LEFT + (DW - totalW * sc) / 2;
  const oy = SAFE_TOP + (DH - totalH * sc) / 2;

  return (
    <BpBase badge={`${stepsPerFlight * 2} STEPS · TOP-DOWN`} result={result}>
      <line x1={clamp(ox-20, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox+totalW*sc+20, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy-16, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy+totalH*sc+24, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <rect x={ox} y={oy} width={flightRun * sc} height={sw * sc} fill={COLORS.stepFill} opacity="0.85" stroke={COLORS.stepStroke} strokeWidth="2.2"/>
      <rect x={ox + flightRun * sc} y={oy} width={landingDepth * sc} height={sw * sc} fill="#0B2A3E" stroke="#2A6080" strokeWidth="1.5" strokeDasharray="4,3"/>
      <rect x={ox + (flightRun + landingDepth) * sc} y={oy} width={flightRun * sc} height={sw * sc} fill={COLORS.stepFill} opacity="0.85" stroke={COLORS.stepStroke} strokeWidth="2.2"/>
      {[...Array(stepsPerFlight - 1)].map((_, i) => (
        <line key={`l1-${i}`} x1={ox + (i + 1) * tread * sc} y1={oy} x2={ox + (i + 1) * tread * sc} y2={oy + sw * sc} stroke={COLORS.stepStroke} strokeWidth="1.5" />
      ))}
      {[...Array(stepsPerFlight - 1)].map((_, i) => (
        <line key={`l2-${i}`} x1={ox + (flightRun + landingDepth) * sc + (i + 1) * tread * sc} y1={oy} x2={ox + (flightRun + landingDepth) * sc + (i + 1) * tread * sc} y2={oy + sw * sc} stroke={COLORS.stepStroke} strokeWidth="1.5" />
      ))}
      <text x={safeTextX(ox + flightRun * sc / 2)} y={safeTextY(oy + sw * sc / 2 + 4)} fill="#44C899" fontSize="9" fontFamily="monospace" textAnchor="middle">Flight 1</text>
      <text x={safeTextX(ox + (flightRun + landingDepth) * sc + flightRun * sc / 2)} y={safeTextY(oy + sw * sc / 2 + 4)} fill="#44C899" fontSize="9" fontFamily="monospace" textAnchor="middle">Flight 2</text>
      <DimH x1={ox} x2={ox + flightRun * sc} y={oy + sw * sc + 24} label={`Flight 1: ${flightRun.toFixed(0)} mm`} />
      <DimH x1={ox + flightRun * sc} x2={ox + (flightRun + landingDepth) * sc} y={oy + sw * sc + 24} label={`Landing: ${landingDepth.toFixed(0)} mm`} />
      <DimH x1={ox + (flightRun + landingDepth) * sc} x2={ox + totalW * sc} y={oy - 16} label={`Flight 2: ${flightRun.toFixed(0)} mm`} />
      <DimV x={ox - 24} y1={oy} y2={oy + sw * sc} label={`Width: ${sw.toFixed(0)} mm`} />
      <InfoPanel title="TOP-DOWN VIEW" totalRise={result.totalRise} angle={angle} />
    </BpBase>
  );
}

function UShapedBlueprint({ result }) {
  if (!result) return <EmptyBlueprint message="ENTER RISE & RUN"/>;
  const { stepsPerFlight, riser, tread, angle, totalRise: rise, flightRun, landingDepth, stairWidth, wellGap } = result;

  const totalH = rise;
  const totalW = flightRun * 2 + landingDepth;
  const scX = DW / totalW, scY = DH / totalH;
  const sc  = Math.min(scX, scY) * 0.62;

  const ox = SAFE_LEFT + (DW - totalW * sc) / 2;
  const oy = SAFE_TOP + DH - (DH - totalH * sc) / 2;

  const fr = flightRun * sc;
  const ld = landingDepth * sc;

  let f1path = `M ${ox} ${oy}`;
  let cy1 = oy;
  for (let i = 0; i < stepsPerFlight; i++) {
    const nx = ox + (i+1) * tread * sc;
    cy1 -= riser * sc;
    f1path += ` V ${cy1} H ${nx}`;
  }
  const f1fill = `${f1path} L ${ox + fr} ${oy} Z`;

  const landingY = cy1;
  const lx = ox + fr;

  let f2path = `M ${lx} ${landingY}`;
  let cy2 = landingY;
  for (let i = 0; i < stepsPerFlight; i++) {
    cy2 -= riser * sc;
    const nx = lx - (i + 1) * tread * sc;
    f2path += ` V ${cy2} H ${nx}`;
  }
  const flight2TopY = cy2;
  const flightHeight = stepsPerFlight * riser * sc;
  const flight1LabelX = ox + fr * 0.65;
  const flight2LabelX = lx - fr * 0.6;
  const flight1LabelY = oy - flightHeight * 0.42;
  const flight2LabelY = landingY - flightHeight * 0.42;
  const flight2LineY = flight2TopY - 12;
  const f2fill = `${f2path} L ${lx - fr} ${landingY} Z`;

  return (
    <BpBase badge={`${stepsPerFlight * 2} STEPS · 180° TURN`} result={result}>
      <line x1={ox-20} y1={oy} x2={ox + totalW*sc + 20} y2={oy} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy-rise*sc-16, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy+24, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox+fr, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(landingY, SAFE_TOP, SAFE_BOTTOM)} stroke="#0F3A5C" strokeWidth="1.5" strokeDasharray="6,3"/>
      <path d={f1fill} fill={COLORS.stepFill} opacity="0.85"/>
      <path d={f1path} fill="none" stroke={COLORS.stepStroke} strokeWidth="2.2" strokeLinejoin="miter"/>
      <path d={f1path} fill="none" stroke="#7ACFFF" strokeWidth="0.7" strokeLinejoin="miter" opacity="0.5"/>
      <rect x={lx} y={landingY} width={ld} height={riser*sc} fill="#0B2A3E" stroke="#2A6080" strokeWidth="1.5" strokeDasharray="4,3"/>
      <text x={safeTextX(lx + ld/2)} y={safeTextY(landingY + riser*sc/2 + 4)} fill="#1A4060" fontSize="8" fontFamily="monospace" textAnchor="middle">LANDING</text>
      <text x={safeTextX(lx + ld/2)} y={safeTextY(landingY - 12)} fill="#44C899" fontSize="11" fontFamily="monospace" textAnchor="middle">180°↩</text>
      <path d={f2fill} fill={COLORS.stepFill} opacity="0.85"/>
      <path d={f2path} fill="none" stroke={COLORS.stepStroke} strokeWidth="2.2" strokeLinejoin="miter"/>
      <path d={f2path} fill="none" stroke="#7ACFFF" strokeWidth="0.7" strokeLinejoin="miter" opacity="0.5"/>
      <AngleArc ox={ox} oy={oy} angle={angle} size={fr * 0.22}/>
      <DimH x1={ox} x2={ox+fr} y={oy+34} label={`Flight 1: ${flightRun.toFixed(0)} mm`}/>
      <DimH x1={lx-fr} x2={lx} y={flight2LineY} label={`Flight 2: ${flightRun.toFixed(0)} mm`} textAbove />
      <DimH x1={lx} x2={lx+ld} y={oy+34} label={`Landing: ${landingDepth.toFixed(0)} mm`}/>
      <DimV x={ox-38} y1={oy-rise*sc} y2={oy} label={`Total Rise: ${rise.toFixed(0)} mm`}/>
        <DimV x={lx+ld+28} y1={oy} y2={landingY} label={`Flight 1: ${(stepsPerFlight*riser).toFixed(0)} mm`}/>
        <DimV x={lx+ld+28} y1={landingY} y2={flight2TopY} label={`Flight 2: ${(stepsPerFlight*riser).toFixed(0)} mm`}/>
      <text x={safeTextX(flight1LabelX)} y={safeTextY(flight1LabelY)} fill="#44C899" fontSize="9" fontFamily="monospace" textAnchor="middle">Flight 1</text>
      <text x={safeTextX(flight2LabelX)} y={safeTextY(flight2LabelY)} fill="#44C899" fontSize="9" fontFamily="monospace" textAnchor="middle">Flight 2</text>
      <InfoPanel title="ELEVATION VIEW" totalRise={rise} angle={angle} />
    </BpBase>
  );
}

function SpiralElevationBlueprint({ result }) {
  if (!result) return <EmptyBlueprint message="ENTER RISE & DIAMETER"/>;
  const { nSteps, riser, degPerStep, outerRadius, innerRadius, totalRise: rise } = result;
  const turns = (nSteps * degPerStep) / 360;

  const dH = Math.min(DH * 0.65, rise * 0.65);
  const heightScale = dH / rise;
  const dW = DW * 0.55;
  const ox = SAFE_LEFT + (DW - dW) / 2;
  const oy = SAFE_TOP + DH - (DH - dH) / 2;
  const poleX = ox + dW * 0.22;
  const outerAmp = dW * 0.30;
  const innerAmp = dW * 0.18;
  const samples = Math.max(24, Math.round(turns * 16));

  const outerPath = [];
  const innerPath = [];
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const y = oy - t * dH;
    const theta = (Math.PI * 2 * turns * t) - Math.PI / 2;
    const xOuter = poleX + outerAmp * Math.cos(theta);
    const xInner = poleX + innerAmp * Math.cos(theta);
    if (i === 0) {
      outerPath.push(`M ${xOuter} ${y}`);
      innerPath.push(`M ${xInner} ${y}`);
    } else {
      outerPath.push(`L ${xOuter} ${y}`);
      innerPath.push(`L ${xInner} ${y}`);
    }
  }

  const steps = [...Array(nSteps)].map((_, i) => {
    const y = oy - (i + 0.5) * riser * heightScale;
    const theta = (Math.PI * 2 * turns * ((i + 0.5) / nSteps)) - Math.PI / 2;
    const x = poleX + outerAmp * Math.cos(theta);
    return { x, y };
  });

  return (
    <BpBase badge={`${nSteps} STEPS · SPIRAL ELEVATION`} result={result}>
      <line x1={clamp(ox-16, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox+dW+16, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(oy-dH-16, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(ox, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(oy+24, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={poleX} y1={oy} x2={poleX} y2={oy - dH} stroke="#7ACFFF" strokeWidth="4" />
      <path d={outerPath.join(' ')} fill="none" stroke="#E8A030" strokeWidth="2.4" />
      <path d={innerPath.join(' ')} fill="none" stroke="#E8A030" strokeWidth="2.4" />
      <InfoPanel title="ELEVATION VIEW" totalRise={rise} diameter={outerRadius * 2} />
      <text x={safeTextX(poleX)} y={safeTextY(oy - dH - 14)} fill="#E8A030" fontSize="10" fontFamily="monospace" textAnchor="middle">{turns.toFixed(1)} turns · ⌀{(outerRadius * 2).toFixed(0)} mm</text>
      {steps.map((step, i) => (
        <line key={i} x1={poleX} y1={step.y} x2={step.x} y2={step.y} stroke={COLORS.stepStroke} strokeWidth="2" />
      ))}
      <circle cx={poleX} cy={oy - dH} r={6} fill="#44C899" />
      <DimV x={ox - 36} y1={oy - dH} y2={oy} label={`Height: ${rise.toFixed(0)} mm`} />
    </BpBase>
  );
}

function SpiralBlueprint({ result }) {
  if (!result) return <EmptyBlueprint message="ENTER RISE & DIAMETER"/>;
  const { nSteps, riser, tread, degPerStep, outerRadius, innerRadius, totalRise: rise } = result;

  const maxR  = outerRadius;
  const sc    = Math.min(DW, DH) * 0.30 / maxR;
  const cx    = SAFE_LEFT + DW / 2;
  const cy    = SAFE_TOP + DH / 2;
  const or    = outerRadius * sc;
  const ir    = innerRadius * sc;
  const SHOW  = Math.min(nSteps, 16);

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
    wedges.push(<line key={`n${i}`} x1={ix1} y1={iy1} x2={x1} y2={y1} stroke="#7ACFFF" strokeWidth="0.6" opacity="0.4"/>);
  }

  return (
    <BpBase badge={`${nSteps} STEPS · ${(nSteps * degPerStep / 360).toFixed(1)} TURNS`} result={result}>
      <line x1={clamp(cx-or-16, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(cy, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(cx+or+16, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(cy, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={clamp(cx, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(cy-or-16, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(cx, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(cy+or+16, SAFE_TOP, SAFE_BOTTOM)} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <circle cx={cx} cy={cy} r={or} fill="none" stroke="#174870" strokeWidth="1.5" strokeDasharray="6,3"/>
      <circle cx={cx} cy={cy} r={ir} fill="#07192A" stroke="#0E3050" strokeWidth="1.5"/>
      <circle cx={cx} cy={cy} r={Math.max(3, ir * 0.25)} fill="#1A4060"/>
      {wedges}
      <line x1={cx} y1={cy} x2={cx + or} y2={cy} stroke="#E8A030" strokeWidth="1"/>
      <text x={safeTextX(cx + or/2)} y={safeTextY(cy - 6)} fill="#E8A030" fontSize="9" fontFamily="monospace" textAnchor="middle">⌀{(outerRadius*2).toFixed(0)} mm</text>
      <line x1={clamp(cx-8, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(cy, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(cx+8, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(cy, SAFE_TOP, SAFE_BOTTOM)} stroke="#44C899" strokeWidth="1"/>
      <line x1={clamp(cx, SAFE_LEFT, SAFE_RIGHT)} y1={clamp(cy-8, SAFE_TOP, SAFE_BOTTOM)} x2={clamp(cx, SAFE_LEFT, SAFE_RIGHT)} y2={clamp(cy+8, SAFE_TOP, SAFE_BOTTOM)} stroke="#44C899" strokeWidth="1"/>
      <text x={safeTextX(cx)} y={safeTextY(cy + or + 22)} fill="#6DB8E0" fontSize="9.5" fontFamily="monospace" textAnchor="middle">
        Riser {riser.toFixed(0)} mm · {degPerStep.toFixed(1)}° / step
      </text>
      <InfoPanel title="TOP-DOWN VIEW" totalRise={rise} />
      <DimV x={PAD_L - 18} y1={PAD_T + 22} y2={PAD_T + 22 + rise * (DH * 0.6) / rise} label={`${rise.toFixed(0)} mm`}/>
    </BpBase>
  );
}

export default function Blueprint2D({ result, stairType, viewMode = "elevation" }) {
  switch (stairType) {
    case "lshaped": return viewMode === "topdown" ? <LShapedTopDownBlueprint result={result}/> : <LShapedBlueprint result={result}/>;
    case "ushaped": return viewMode === "topdown" ? <UShapedTopDownBlueprint result={result}/> : <UShapedBlueprint result={result}/>;
    case "spiral":  return viewMode === "topdown" ? <SpiralBlueprint result={result}/> : <SpiralElevationBlueprint result={result}/>;
    default:        return viewMode === "topdown" ? <StraightTopDownBlueprint result={result}/> : <StraightBlueprint result={result}/>;
  }
}
