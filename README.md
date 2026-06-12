# Staircase Calculator

A modular React application for calculating staircase dimensions according to various international building codes.

## Project Structure

```
staircase-calculator/
├── index.html                    # HTML entry point
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
├── .gitignore
├── public/                       # Static assets (future)
├── src/
│   ├── main.jsx                 # React entry point
│   ├── App.jsx                  # Main application component
│   ├── components/
│   │   ├── Sidebar.jsx          # Input controls and results display
│   │   ├── Visualization.jsx    # 2D/3D view switcher
│   │   ├── Blueprint.jsx        # 2D SVG blueprint visualization
│   │   └── Model3D.jsx          # 3D Three.js visualization
│   ├── constants/
│   │   └── buildingCodes.js     # Building code specifications
│   ├── utils/
│   │   └── calculateStair.js    # Staircase calculation logic
│   └── styles/
│       ├── index.css            # Global styles and fonts
│       ├── app.css              # App layout
│       ├── sidebar.css          # Sidebar component styles
│       ├── blueprint.css        # Blueprint component styles
│       ├── model3d.css          # 3D model component styles
│       └── visualization.css    # Visualization container styles
```

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Architecture

### Components

- **App.jsx** - Root component managing global state (region, view, inputs)
- **Sidebar.jsx** - Left panel with inputs, settings, and results
- **Visualization.jsx** - Viewer area with 2D/3D toggle
- **Blueprint.jsx** - 2D SVG drawing of staircase
- **Model3D.jsx** - 3D interactive model using Three.js

### Utilities

- **calculateStair.js** - Core calculation engine that computes stair dimensions and compliance
- **buildingCodes.js** - Definitions for NO, US, GB, DE, and EU building codes

### Styling

All styles have been extracted from inline CSS-in-JS to separate CSS files:
- Global styles and typography in `index.css`
- Component-specific styles in dedicated files
- No CSS-in-JS (easily migrated to CSS Modules or Tailwind if needed)

## Building Codes Supported

- **🇳🇴 Norway (TEK17)**
- **🇺🇸 USA (IBC 2021)**
- **🇬🇧 UK (Part K)**
- **🇩🇪 Germany (DIN 18065)**
- **🇪🇺 EU General (EN 14975)**

## Technologies

- **React 18** - UI framework
- **Vite** - Fast build tool
- **Three.js** - 3D visualization
- **CSS** - Component styling

## Future Enhancements

- Convert to CSS Modules for better scoping
- Add unit tests for calculation logic
- Add input validation and error messages
- Export designs as PDF or DWG
- Add more building codes
- Accessibility improvements (a11y)
