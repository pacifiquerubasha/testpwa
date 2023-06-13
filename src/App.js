import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { usePWAInstall } from 'react-use-pwa-install'

function App() {


	// const install = usePWAInstall()
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      alert("NO PROMPT DATA")
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    alert("NOT SUPPORTED")
    return null;
  }

  return (
    <div className="App">
         <button
            className="link-button"
            id="setup_button"
            aria-label="Install app"
            title="Install app"
            onClick={onClick}
          >
            Install
          </button>
    </div>
  );
}

export default App;