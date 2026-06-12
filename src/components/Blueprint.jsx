import '../styles/blueprint.css';

export default function Blueprint({ result, inputs }) {
  const SVG_W = 620, SVG_H = 420;
  const PAD_L = 72, PAD_T = 36, PAD_R = 36, PAD_B = 60;
  const DRAW_W = SVG_W - PAD_L - PAD_R;
  const DRAW_H = SVG_H - PAD_T - PAD_B;

  const emptyView = (
    <svg width="100%" viewBox={`0 0 ${SVG_W} ${SVG_H}`} preserveAspectRatio="xMidYMid meet">
      <rect width={SVG_W} height={SVG_H} fill="#06111C" />
      {[...Array(22)].map((_,i) => <line key={`vg${i}`} x1={i*30} y1={0} x2={i*30} y2={SVG_H} stroke="#0A1E2E" strokeWidth="1"/>)}
      {[...Array(15)].map((_,i) => <line key={`hg${i}`} x1={0} y1={i*30} x2={SVG_W} y2={i*30} stroke="#0A1E2E" strokeWidth="1"/>)}
      <text x={SVG_W/2} y={SVG_H/2-8} fill="#193450" fontSize="12" fontFamily="monospace" textAnchor="middle">ENTER MEASUREMENTS</text>
      <text x={SVG_W/2} y={SVG_H/2+14} fill="#122840" fontSize="10" fontFamily="monospace" textAnchor="middle">to generate blueprint</text>
    </svg>
  );

  if (!result) return emptyView;

  const { nSteps, riser, tread, angle } = result;
  const rise = parseFloat(inputs.totalRise);
  const run  = parseFloat(inputs.totalRun);

  const scX = DRAW_W / run;
  const scY = DRAW_H / rise;
  const sc  = Math.min(scX, scY) * 0.85;
  const dW  = run * sc;
  const dH  = rise * sc;
  const ox  = PAD_L + (DRAW_W - dW) / 2;
  const oy  = PAD_T + (DRAW_H - dH) / 2;

  // Step staircase path
  let path = `M ${ox} ${oy + dH}`;
  for (let i = 0; i < nSteps; i++) {
    const x0 = ox + i * tread * sc;
    const y1 = oy + dH - (i + 1) * riser * sc;
    const x1 = ox + (i + 1) * tread * sc;
    path += ` L ${x0} ${y1} L ${x1} ${y1}`;
  }
  const fillPath = `${path} L ${ox + dW} ${oy + dH} Z`;

  // Angle arc
  const arcR = Math.min(dW, dH) * 0.22;
  const aRad = angle * Math.PI / 180;
  const arcX = ox + arcR * Math.cos(aRad);
  const arcY = (oy + dH) - arcR * Math.sin(aRad);
  const arcPath = `M ${ox + arcR * 0.95} ${oy + dH} A ${arcR * 0.95} ${arcR * 0.95} 0 0 0 ${arcX * 0.97 + ox * 0.03} ${arcY * 0.97 + (oy + dH) * 0.03}`;

  const labelRX = ox + 5;
  const labelRY = oy + dH - riser * sc / 2;
  const labelTX = ox + tread * sc / 2;
  const labelTY = oy + dH - 6;

  return (
    <svg width="100%" viewBox={`0 0 ${SVG_W} ${SVG_H}`} preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
      <defs>
        <marker id="bpa" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#E8A030"/>
        </marker>
        <marker id="bpas" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto-start-reverse">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#E8A030"/>
        </marker>
      </defs>

      <rect width={SVG_W} height={SVG_H} fill="#06111C"/>
      {[...Array(22)].map((_,i) => <line key={`vg${i}`} x1={i*30} y1={0} x2={i*30} y2={SVG_H} stroke="#0A1E2E" strokeWidth="1"/>)}
      {[...Array(15)].map((_,i) => <line key={`hg${i}`} x1={0} y1={i*30} x2={SVG_W} y2={i*30} stroke="#0A1E2E" strokeWidth="1"/>)}

      <line x1={ox-24} y1={oy+dH} x2={ox+dW+16} y2={oy+dH} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>
      <line x1={ox} y1={oy-16} x2={ox} y2={oy+dH+24} stroke="#174870" strokeWidth="1.5" strokeDasharray="8,4"/>

      <line x1={ox} y1={oy+dH} x2={ox+dW} y2={oy} stroke="#0F3A5C" strokeWidth="1.5" strokeDasharray="6,3"/>

      <path d={fillPath} fill="#09202F"/>
      <path d={path} fill="none" stroke="#1A5A8A" strokeWidth="4" strokeLinejoin="miter" opacity="0.35"/>
      <path d={path} fill="none" stroke="#3CB0F0" strokeWidth="2.2" strokeLinejoin="miter"/>
      <path d={path} fill="none" stroke="#7ACFFF" strokeWidth="0.7" strokeLinejoin="miter" opacity="0.5"/>

      <path d={arcPath} fill="none" stroke="#44C899" strokeWidth="1.3"/>
      <text
        x={ox + arcR * 0.58 * Math.cos(aRad / 2) + 4}
        y={(oy + dH) - arcR * 0.58 * Math.sin(aRad / 2)}
        fill="#44C899" fontSize="11" fontFamily="monospace" textAnchor="middle" dominantBaseline="middle"
      >{angle.toFixed(1)}°</text>

      {riser * sc > 20 && (
        <>
          <line x1={ox-2} y1={labelRY} x2={ox+4} y2={labelRY} stroke="#6DB8E0" strokeWidth="1"/>
          <text x={labelRX+6} y={labelRY+4} fill="#6DB8E0" fontSize="9.5" fontFamily="monospace">{riser.toFixed(0)}R</text>
        </>
      )}

      {tread * sc > 30 && (
        <text x={labelTX} y={labelTY} fill="#6DB8E0" fontSize="9.5" fontFamily="monospace" textAnchor="middle">{tread.toFixed(0)}T</text>
      )}

      <line
        x1={ox-38} y1={oy} x2={ox-38} y2={oy+dH}
        stroke="#E8A030" strokeWidth="1"
        markerStart="url(#bpas)" markerEnd="url(#bpa)"
      />
      <text
        x={ox-52} y={oy+dH/2}
        fill="#E8A030" fontSize="10" fontFamily="monospace" textAnchor="middle"
        transform={`rotate(-90 ${ox-52} ${oy+dH/2})`}
      >{rise.toFixed(0)} mm</text>

      <line
        x1={ox} y1={oy+dH+34} x2={ox+dW} y2={oy+dH+34}
        stroke="#E8A030" strokeWidth="1"
        markerStart="url(#bpas)" markerEnd="url(#bpa)"
      />
      <text x={ox+dW/2} y={oy+dH+50} fill="#E8A030" fontSize="10" fontFamily="monospace" textAnchor="middle">{run.toFixed(0)} mm</text>

      <line x1={ox-42} y1={oy}    x2={ox-34} y2={oy}    stroke="#E8A030" strokeWidth="1"/>
      <line x1={ox-42} y1={oy+dH} x2={ox-34} y2={oy+dH} stroke="#E8A030" strokeWidth="1"/>
      <line x1={ox}    y1={oy+dH+30} x2={ox}    y2={oy+dH+38} stroke="#E8A030" strokeWidth="1"/>
      <line x1={ox+dW} y1={oy+dH+30} x2={ox+dW} y2={oy+dH+38} stroke="#E8A030" strokeWidth="1"/>

      <rect x={SVG_W-88} y={6} width={82} height={20} rx={3} fill="#0A2030"/>
      <text x={SVG_W-47} y={20} fill="#2A6EA8" fontSize="10" fontFamily="monospace" textAnchor="middle">{nSteps} STEPS · {angle.toFixed(1)}°</text>
    </svg>
  );
}
