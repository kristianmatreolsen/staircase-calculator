// ─── Design Tokens ───────────────────────────────────────────────────────────

export const COLORS = {
  bg:          "#06111C",
  panel:       "#08182A",
  border:      "#0A2030",
  borderHover: "#0E2A40",
  text:        "#A8C8E0",
  textDim:     "#2A5070",
  textBright:  "#D8ECF8",
  accent:      "#E8A030",
  accentDim:   "#3A2800",
  blue:        "#3CB0F0",
  blueDim:     "#06111C",
  green:       "#27C06A",
  red:         "#EF4444",
  amber:       "#E8A030",
  teal:        "#44C899",
  gridLine:    "#0A1E2E",
  stepFill:    "#09202F",
  stepStroke:  "#3CB0F0",
};

export const FONTS = {
  ui:   "'Space Grotesk', system-ui, sans-serif",
  mono: "'JetBrains Mono', 'Fira Mono', monospace",
};

export const inputCss = {
  background:   COLORS.bg,
  border:       `1px solid ${COLORS.border}`,
  borderRadius: 5,
  color:        COLORS.text,
  padding:      "7px 10px",
  fontSize:     13,
  fontFamily:   FONTS.mono,
  width:        "100%",
  boxSizing:    "border-box",
  outline:      "none",
  transition:   "border-color 0.15s",
};

export const labelCss = {
  display:       "block",
  fontSize:      9.5,
  color:         COLORS.textDim,
  fontFamily:    FONTS.mono,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom:  4,
};

export const hintCss = {
  fontSize:   9,
  color:      "#152E44",
  fontFamily: FONTS.mono,
  marginTop:  3,
  lineHeight: 1.45,
};

export const sectionCss = {
  padding:      "13px 15px",
  borderBottom: `1px solid ${COLORS.border}`,
};

export const headingCss = {
  fontSize:      9,
  color:         COLORS.accent,
  fontFamily:    FONTS.mono,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  marginBottom:  9,
};

export const tabBtnCss = (active) => ({
  background:  active ? COLORS.accent : "transparent",
  color:       active ? COLORS.bg     : COLORS.textDim,
  border:      `1px solid ${active ? COLORS.accent : COLORS.border}`,
  borderRadius: 4,
  padding:      "4px 13px",
  fontSize:     10,
  fontFamily:   FONTS.mono,
  fontWeight:   700,
  cursor:       "pointer",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  transition:   "all 0.12s",
});

export const statusBadgeCss = (color) => ({
  display:      "flex",
  alignItems:   "center",
  gap:          7,
  marginBottom: 13,
  padding:      "6px 9px",
  background:   COLORS.bg,
  borderRadius: 5,
  border:       `1px solid ${color}22`,
});
