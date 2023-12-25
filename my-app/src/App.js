import React from 'react';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
// import Blog from './Blog';
import SkillsAndAcademics from './SkillsAndAcademics';
import Work from './Work'; // Import the Work component
import './App.css'; // Import global styles

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <section id="home">
        </section> */}
        <section id="about">
          {/* About section content */}
          <About />
        </section>
        <section id="experience">
          {/* Experience section content */}
          <Experience />
        </section>
        <section id="skills-academics">
          <SkillsAndAcademics />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="contact">
          {/* Contact section content */}
          <Contact />
        </section>
        {/* <section id="blog">
          <Blog />
        </section> */}
      </main>
    </div>
  );
};

export default App;

