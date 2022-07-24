import React, { useState, useEffect, createContext } from 'react';
import Header from './features/Header';
import Portfolio from './features/Portfolio';
import './shared/styles/styles.scss';
import { getWindowSize } from './shared/utils/functions';

export const WindowSizeContext = createContext(getWindowSize());

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <WindowSizeContext.Provider value={windowSize} >
      <div className="app">
        <section><Header /></section>
        <section><Portfolio /></section>
      </div>
    </WindowSizeContext.Provider>
  );
}

export default App;
