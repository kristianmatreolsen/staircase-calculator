import '../styles/sidebar.css';

export default function Sidebar({ code, result, inputs, onInputChange, region, onRegionChange, CODES }) {
  const CC = { ok: "#27C06A", warn: "#E8A030", err: "#EF4444" };
  const statusColor = result ? (result.ok ? CC.ok : CC.err) : "#2A5070";

  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <div className="sidebar-label">Structural</div>
        <div className="sidebar-title">
          Staircase<br/>Calculator
        </div>
        <div className="sidebar-subtitle">
          TEK17 · IBC · Part K · DIN 18065
        </div>
      </div>

      {/* Building Code */}
      <div className="sidebar-section">
        <div className="section-heading">Building Code</div>
        <select 
          value={region} 
          onChange={e => onRegionChange(e.target.value)} 
          className="code-select"
        >
          {Object.entries(CODES).map(([k, v]) => (
            <option key={k} value={k}>{v.flag}  {v.name}</option>
          ))}
        </select>
        <div className="code-notes">{code.notes}</div>
        <div className="code-formula">{code.formulaLabel}</div>
      </div>

      {/* Measurements */}
      <div className="sidebar-section">
        <div className="section-heading">Measurements</div>
        {[
          ["totalRise",  "Total Rise (mm)",  "Floor-to-floor vertical height"],
          ["totalRun",   "Total Run (mm)",   "Available horizontal distance"],
          ["stairWidth", "Stair Width (mm)", `Min ${code.widthMin} mm required`],
        ].map(([k, lbl, hint]) => (
          <div key={k} className="input-group">
            <label className="input-label">{lbl}</label>
            <input
              type="number"
              value={inputs[k]}
              onChange={e => onInputChange(k, e.target.value)}
              className="input-field"
              min="1"
            />
            <div className="input-hint">{hint}</div>
          </div>
        ))}
        <div className="input-group">
          <label className="input-label">Step Count Override</label>
          <input
            type="number"
            value={inputs.numStepsOverride}
            onChange={e => onInputChange("numStepsOverride", e.target.value)}
            className="input-field"
            placeholder="Auto-calculate"
            min="2"
            max="50"
          />
          <div className="input-hint">Leave blank to auto-calculate from rise</div>
        </div>
      </div>

      {/* Results */}
      <div className="sidebar-results">
        {result ? (
          <>
            {/* Status badge */}
            <div className="status-badge" style={{ borderColor: statusColor + '22' }}>
              <div className="status-dot" style={{ background: statusColor, boxShadow: `0 0 5px ${statusColor}` }}/>
              <span className="status-text" style={{ color: statusColor }}>
                {result.ok ? "Code Compliant" : "Violations Found"}
              </span>
            </div>

            {/* Key metrics */}
            <div className="section-heading">Results</div>
            {[
              ["Steps",    result.nSteps,                    ""],
              ["Riser",    result.riser.toFixed(1),          "mm"],
              ["Tread",    result.tread.toFixed(1),          "mm"],
              ["Angle",    result.angle.toFixed(2),          "°"],
              ["Stringer", (result.stringer/1000).toFixed(3),"m"],
              ["2R + T",   result.formula.toFixed(1),        "mm"],
            ].map(([lbl, val, unit]) => (
              <div key={lbl} className="result-row">
                <span className="result-label">{lbl}</span>
                <span className="result-value">
                  {val}<span className="result-unit">{unit}</span>
                </span>
              </div>
            ))}

            {/* Compliance checks */}
            <div className="compliance-section">
              <div className="section-heading">Compliance</div>
              {result.checks.map(c => (
                <div key={c.label} className="check-item">
                  <span className="check-icon" style={{ color: c.pass ? CC.ok : CC.err }}>
                    {c.pass ? "✓" : "✗"}
                  </span>
                  <div className="check-content">
                    <div className="check-label" style={{ color: c.pass ? CC.ok : CC.err }}>
                      {c.label}: {c.val}
                    </div>
                    <div className="check-requirement">{c.req}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Suggestion */}
            {!result.ok && result.idealN !== result.nSteps && (
              <div className="suggestion-box">
                💡 Try <span style={{ color: CC.warn }}>{result.idealN} steps</span> for better compliance with {code.name}
              </div>
            )}
          </>
        ) : (
          <div className="empty-state">
            Enter rise, run &amp; width<br/>to calculate staircase
          </div>
        )}
      </div>
    </div>
  );
}
