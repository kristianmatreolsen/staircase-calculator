# Staircase Calculator

A modular React application for calculating staircase dimensions according to multiple international building codes.

## Live demo

- https://kristianmatreolsen.github.io/staircase-calculator/

## Project Structure

```
staircase-calculator/
├── .github/
│   └── workflows/
│       └── gh-pages.yml         # GitHub Actions workflow for Pages deployment
├── dist/                        # Production build output (generated)
├── index.html                   # Vite HTML entry point
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Locked dependency tree
├── vite.config.js               # Vite configuration
├── .gitignore
├── src/
│   ├── main.jsx                 # React app bootstrap
│   ├── App.jsx                  # Root application component
│   ├── components/
│   │   ├── Blueprint.jsx        # 2D SVG blueprint visualization
│   │   ├── InputPanel.jsx       # Sidebar input form
│   │   ├── Model3D.jsx          # Three.js 3D model viewer
│   │   ├── resultsPanel.jsx     # Calculation results display
│   │   ├── Sidebar.jsx          # App control and output panel
│   │   ├── StairTypeSelector.jsx# Staircase type controls
│   │   └── Visualization.jsx    # View switching and rendering
│   ├── config/
│   │   └── buildingCodes.js     # Building code definitions
│   ├── constants/
│   │   └── buildingCodes.js     # Code rules and limits
│   ├── utils/
│   │   ├── calculateStair.js    # Stair dimension logic
│   │   └── calculations.js      # Calculation helpers
│   ├── styles/
│   │   ├── app.css
│   │   ├── blueprint.css
│   │   ├── index.css
│   │   ├── model3d.css
│   │   ├── sidebar.css
│   │   ├── theme.js
│   │   └── visualization.css
│   └── views/
│       ├── Blueprint2D.jsx
│       └── Model3D.jsx
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### GitHub Pages Deployment

A GitHub Actions workflow publishes the app automatically from `main` to the `gh-pages` branch.

- Workflow file: `.github/workflows/gh-pages.yml`
- Published site: `https://kristianmatreolsen.github.io/staircase-calculator/`

## Architecture

### Components

- **App.jsx** - Root component managing global state, selected code, and view mode
- **Sidebar.jsx** - Input controls, code selection, and results panel
- **Visualization.jsx** - Toggles between 2D and 3D visualizations
- **Blueprint.jsx** - Renders the staircase layout in 2D using SVG
- **Model3D.jsx** - Renders an interactive 3D staircase model with Three.js
- **InputPanel.jsx** - Handles user entry fields and form controls
- **resultsPanel.jsx** - Shows calculated step, rise, run, and compliance results
- **StairTypeSelector.jsx** - Switches staircase type and display options

### Utilities

- **calculateStair.js** - Core calculator for stair dimensions and code compliance
- **calculations.js** - Supporting math and geometry helper functions
- **buildingCodes.js** - Building code restrictions, limits, and defaults

### Styling

All styles are organized into dedicated CSS files, with global styles in `index.css` and component-specific styles in the `styles/` folder.

## Supported Building Codes

- **🇳🇴 Norway (TEK17)**
- **🇺🇸 USA (IBC 2021)**
- **🇬🇧 UK (Part K)**
- **🇩🇪 Germany (DIN 18065)**
- **🇪🇺 EU General (EN 14975)**

## Technologies

- React 18
- Vite
- Three.js
- CSS

## Future Enhancements

- Convert styles to CSS Modules or another scoped styling approach
- Add unit and integration tests for calculation logic
- Improve input validation and user feedback
- Add export options for drawings or reports
- Expand support for more international building codes
- Improve accessibility and keyboard navigation
