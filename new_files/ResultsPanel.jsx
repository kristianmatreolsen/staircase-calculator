import { CODES } from "../config/buildingCodes.js";
import { COLORS, FONTS, headingCss, statusBadgeCss } from "../styles/theme.js";

const CC = { ok: COLORS.green, err: COLORS.red, warn: COLORS.amber };

function Metric({ label, value, unit }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "4px 0", borderBottom: `1px solid #071520` }}>
      <span style={{ fontSize: 9.5, fontFamily: FONTS.mono, color: COLORS.textDim }}>{label}</span>
      <span style={{ fontSize: 13, fontFamily: FONTS.mono, color: "#C0DCF0", fontWeight: 500 }}>
        {value}<span style={{ fontSize: 9, color: COLORS.textDim }}>{unit}</span>
      </span>
    </div>
  );
}

function StraightMetrics({ r }) {
  return (
    <>
      <Metric label="Steps"    value={r.nSteps}                     unit="" />
      <Metric label="Riser"    value={r.riser.toFixed(1)}           unit=" mm" />
      <Metric label="Tread"    value={r.tread.toFixed(1)}           unit=" mm" />
      <Metric label="Angle"    value={r.angle.toFixed(2)}           unit="°" />
      <Metric label="Stringer" value={(r.stringer / 1000).toFixed(3)} unit=" m" />
      <Metric label="2R + T"   value={r.formula.toFixed(1)}         unit=" mm" />
    </>
  );
}

function LShapedMetrics({ r }) {
  return (
    <>
      <Metric label="Total Steps"   value={r.nSteps}              unit="" />
      <Metric label="Flight 1 Steps" value={r.stepsF1}           unit="" />
      <Metric label="Flight 2 Steps" value={r.stepsF2}           unit="" />
      <Metric label="Riser"         value={r.riser.toFixed(1)}   unit=" mm" />
      <Metric label="Tread F1"      value={r.tread1.toFixed(1)}  unit=" mm" />
      <Metric label="Tread F2"      value={r.tread2.toFixed(1)}  unit=" mm" />
      <Metric label="Angle"         value={r.angle.toFixed(2)}   unit="°" />
      <Metric label="2R + T"        value={r.formula.toFixed(1)} unit=" mm" />
    </>
  );
}

function UShapedMetrics({ r }) {
  return (
    <>
      <Metric label="Total Steps"    value={r.nSteps}                 unit="" />
      <Metric label="Steps / Flight" value={r.stepsPerFlight}        unit="" />
      <Metric label="Riser"          value={r.riser.toFixed(1)}       unit=" mm" />
      <Metric label="Tread"          value={r.tread.toFixed(1)}       unit=" mm" />
      <Metric label="Angle"          value={r.angle.toFixed(2)}       unit="°" />
      <Metric label="Total Width"    value={r.totalWidth.toFixed(0)}  unit=" mm" />
      <Metric label="Total Depth"    value={r.totalDepth.toFixed(0)}  unit=" mm" />
      <Metric label="2R + T"         value={r.formula.toFixed(1)}     unit=" mm" />
    </>
  );
}

function SpiralMetrics({ r }) {
  return (
    <>
      <Metric label="Total Steps"   value={r.nSteps}                    unit="" />
      <Metric label="Turns"         value={r.turnsTotal.toFixed(2)}     unit="×" />
      <Metric label="Deg / Step"    value={r.degPerStep.toFixed(1)}     unit="°" />
      <Metric label="Riser"         value={r.riser.toFixed(1)}          unit=" mm" />
      <Metric label="Tread (mid)"   value={r.tread.toFixed(1)}          unit=" mm" />
      <Metric label="Tread (inner)" value={r.innerTread.toFixed(1)}     unit=" mm" />
      <Metric label="Outer Radius"  value={r.outerRadius.toFixed(0)}    unit=" mm" />
      <Metric label="Angle"         value={r.angle.toFixed(2)}          unit="°" />
    </>
  );
}

const METRICS_MAP = {
  straight: StraightMetrics,
  lshaped:  LShapedMetrics,
  ushaped:  UShapedMetrics,
  spiral:   SpiralMetrics,
};

export default function ResultsPanel({ result, region }) {
  const code = CODES[region];

  if (!result) {
    return (
      <div style={{ padding: "13px 15px", color: "#122B3E", fontSize: 10, fontFamily: FONTS.mono, lineHeight: 1.7 }}>
        Enter measurements to calculate staircase
      </div>
    );
  }

  const statusColor = result.ok ? CC.ok : CC.err;
  const MetricsComp = METRICS_MAP[result.type] || StraightMetrics;

  return (
    <div style={{ padding: "13px 15px" }}>
      {/* Status badge */}
      <div style={statusBadgeCss(statusColor)}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: statusColor, flexShrink: 0, boxShadow: `0 0 5px ${statusColor}` }} />
        <span style={{ fontSize: 9.5, fontFamily: FONTS.mono, color: statusColor, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {result.ok ? "Code Compliant" : "Violations Found"}
        </span>
      </div>

      {/* Key metrics */}
      <div style={headingCss}>Results</div>
      <MetricsComp r={result} />

      {/* Compliance checks */}
      <div style={{ marginTop: 13 }}>
        <div style={headingCss}>Compliance</div>
        {result.checks.map(c => (
          <div key={c.label} style={{ display: "flex", gap: 6, marginBottom: 7, alignItems: "flex-start" }}>
            <span style={{ fontSize: 11, color: c.pass ? CC.ok : CC.err, flexShrink: 0, marginTop: 1 }}>
              {c.pass ? "✓" : "✗"}
            </span>
            <div>
              <div style={{ fontSize: 10, fontFamily: FONTS.mono, color: c.pass ? CC.ok : CC.err, lineHeight: 1.3 }}>
                {c.label}: {c.val}
              </div>
              <div style={{ fontSize: 9, fontFamily: FONTS.mono, color: "#122B3E" }}>{c.req}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Suggestion */}
      {!result.ok && result.idealN && result.idealN !== result.nSteps && (
        <div style={{ marginTop: 10, padding: "7px 9px", background: "#061520", border: "1px solid #0A2540", borderRadius: 5, fontSize: 9.5, fontFamily: FONTS.mono, color: "#2A6080", lineHeight: 1.55 }}>
          💡 Try <span style={{ color: CC.warn }}>{result.idealN} steps</span> for better compliance with {code.name}
        </div>
      )}
    </div>
  );
}
