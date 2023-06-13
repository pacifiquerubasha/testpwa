import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { usePWAInstall } from 'react-use-pwa-install'

function App() {


	const install = usePWAInstall()

  return (
    <div className="App">
        <button type="button" onClick={install}>
          Install Appx
        </button>
    </div>
  );
}

export default App;
