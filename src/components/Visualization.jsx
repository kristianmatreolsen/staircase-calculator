import { useState } from 'react';
import Blueprint from './Blueprint';
import Model3D from './Model3D';
import '../styles/visualization.css';

export default function Visualization({ view, onViewChange, result, inputs }) {
  const [blueprintMode, setBlueprintMode] = useState('elevation');

  return (
    <div className="visualization-wrapper">
      {/* Tab bar */}
      <div className="tab-bar">
        {[["2d","2D Blueprint"], ["3d","3D Model"]].map(([k, lbl]) => (
          <button 
            key={k} 
            onClick={() => onViewChange(k)} 
            className={`tab-button ${view === k ? 'active' : ''}`}
          >
            {lbl}
          </button>
        ))}
        {view === "3d" && (
          <span className="tab-hint">
            drag to rotate · scroll to zoom
          </span>
        )}
        {view === "2d" && (
          <div style={{ display: 'flex', gap: 6 }}>
            <button
              onClick={() => setBlueprintMode('elevation')}
              className={`tab-button ${blueprintMode === 'elevation' ? 'active' : ''}`}
            >
              Elevation
            </button>
            <button
              onClick={() => setBlueprintMode('topdown')}
              className={`tab-button ${blueprintMode === 'topdown' ? 'active' : ''}`}
            >
              Top-Down
            </button>
          </div>
        )}
        {result && (
          <div className="tab-stats">
            {result.nSteps} steps · {result.riser.toFixed(0)}R × {result.tread.toFixed(0)}T mm · {result.angle.toFixed(1)}°
          </div>
        )}
      </div>

      {/* View */}
      <div className="visualization-view">
        {view === "2d" ? (
          <div className="blueprint-container">
            <Blueprint result={result} inputs={inputs} viewMode={blueprintMode} />
          </div>
        ) : (
          <Model3D result={result} inputs={inputs} />
        )}
      </div>
    </div>
  );
}
