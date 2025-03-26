import React from 'react';
import './Experience.css';
import Position from './Position'; // Make sure to create and import the Position component

// Images:
import hai from './content/hai.png';
import sail from './content/sail.png';
import rebellion from './content/rebellion.png';
import toucan from './content/toucan.png';
import construction from './content/construction.png';
import atreus from './content/atreus.png';
import fubo from './content/fubo.png';
import saia from './content/saia.png';
import team from './content/team.png';
import dalton from './content/dalton.png';
import h4d from './content/h4d.png';
import stanford from './content/stanford.png';
import kleiner from './content/kleiner.png';
import techstars from './content/techstars.png';
import bronfman from './content/bronfman.png';

const resumeLink = 'https://drive.google.com/file/d/1b8ELpLixy88rz0-RXHQHoycNcNNSEQI8/view?usp=drive_link'

const skills = [
  { id: 1, name: 'Python', level: 'Expert' },
  { id: 2, name: 'Machine Learning', level: 'Advanced' },
  // Add more skills here
];

const courses = [
  { id: 1, name: 'Introduction to Machine Learning', code: 'CS229' },
  { id: 2, name: 'Deep Learning for Computer Vision', code: 'CS231n' },
  // Add more courses here
];

const positions = [
    { id: 1, title: 'Researcher', date: 'September 2023 – Present', company: 'Stanford Institute for Human-Centered Artificial Intelligence (HAI)', description: 'Working with AI Index team on global AI legislation and regulations database and research.', iconUrl: hai},
    { id: 2, title: 'Researcher', date: 'January 2023 – Present', company: 'Stanford Machine Learning Group', description: 'Working on Oil and Gas Well Pad team to detect facilities via satellite imagery and create a global map of high-pollutant sites.', iconUrl: sail},
    { id: 3, title: 'Software Engineer', date: 'June – September 2022', company: 'Rebellion Defense', description: 'In charge of developing a pipeline for sensor fusion target detection and target tracking.', iconUrl: rebellion},
    { id: 4, title: 'Co-Founder Director', date: 'April 2020 – Present', company: 'Toucan Events Inc.', description: 'Responsible for business development, fundraising, product development, marketing, and more.', iconUrl: toucan},
    { id: 5, title: 'Construction Worker', date: 'July - August 2019', company: 'Max Jacobs', description: 'Practiced exterior house remodeling.', iconUrl: construction},
    { id: 6, title: 'Research Intern', date: 'June - July 2017', company: 'Atreaus Capital', description: 'Compiled research on crude oil market and presented investment strategies.', iconUrl: atreus},
    { id: 7, title: 'Research Intern', date: 'July 2017', company: 'FuboTV', description: 'Conducted research on Canadian OTT media market and collaborated on market expansion strategies.', iconUrl: fubo },
    // Add more positions here
];

const leadershipActivities = [
    { id: 1, title: 'Lead', company: 'Stanford AI Alignment (SAIA)', date: 'September 2022 – Present', description: 'Student research and discussion group focused on AI alignment and governance.', iconUrl: saia},
    { id: 2, title: 'Liaison', company: 'Team Impact for Stanford Men’s Lacrosse', date: 'September 2021 – June 2023', description: 'Worked with local children’s hospitals to support terminally ill children.', iconUrl: team},
    { id: 3, title: 'Co-founder and Captain', company: 'Dalton Computer Science Team', date: 'September 2018 – June 2019', description: 'Founded team to compete in American Computer Science League and other tournaments.', iconUrl: dalton},
    { id: 4, title: 'Captain', company: 'Dalton Men’s Lacrosse Team', date: 'February – June 2019', description: 'Led team in successful season and nominated First Team All-Ivy.', iconUrl: dalton},
    { id: 5, title: 'Captain', company: 'Dalton Squash Team', date: 'November 2018 – February 2019', description: 'Led team to contention at Squash Nationals.', iconUrl: dalton},
    { id: 6, title: 'Co-head', company: 'Longboard Club', date: '2017 – 2019', description: 'Created hand-crafted longboards for charity.', iconUrl: dalton},
    // Add more activities here
];

const honors = [
    { id: 1, title: 'Selected Team Hacking for Defense', date: 'Spring 2023', description: 'Worked on project addressing national security threat of genomic data.', iconUrl: h4d},
    { id: 2, title: 'Best Project CS329M Machine Programming', date: 'Fall Quarter 2022', description: 'Developed CodeCrawlr, a search engine for code.', iconUrl: stanford},
    { id: 3, title: 'Fellow', company: 'Kleiner Perkins', date: 'June – September 2022', description: 'Immersed in Silicon Valley’s top companies and leaders, less than 4% acceptance rate.', iconUrl: kleiner},
    { id: 4, title: 'Portfolio Company', company: 'Techstars', date: 'Winter 2021', description: 'Part of a global platform for innovation, less than 1% of companies accepted.', iconUrl: techstars},
    { id: 5, title: 'Fellow', company: 'The Bronfman Youth Fellowship', date: 'Summer 2018', description: 'Participated in academic and cultural program in Jerusalem.', iconUrl: bronfman},
    { id: 6, title: 'Record Holder (Current)', event: 'Dalton Egg Drop', date: '2017', description: 'Created a unique drop-protection vehicle for an egg.', iconUrl: dalton},
    // Add more honors here
];

const Experience = () => {
    return (
      <section id="experience" className="experience-section">
        <div className="container">
          <h2>Experience</h2>

          <div className="experience-columns">
            <div className="positions">
              <h3>Positions</h3>
              {positions.map(position => (
                <Position key={position.id} {...position} />
              ))}
            </div>

            <div className="leadership-activities">
              <h3>Leadership Activities</h3>
              {leadershipActivities.map(activity => (
                <Position key={activity.id} {...activity} />
              ))}
            </div>

            <div className="honors">
              <h3>Honors</h3>
              {honors.map(honor => (
                <Position key={honor.id} {...honor} />
              ))}
            </div>
          </div>

          <div className="resume-button-container">
            <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="resume-button">
              View My Resume
            </a>
          </div>

          {/* Skills and Courses sections remain the same */}
        </div>
      </section>
    );
};

export default Experience;