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
                    <p>From a young age, my  curiosity has been captivated by the intricate workings of the human mind. Currently pursuing my master's degree at Stanford University, I've dedicated my academic journey to exploring the profound intersection of psychology, artificial intelligence, and human-computer interaction.
                        My daily routine revolves around a dynamic blend of rigorous research, engaging coursework, and staying at the forefront of the ever-evolving world of AI. Born and raised amidst the vibrant energy of New York City, I now call the innovative hub of the Bay Area my home.
                        With an insatiable appetite for fresh challenges and a relentless drive to embark on new projects, I am continually seeking opportunities to push my intellectual boundaries. If you're working on something intriguing, I'd love to hear about it.</p>
                    
                    
                </div>
                
                {/* Add more personal content here */}
            </div>
        </section>
    );
};

export default About;
