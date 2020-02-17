import React from 'react';
import './styles/global.scss';

import illustrationIntro from './images/illustration-intro.png';
import stayProductive from './images/illustration-stay-productive.png';

import logo from './images/logo.svg';
import iconAnywhere from './images/icon-access-anywhere.svg';
import iconSecurity from './images/icon-security.svg';
import iconCollaboration from './images/icon-collaboration.svg';
import iconAnyFile from './images/icon-any-file.svg';

function App() {
  return (
    <div>
      <header className="flex space-between align-center main-header">
        <div>
          <img src={logo} />
        </div>
        <div className="flex header-menu">
          <div className="capitalize pointer fs16">features</div>
          <div className="capitalize pointer fs16">team</div>
          <div className="capitalize pointer fs16">sign in</div>
        </div>
      </header>
      <main className="flex fill column align-center">
        <div className="flex column main-container">
          <img src={illustrationIntro} className="intro-img" />
          <div className="main-subtitle">
            All your files in one secure location, accessible anywhere.
          </div>
          <p className="main-description">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends family,
            and co-workers.
          </p>
          <div className="flex center align-center pointer capitalize main-button">
            <span>get started</span>
          </div>
          <div className="flex wrap space-between cards-container">
            <div className="flex column align-center card-container">
              <div className="image-container">
                <img src={iconAnywhere} />
              </div>
              <div className="card-title">
                Access your files, anywhere
            </div>
              <p className="card-description">
                The ability to use a smartphone, tablet,
                or computer to access your account means your files follow you everywhere.
            </p>
            </div>
            <div className="flex column align-center card-container">
              <div className="image-container">
                <img src={iconSecurity} />
              </div>
              <div className="card-title">
                Security you can trust
            </div>
              <p className="card-description">
                2-factor authentication and user-controlled encryption
                are just a couple of the security features we allow to help secure your files.
            </p>
            </div>
            <div className="flex column align-center card-container">
              <div className="image-container">
                <img src={iconCollaboration} />
              </div>
              <div className="card-title">
                Real-time collaboration
            </div>
              <p className="card-description">
                Securely share files and folders with friends,
                family and colleagues for live collaboration.
                No email attachments required.
            </p>
            </div>
            <div className="flex column align-center card-container">
              <div className="image-container">
                <img src={iconAnyFile} />
              </div>
              <div className="card-title">
                Store any type of file
            </div>
              <p className="card-description">
                Whether you're sharing holidays photos or work documents,
                Fylo has you covered allowing for all file types to be securely
                stored and shared.
            </p>
            </div>
          </div>
        </div>
        <div className="flex productivity-container">
          <div>
            <img src={stayProductive} className="productivity-img" />
          </div>
          <div className="flex column">
            <div className="productivity-title">
              Stay productive,
  wherever you are
            </div>
            <div>
              Never let location be an issue when accessing your files.
              Fylo has you covered for all of your file storage needs.
            </div>
            <div>
              Securely share files and folders with friends,
              family and colleagues for live collaboration. No email attachments required.
            </div>
            <div>
              See how Fylo works
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;