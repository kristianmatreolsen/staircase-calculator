import { useState, useMemo } from 'react';
import { CODES } from './constants/buildingCodes';
import { compute } from './utils/calculateStair';
import Sidebar from './components/Sidebar';
import Visualization from './components/Visualization';
import './styles/index.css';
import './styles/app.css';

export default function App() {
  const [region, setRegion] = useState("NO");
  const [view,   setView]   = useState("2d");
  const [inputs, setInputs] = useState({
    totalRise:        "2700",
    totalRun:         "3800",
    stairWidth:       "900",
    numStepsOverride: "",
  });

  const code   = CODES[region];
  const result = useMemo(() => compute(inputs, code), [inputs, code]);
  const upd    = (k, v) => setInputs(p => ({ ...p, [k]: v }));

  return (
    <div className="app-container">
      <Sidebar 
        code={code}
        result={result}
        inputs={inputs}
        onInputChange={upd}
        region={region}
        onRegionChange={setRegion}
        CODES={CODES}
      />
      <Visualization 
        view={view}
        onViewChange={setView}
        result={result}
        inputs={inputs}
      />
    </div>
  );
}
