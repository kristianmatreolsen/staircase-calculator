import { useState, useMemo } from "react";
import { CODES } from "./config/buildingCodes.js";
import { compute } from "./utils/calculations.js";
import { COLORS, FONTS, tabBtnCss } from "./styles/theme.js";
import Sidebar from "./components/Sidebar.jsx";
import Blueprint2D from "./views/Blueprint2D.jsx";
import Model3D from "./views/Model3D.jsx";

// Default input values per staircase type
const DEFAULT_INPUTS = {
  straight: { totalRise: "2700", totalRun: "3800", stairWidth: "900", numStepsOverride: "" },
  lshaped:  { totalRise: "2700", run1: "2000", run2: "1800", stairWidth: "900", landingDepth: "900", numStepsOverride: "" },
  ushaped:  { totalRise: "2700", flightRun: "2000", stairWidth: "900", landingDepth: "1000", numStepsOverride: "" },
  spiral:   { totalRise: "2700", diameter: "1600", stairWidth: "650", numStepsOverride: "" },
};

export default function App() {
  const [stairType, setStairType] = useState("straight");
  const [region,    setRegion]    = useState("NO");
  const [view,      setView]      = useState("2d");
  const [inputs,    setInputs]    = useState(DEFAULT_INPUTS);

  const code   = CODES[region];
  const result = useMemo(() => compute(stairType, inputs[stairType], code), [stairType, inputs, code]);

  const handleInputChange = (key, value) => {
    setInputs(prev => ({
      ...prev,
      [stairType]: { ...prev[stairType], [key]: value },
    }));
  };

  const handleTypeChange = (type) => {
    setStairType(type);
    setView("2d"); // reset to blueprint on type switch for immediate visual feedback
  };

  const statusColor = result
    ? (result.ok ? "#27C06A" : "#EF4444")
    : COLORS.textDim;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        input[type=number]::-webkit-inner-spin-button { opacity: 0.3; }
        select option { background: #071520; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #06111C; }
        ::-webkit-scrollbar-thumb { background: #0E2A40; border-radius: 2px; }
      `}</style>

      <div style={{
        display: "flex",
        height: "100vh",
        background: COLORS.bg,
        color: COLORS.text,
        fontFamily: FONTS.ui,
        overflow: "hidden",
      }}>
        {/* Sidebar */}
        <Sidebar
          stairType={stairType}
          region={region}
          inputs={inputs[stairType]}
          result={result}
          onTypeChange={handleTypeChange}
          onInputChange={handleInputChange}
          onRegionChange={setRegion}
        />

        {/* Visualization area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

          {/* Tab bar */}
          <div style={{
            background: COLORS.panel,
            borderBottom: `1px solid ${COLORS.border}`,
            padding: "9px 16px",
            display: "flex",
            gap: 7,
            alignItems: "center",
          }}>
            {[["2d", "2D Blueprint"], ["3d", "3D Model"]].map(([k, lbl]) => (
              <button key={k} onClick={() => setView(k)} style={tabBtnCss(view === k)}>{lbl}</button>
            ))}
            {view === "3d" && (
              <span style={{ fontSize: 9, fontFamily: FONTS.mono, color: "#112233", marginLeft: 6 }}>
                drag to rotate · scroll to zoom
              </span>
            )}
            {result && (
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: statusColor, boxShadow: `0 0 5px ${statusColor}` }} />
                <span style={{ fontSize: 9, fontFamily: FONTS.mono, color: "#1A3F5C" }}>
                  {result.nSteps} steps · {result.riser.toFixed(0)}R × {(result.tread || result.tread1 || result.innerTread || 0).toFixed(0)}T mm · {result.angle.toFixed(1)}°
                </span>
              </div>
            )}
          </div>

          {/* View panel */}
          <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
            {view === "2d" ? (
              <div style={{
                width: "100%", height: "100%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: COLORS.bg, padding: 24,
              }}>
                <Blueprint2D result={result} stairType={stairType} />
              </div>
            ) : (
              <Model3D result={result} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
