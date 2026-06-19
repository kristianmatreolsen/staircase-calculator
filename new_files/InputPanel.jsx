import { CODES } from "../config/buildingCodes.js";
import { COLORS, FONTS, inputCss, labelCss, hintCss, sectionCss, headingCss } from "../styles/theme.js";

// ─── Input field definitions per staircase type ───────────────────────────────

const FIELDS = {
  straight: [
    { key: "totalRise",        label: "Total Rise (mm)",         hint: "Floor-to-floor vertical height" },
    { key: "totalRun",         label: "Total Run (mm)",          hint: "Available horizontal distance" },
    { key: "stairWidth",       label: "Stair Width (mm)",        hint: (code) => `Min ${code.widthMin} mm required` },
    { key: "numStepsOverride", label: "Step Count Override",     hint: "Leave blank to auto-calculate", optional: true, placeholder: "Auto" },
  ],
  lshaped: [
    { key: "totalRise",        label: "Total Rise (mm)",         hint: "Floor-to-floor vertical height" },
    { key: "run1",             label: "Flight 1 Run (mm)",       hint: "Horizontal run of the first flight" },
    { key: "run2",             label: "Flight 2 Run (mm)",       hint: "Horizontal run of the second flight (after turn)" },
    { key: "stairWidth",       label: "Stair Width (mm)",        hint: (code) => `Min ${code.widthMin} mm required` },
    { key: "landingDepth",     label: "Landing Depth (mm)",      hint: "Flat landing at the 90° turn (≥ stair width)" },
    { key: "numStepsOverride", label: "Step Count Override",     hint: "Leave blank to auto-calculate", optional: true, placeholder: "Auto" },
  ],
  ushaped: [
    { key: "totalRise",        label: "Total Rise (mm)",         hint: "Floor-to-floor vertical height" },
    { key: "flightRun",        label: "Single Flight Run (mm)",  hint: "Horizontal run of one flight (both flights equal)" },
    { key: "stairWidth",       label: "Stair Width (mm)",        hint: (code) => `Min ${code.widthMin} mm required` },
    { key: "landingDepth",     label: "Landing Depth (mm)",      hint: "Flat landing between flights (≥ stair width)" },
    { key: "numStepsOverride", label: "Step Count Override",     hint: "Leave blank to auto-calculate", optional: true, placeholder: "Auto" },
  ],
  spiral: [
    { key: "totalRise",        label: "Total Rise (mm)",         hint: "Floor-to-floor vertical height" },
    { key: "diameter",         label: "Overall Diameter (mm)",   hint: "Outer diameter of the spiral (min ~1200 mm)" },
    { key: "stairWidth",       label: "Tread Width (mm)",        hint: "Walkable tread width (outer – inner radius)" },
    { key: "numStepsOverride", label: "Step Count Override",     hint: "Leave blank to auto-calculate", optional: true, placeholder: "Auto" },
  ],
};

export default function InputPanel({ stairType, region, inputs, onInputChange, onRegionChange }) {
  const code   = CODES[region];
  const fields = FIELDS[stairType] || FIELDS.straight;

  return (
    <>
      {/* Building Code */}
      <div style={sectionCss}>
        <div style={headingCss}>Building Code</div>
        <select
          value={region}
          onChange={e => onRegionChange(e.target.value)}
          style={{ ...inputCss, cursor: "pointer" }}
        >
          {Object.entries(CODES).map(([k, v]) => (
            <option key={k} value={k}>{v.flag}  {v.name}</option>
          ))}
        </select>
        <div style={{ ...hintCss, marginTop: 6, lineHeight: 1.55 }}>{code.notes}</div>
        <div style={{ marginTop: 5, fontSize: 9, color: "#0E3050", fontFamily: FONTS.mono }}>{code.formulaLabel}</div>
      </div>

      {/* Measurements */}
      <div style={sectionCss}>
        <div style={headingCss}>Measurements</div>
        {fields.map(({ key, label, hint, optional, placeholder }) => (
          <div key={key} style={{ marginBottom: 11 }}>
            <label style={labelCss}>{label}{optional && <span style={{ color: "#0A2030", marginLeft: 4 }}>(opt.)</span>}</label>
            <input
              type="number"
              value={inputs[key] ?? ""}
              onChange={e => onInputChange(key, e.target.value)}
              placeholder={placeholder || ""}
              style={inputCss}
              min="1"
            />
            <div style={hintCss}>{typeof hint === "function" ? hint(code) : hint}</div>
          </div>
        ))}
      </div>
    </>
  );
}
