import { COLORS, FONTS } from "../styles/theme.js";
import StairTypeSelector from "./StairTypeSelector.jsx";
import InputPanel from "./InputPanel.jsx";
import ResultsPanel from "./ResultsPanel.jsx";

export default function Sidebar({ stairType, region, inputs, result, onTypeChange, onInputChange, onRegionChange }) {
  return (
    <div style={{
      width: 268,
      background: COLORS.panel,
      borderRight: `1px solid ${COLORS.border}`,
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      flexShrink: 0,
    }}>
      {/* Header */}
      <div style={{ padding: "18px 15px 14px", borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ fontSize: 9, fontFamily: FONTS.mono, color: COLORS.accent, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 2 }}>
          Structural
        </div>
        <div style={{ fontSize: 21, fontWeight: 700, color: COLORS.textBright, letterSpacing: -0.5, lineHeight: 1.15, fontFamily: FONTS.ui }}>
          Staircase<br />Calculator
        </div>
        <div style={{ marginTop: 7, fontSize: 9, fontFamily: FONTS.mono, color: "#1A3F5C", letterSpacing: "0.08em" }}>
          TEK17 · IBC · Part K · DIN 18065
        </div>
      </div>

      {/* Stair type picker */}
      <StairTypeSelector value={stairType} onChange={onTypeChange} />

      {/* Inputs & code */}
      <InputPanel
        stairType={stairType}
        region={region}
        inputs={inputs}
        onInputChange={onInputChange}
        onRegionChange={onRegionChange}
      />

      {/* Results & compliance */}
      <ResultsPanel result={result} region={region} />
    </div>
  );
}
