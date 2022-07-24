import React, { useState, useEffect, createContext } from 'react';
import Header from './features/Header';
import AboutMe from './features/AboutMe';
import './shared/styles/styles.scss';
import { getWindowSize } from './shared/utils/functions';
import { WindowSize } from './shared/utils/constants';

export const WindowSizeContext = createContext(WindowSize.MEDIUM);

function App() {
  const [windowSize, setWindowSize] = useState(WindowSize.MEDIUM);

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
    <div className="app">
      <WindowSizeContext.Provider value={windowSize} >
        <Header />
        <AboutMe />
      </WindowSizeContext.Provider>
    </div>
  );
}

export default App;
