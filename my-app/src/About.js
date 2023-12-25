import React from 'react';
import headshot from './content/headshot.jpg';

import './About.css'; // Make sure to create a CSS file for styles

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2>About Me</h2>
                <div className="about-content">
                    
                    <img src={headshot} alt="Your Name" className="about-image"/>
                    <p>Ever since I was little, I have always been fascinated by questions of the mind. As a master's student at Stanford, I have structured my time and studies around these central inquiries. My focus is on the intersection of psychology, artificial intelligence, and human-computer interaction. </p>
                    
                    
                </div>
                
                {/* Add more personal content here */}
            </div>
        </section>
    );
};

export default About;
