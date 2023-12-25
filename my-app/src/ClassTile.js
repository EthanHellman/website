import React from 'react';
import './ClassTile.css'; // Create and import a CSS file for styling

const ClassTile = ({ code, name, topics }) => {
    return (
        <div className="class-tile">
            <h4>{code} - {name}</h4>
            <ul>
                {topics.map((topic, index) => <li key={index}>{topic}</li>)}
            </ul>
        </div>
    );
};

export default ClassTile;
