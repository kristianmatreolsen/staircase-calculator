import { STAIR_TYPES } from "../config/buildingCodes.js";
import { COLORS, FONTS, headingCss } from "../styles/theme.js";

export default function StairTypeSelector({ value, onChange }) {
  return (
    <div style={{ padding: "13px 15px", borderBottom: `1px solid ${COLORS.border}` }}>
      <div style={headingCss}>Staircase Type</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        {Object.values(STAIR_TYPES).map((t) => {
          const active = value === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              title={t.description}
              style={{
                background:   active ? "#071D2E" : "transparent",
                border:       `1px solid ${active ? COLORS.accent : COLORS.border}`,
                borderRadius: 5,
                padding:      "7px 6px",
                cursor:       "pointer",
                textAlign:    "left",
                transition:   "all 0.12s",
              }}
            >
              <div style={{ fontSize: 17, marginBottom: 2, color: COLORS.accent }}>{t.icon}</div>
              <div style={{ fontSize: 9.5, fontFamily: FONTS.mono, color: active ? COLORS.accent : COLORS.textDim, fontWeight: 700, letterSpacing: "0.06em" }}>
                {t.label}
              </div>
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: 8, fontSize: 9, fontFamily: FONTS.mono, color: "#122B3E", lineHeight: 1.55 }}>
        {STAIR_TYPES[value]?.description}
      </div>
    </div>
  );
}
