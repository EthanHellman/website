// import React from 'react';
// import './Position.css';


// const Position = ({ title, date, company, description, iconUrl }) => {
//     return (
//         <div className="position">
//             {iconUrl && <img src={iconUrl} alt={`${title} icon`} className="position-icon" />}
//             <div className="position-details">
//                 <h4>{title}</h4>
//                 <p>{date}</p>
//                 <p>{company}</p>
//                 <p>{description}</p>
//             </div>
//         </div>
//     );
// };

// export default Position;

import React from 'react';
import './Position.css';

const Position = ({ title, date, company, description, iconUrl }) => {
    return (
        <div className="position">
            {iconUrl && <img src={iconUrl} alt={`${title} icon`} className="position-icon" />}
            <div className="position-details">
                <div className="position-header">
                    <h4>{title}</h4>
                    <span className="position-date">{date}</span>
                </div>
                <p className="position-company">{company}</p>
                <p className="position-description">{description}</p>
            </div>
        </div>
    );
};

export default Position;

