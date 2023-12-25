import React from 'react';
import './Skill.css'; // Create and import a CSS file for styling

const Skill = ({ name, level }) => {
    return (
        <div className="skill">
            <span className="skill-name">{name}</span>
            <div className="skill-bar">
                <div className="skill-level" style={{ width: `${level * 10}%` }}></div>
            </div>
        </div>
    );
};

export default Skill;
