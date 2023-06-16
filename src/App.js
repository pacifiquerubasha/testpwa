import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { usePWAInstall } from 'react-use-pwa-install'
import user from "./assets/images/user.jpg"
import qr from "./assets/images/qr.svg"
import "@fortawesome/fontawesome-free/css/all.min.css";

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
       <div class="container">
          <div class="banner">           
            <div class="hero">
              <img src={user} alt="" class="user"/>
              <div class="hero-info">
                <span>Moutdin Muckdoombukus</span>
                <span class="title">Senior Web Developer</span>
              </div>
              <div class="socials">
                <a href="https://wa.me/6012828">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <div class="qrcode">
              <div class="field field--name-field-qr-with-logo field--type-image field--label-visually_hidden">
                <div class="field__label visually-hidden">QR Code</div>
                <div class="field__item">
                  <img loading="lazy" src={qr}/>
                </div>
              </div>
            </div>
          </div>
          <div class="more-info">
            <div class="info-container">
              <h1 class="info-title">CONTACT DETAILS</h1>
              <div>
                <div>LASTNAME</div>
                <div class="field-value">Muckdoombukus</div>
              </div>
              <div>
                <div>FIRSTNAME</div>
                <div class="field-value">Moutdin</div>
              </div>
              <div>
                <div>EMAIL</div>
                <a href="mailto:moutdinm@frci.net" class="field-value">moutdinm@frci.net</a>
              </div>
              <div>
                <div>PHONE</div>
                <a href="tel:6012828" class="field-value">6012828</a>
              </div>
              <div>
                <div>COMPANY</div>
                <a href="#" class="field-value">FRCI</a>
              </div>
              <div>
                <div>JOB TITLE</div>
                <div class="field-value">Senior Web Developer</div>
              </div>
              <div>
                <div>DEPARTMENT</div>
                <a href="#" class="field-value">eServices</a>
              </div>
              <div>
                <div>ADDRESS</div>
                <div class="field-value">First Floor, The Hub, Industrial Zone, Phoenix, Mauritius</div>
              </div>
              <div>
                <a href="tel:6012828" itemprop="telephone" content="6012828">Add Contact</a>
              </div>
            </div>
          </div>
        </div>


      {supportsPWA && 
        <button type="button" className='btn__install' onClick={install}>
          Install App
        </button>
      }
    </div>
  );
}

export default App;
