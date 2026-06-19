# Staircase Calculator

A structural staircase calculator with building code compliance checking, interactive 2D blueprints and 3D models.

## Features

- **4 staircase types:** Straight, L-Shaped (quarter turn), U-Shaped (switchback), Spiral
- **5 building codes:** Norway TEK17, USA IBC 2021, UK Part K, Germany DIN 18065, EU EN 14975
- **2D Blueprint** — SVG side-elevation with dimension lines, angle arcs, and compliance annotations
- **3D Model** — Three.js interactive model (drag to orbit, scroll to zoom)
- Real-time compliance checking with per-rule pass/fail and fix suggestions

---

## Project Structure

```
src/
├── config/
│   └── buildingCodes.js     # Building code constants and stair type definitions
├── utils/
│   └── calculations.js      # All calculation logic (one function per stair type)
├── styles/
│   └── theme.js             # Design tokens, shared CSS-in-JS style objects
├── components/
│   ├── Sidebar.jsx          # Sidebar shell (composes the panels below)
│   ├── StairTypeSelector.jsx # 4-button type picker
│   ├── InputPanel.jsx       # Dynamic measurement inputs (adapts per type)
│   └── ResultsPanel.jsx     # Results metrics + compliance checks
├── views/
│   ├── Blueprint2D.jsx      # 2D SVG blueprints for all 4 types
│   └── Model3D.jsx          # Three.js 3D models for all 4 types
└── App.jsx                  # Root component — state, layout, view routing
```

---

## Getting Started

This project is built as a React app. If you're using it as a Vite or Create React App project:

```bash
npm install
npm run dev
```

Dependencies:
- `react`, `react-dom`
- `three` (Three.js for 3D rendering)

If running as an Artifact in Claude.ai, paste the contents of `App.jsx` as the entry point — the artifact renderer handles imports automatically.

---

## Adding a New Building Code

Edit `src/config/buildingCodes.js` and add a new entry to the `CODES` object:

```js
XX: {
  name: "Country (Standard)", flag: "🏳️",
  riserMin: 120, riserMax: 200,
  treadMin: 250, widthMin: 800, headroomMin: 2000,
  formulaRange: [600, 660], formulaLabel: "2R + T = 600–660 mm",
  notes: "Source standard · Notes",
  idealRiser: 170, idealTread: 290,
},
```

## Adding a New Staircase Type

1. Add a definition to `STAIR_TYPES` in `buildingCodes.js`
2. Add input field config to `FIELDS` in `components/InputPanel.jsx`
3. Add a `computeXxx()` function in `utils/calculations.js` and register it in the `compute()` dispatcher
4. Add a metrics component to `components/ResultsPanel.jsx`
5. Add a 2D SVG component to `views/Blueprint2D.jsx`
6. Add a Three.js builder function to `views/Model3D.jsx`
7. Add default inputs to `DEFAULT_INPUTS` in `App.jsx`
