// ─── Building Codes ──────────────────────────────────────────────────────────
// Each entry defines the min/max/ideal values for a region's building standard.

export const CODES = {
  NO: {
    name: "Norway (TEK17)", flag: "🇳🇴",
    riserMin: 50,  riserMax: 180,
    treadMin: 280, widthMin: 900, headroomMin: 2000,
    formulaRange: [595, 665], formulaLabel: "2R + T = 595–665 mm",
    notes: "TEK17 §12-16 · Public: riser ≤150 mm, tread ≥300 mm",
    idealRiser: 170, idealTread: 290,
  },
  US: {
    name: "USA (IBC 2021)", flag: "🇺🇸",
    riserMin: 102, riserMax: 197,
    treadMin: 254, widthMin: 914, headroomMin: 2032,
    formulaRange: null, formulaLabel: "Riser 4–7.75 in · Tread ≥10 in",
    notes: "IBC 2021 §1011 · Residential (IRC R311.7): width ≥ 36 in (914 mm)",
    idealRiser: 180, idealTread: 270,
  },
  GB: {
    name: "UK (Part K)", flag: "🇬🇧",
    riserMin: 50,  riserMax: 220,
    treadMin: 220, widthMin: 800, headroomMin: 2000,
    formulaRange: [550, 700], formulaLabel: "2R + T = 550–700 mm",
    notes: "Approved Document K · Private stair · Going measured horizontally",
    idealRiser: 170, idealTread: 250,
  },
  DE: {
    name: "Germany (DIN 18065)", flag: "🇩🇪",
    riserMin: 140, riserMax: 200,
    treadMin: 230, widthMin: 800, headroomMin: 2000,
    formulaRange: [590, 650], formulaLabel: "2R + T = 590–650 mm",
    notes: "DIN 18065 · Ideal step: R = 170 mm, T = 290 mm",
    idealRiser: 170, idealTread: 290,
  },
  EU: {
    name: "EU General (EN 14975)", flag: "🇪🇺",
    riserMin: 120, riserMax: 210,
    treadMin: 240, widthMin: 800, headroomMin: 1900,
    formulaRange: [600, 660], formulaLabel: "2R + T = 600–660 mm",
    notes: "EN 14975 general guideline · Verify local amendments",
    idealRiser: 175, idealTread: 280,
  },
};

export const STAIR_TYPES = {
  straight: {
    id: "straight",
    label: "Straight",
    icon: "⬆",
    description: "Single uninterrupted flight. Most common and easiest to build.",
    inputs: ["totalRise", "totalRun", "stairWidth"],
  },
  lshaped: {
    id: "lshaped",
    label: "L-Shaped",
    icon: "↱",
    description: "Quarter turn (90°) with a flat landing. Compact and easier to navigate than straight stairs.",
    inputs: ["totalRise", "run1", "run2", "stairWidth", "landingDepth"],
  },
  ushaped: {
    id: "ushaped",
    label: "U-Shaped",
    icon: "⇅",
    description: "Two parallel flights with a 180° landing (switchback). Efficient footprint for full-storey rise.",
    inputs: ["totalRise", "flightRun", "stairWidth", "landingDepth"],
  },
  spiral: {
    id: "spiral",
    label: "Spiral",
    icon: "↻",
    description: "Treads radiate around a central pole. Minimal footprint — ideal for lofts or accent stairs.",
    inputs: ["totalRise", "diameter", "stairWidth"],
  },
};
