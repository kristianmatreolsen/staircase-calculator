import { useState, useMemo, useRef, useCallback } from "react";
import { CODES } from "./config/buildingCodes.js";
import { compute } from "./utils/calculations.js";
import Sidebar from "./components/Sidebar.jsx";
import { COLORS, FONTS, tabBtnCss } from "./styles/theme.js";
import Blueprint2D from "./views/Blueprint2D.jsx";
import Model3D from "./views/Model3D.jsx";

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
  const [blueprintMode, setBlueprintMode] = useState("elevation");
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
    setView("2d");
  };

  const blueprintRef = useRef(null);
  const model3dCaptureRef = useRef(null);

  const handleSavePNG = useCallback(() => {
    const svg = blueprintRef.current?.querySelector('svg');
    if (!svg) return;
    const vb = svg.viewBox.baseVal;
    const scale = 3; // 3× for print quality (~300 DPI)
    const svgStr = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = vb.width * scale;
      canvas.height = vb.height * scale;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#040E18';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      const a = document.createElement('a');
      a.download = `staircase-${stairType}-${blueprintMode}.png`;
      a.href = canvas.toDataURL('image/png');
      a.click();
    };
    img.onerror = () => {
      // Fallback: download SVG
      URL.revokeObjectURL(url);
      const svgBlob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
      const a = document.createElement('a');
      a.download = `staircase-${stairType}-${blueprintMode}.svg`;
      a.href = URL.createObjectURL(svgBlob);
      a.click();
    };
    img.src = url;
  }, [stairType, blueprintMode]);

  const handleSave3DPNG = useCallback(() => {
    const dataUrl = model3dCaptureRef.current?.();
    if (!dataUrl) return;
    const a = document.createElement('a');
    a.download = `staircase-${stairType}-3d.png`;
    a.href = dataUrl;
    a.click();
  }, [stairType]);

  const statusColor = result
    ? (result.ok ? COLORS.green : COLORS.red)
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
        @media print {
          body { margin: 0; }
          .sidebar-print-hide { display: none !important; }
          .blueprint-print-expand { width: 100vw !important; }
        }
      `}</style>

      <div style={{
        display: "flex",
        height: "100vh",
        background: COLORS.bg,
        color: COLORS.text,
        fontFamily: FONTS.ui,
        overflow: "hidden",
      }}>
        <Sidebar
          className="sidebar-print-hide"
          stairType={stairType}
          region={region}
          inputs={inputs[stairType]}
          result={result}
          onTypeChange={handleTypeChange}
          onInputChange={handleInputChange}
          onRegionChange={setRegion}
        />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
          <div style={{
            background: COLORS.panel,
            borderBottom: `1px solid ${COLORS.border}`,
            padding: "9px 16px",
            display: "flex",
            gap: 7,
            alignItems: "center",
          }}>
            {[ ["2d", "2D Blueprint"], ["3d", "3D Model"] ].map(([k, lbl]) => (
              <button key={k} onClick={() => setView(k)} style={tabBtnCss(view === k)}>{lbl}</button>
            ))}
            {view === "2d" && (
              <>
                <button onClick={() => setBlueprintMode("elevation")} style={tabBtnCss(blueprintMode === "elevation")}>Elevation</button>
                <button onClick={() => setBlueprintMode("topdown")} style={tabBtnCss(blueprintMode === "topdown")}>Top-Down</button>
              </>
            )}
            {view === "3d" && (
              <span style={{ fontSize: 9, fontFamily: FONTS.mono, color: "#112233", marginLeft: 6 }}>
                drag to rotate · scroll to zoom
              </span>
            )}
            {view === "2d" && result && (
              <div style={{ marginLeft: "auto", display: "flex", gap: 6, alignItems: "center" }}>
                <button
                  onClick={handleSavePNG}
                  title="Save blueprint as PNG image"
                  style={{ ...tabBtnCss(false), fontSize: 10, padding: "4px 10px", color: "#44C899", borderColor: "#1A4030" }}
                >
                  📥 PNG
                </button>
                <button
                  onClick={() => window.print()}
                  title="Print or save as PDF"
                  style={{ ...tabBtnCss(false), fontSize: 10, padding: "4px 10px", color: "#82C4FF", borderColor: "#1A3050" }}
                >
                  🖨 Print
                </button>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: statusColor, boxShadow: `0 0 5px ${statusColor}`, marginLeft: 4 }} />
                <span style={{ fontSize: 9, fontFamily: FONTS.mono, color: "#1A3F5C" }}>
                  {result.nSteps} steps · {result.riser.toFixed(0)}R × {(result.tread || result.tread1 || result.innerTread || 0).toFixed(0)}T mm · {result.angle.toFixed(1)}°
                </span>
              </div>
            )}
            {view === "3d" && result && (
              <div style={{ marginLeft: "auto", display: "flex", gap: 6, alignItems: "center" }}>
                <button
                  onClick={handleSave3DPNG}
                  title="Save 3D view as PNG image"
                  style={{ ...tabBtnCss(false), fontSize: 10, padding: "4px 10px", color: "#44C899", borderColor: "#1A4030" }}
                >
                  📥 PNG
                </button>
                <button
                  onClick={() => window.print()}
                  title="Print or save as PDF"
                  style={{ ...tabBtnCss(false), fontSize: 10, padding: "4px 10px", color: "#82C4FF", borderColor: "#1A3050" }}
                >
                  🖨 Print
                </button>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: statusColor, boxShadow: `0 0 5px ${statusColor}`, marginLeft: 4 }} />
                <span style={{ fontSize: 9, fontFamily: FONTS.mono, color: "#1A3F5C" }}>
                  {result.nSteps} steps · {result.riser.toFixed(0)}R × {(result.tread || result.tread1 || result.innerTread || 0).toFixed(0)}T mm · {result.angle.toFixed(1)}°
                </span>
              </div>
            )}
          </div>

          <div style={{ flex: 1, overflow: "auto", position: "relative" }}>
            {view === "2d" ? (
              <div ref={blueprintRef} style={{
                width: "100%", height: "100%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: COLORS.bg, padding: 0,
              }}>
                <Blueprint2D result={result} stairType={stairType} viewMode={blueprintMode} />
              </div>
            ) : (
              <Model3D result={result} captureRef={model3dCaptureRef} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
