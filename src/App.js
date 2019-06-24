import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import BackgroundSection from './components/BackgroundSection';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
// Font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas, far);
// End Font-awesome
// import "animate.css/animate.min.css";


function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <BackgroundSection />
      <br />
      <br />
      <AboutSection />
      <br />
      <ResumeSection />
      <br />
      <ProjectSection />
      <br />
      <ContactSection />


    </div>
  );
}

export default App;
