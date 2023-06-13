import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

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

  const handleShowPWA = e => {
    e.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }

  return (
    <div className="App">
        <h1>Lorem Ipsum Dolor</h1>
        <p>
        But don't worry, we have a fix for that! We can add a custom popup which will indicate that our app can be added to home screen.

        You are free to design that popup as you wish, our example is shown below. The hard part is to display it only in Safari and not in standalone mode (when the app is already added to home screen). You can check if your app is in standalone mode
        </p>
        {supportsPWA && <button
            className="link-button"
            id="setup_button"
            aria-label="Install app"
            title="Install app"
            onClick={handleShowPWA}
          >
            Install
          </button>}
    </div>
  );
}

export default App;