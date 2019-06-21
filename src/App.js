import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import BackgroundSection from './components/BackgroundSection';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection'
// import "animate.css/animate.min.css";


function App() {
  return (
    <div className="App">
      <Navigation />
      <BackgroundSection />
      <br />
      <br />
      <AboutSection />
      <br />
      <ResumeSection />
      <br />
      <ProjectSection />
      <br/>
      <ContactSection/>
    </div>
  );
}

export default App;
