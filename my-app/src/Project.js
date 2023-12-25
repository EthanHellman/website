// Project.js
import React from 'react';
import './Project.css';

const Project = ({ title, date, description, pdfLink }) => {
    // Add #view=FitH to the pdfLink to ensure the PDF fits the width of the container
    // const adjustedPdfLink = pdfLink + "#view=FitH";

    return (
        <div className="outer">
            <div className="project">
                <div className="project-details">
                    <h3>{title}</h3>
                    <p className="project-date">{date}</p>
                    <p className="project-description">{description}</p>
                </div>
                <div className="project-pdf-preview">
                <iframe 
                        src={pdfLink} 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" // Optional: for removing the border
                        allow="autoplay" 
                    ></iframe>
                </div>
            </div>
            <a href={pdfLink} target="_blank" rel="noopener noreferrer">View Full Work</a>
        </div>
        
    );
};

export default Project;