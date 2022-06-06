import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Styles from './App.module.css';
import Clock from './Component/Clock';
import Digit from './Component/Digit';
import { Mode, NextMode } from './Global/Types';

interface ModeData {
  mode: Mode
  setMode: (value: Mode | ((prevValue: Mode) => Mode)) => void;
}

const DEFAULT_MODE: Mode = "light"
export const ModeContext = React.createContext<ModeData>({
  mode: DEFAULT_MODE,
  setMode: (value: Mode | ((prevValue: Mode) => Mode)) => { }
})

function App() {
  const [mode, setMode] = useState<Mode>(DEFAULT_MODE)

  return (
    <ModeContext.Provider value={{ mode: mode, setMode: setMode }}>
      <div key={mode} className={`${Styles.App} ${mode === "light" ? Styles.light : Styles.dark}`}>
        {/* <button
          className={Styles.Clickable}
          onClick={e => { setMode(NextMode(mode)); }}>
          {mode === "light" ? "Dark mode" : "Light mode"}
        </button> */}
        <Clock />
      </div>
    </ModeContext.Provider>
  );
}

export default App;
