import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { usePWAInstall } from 'react-use-pwa-install'

function App() {


	const install = usePWAInstall();
  
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  return (
    <div className="App">
      <h1>
        Lorem5x
      </h1>
      <p>
        But don't worry, we have a fix for that! We can add a custom popup which will indicate that our app can be added to home screen. You are free to design that popup as you wish, our example is shown below. The hard part is to display it only in Safari and not in standalone mode (when the app is already added to home screen). You can check if your app is in standalone mode
      </p>
      {supportsPWA && 
        <button type="button" onClick={install}>
          Install THE APP
        </button>
      }
    </div>
  );
}

export default App;
