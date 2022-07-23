import React from 'react';
import Header from './features/Header';
import AboutMe from './features/AboutMe';
import './shared/styles/styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
