import React from 'react';
import Skill from './Skill';
import ClassTile from './ClassTile';
import './SkillsAndAcademics.css';

const SkillsAndAcademics = () => {
    const skills = [
        { name: 'Python', level: 9 }, // Highlighting Python proficiency
        { name: 'C++ Programming', level: 8 },
        { name: 'Machine Learning/Deep Learning', level: 9 }, // Highlighting AI expertise
        { name: 'Computer Vision', level: 8 },
        { name: 'AI Research', level: 8 }, // Reflecting research experience in AI
        { name: 'Data Structures & Algorithms', level: 8 },
        { name: 'Unix/Linux Proficiency', level: 7 },
        { name: 'Probability & Statistics', level: 7 },
        { name: 'Web Development', level: 7 },
        { name: 'SQL/Database Management', level: 6 },
        { name: 'Cloud Computing', level: 6 },
        { name: 'Embedded Systems', level: 6 },
        { name: 'Mathematical Foundations', level: 7 },
        { name: 'Product Development', level: 7 },
        { name: 'Human-Computer Interaction', level: 7 },
        { name: 'Leadership', level: 8 },
        { name: 'Communication Skills', level: 8 },
        { name: 'Problem-Solving', level: 9 },
        { name: 'Teamwork/Collaboration', level: 8 },
        { name: 'Ethical Understanding of AI/ML', level: 7 },
        // Add more skills here
    ];
    

    const classes = [
        { code: 'CS 330', name: 'Deep Multi-Task and Meta Learning', topics: ['Multi-Task Learning and Transfer Learning', 'Meta-Learning and Few-Shot Learning', 'Advanced Topics in Meta-Learning'] },
        { code: 'CS 324', name: 'Large Language Models', topics: ['Foundations of Large Language Models', 'Ethical and Societal Implications of Large Language Models', 'Scaling and Resource Efficiency in Language Models'] },
        { code: 'CS 251', name: 'Cryptocurrencies and Blockchain Technology', topics: ['Cryptography and Cryptocurrencies', 'Consensus Protocols and Blockchain Technology', 'Decentralized Finance (DeFi) and Privacy on Public Blockchains'] },
        { code: 'CS 230', name: 'Deep Learning', topics: ['Foundations and Concepts in Deep Learning', 'Techniques and Applications of Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs)', 'Advanced Topics in Deep Learning including Deep Reinforcement Learning and Interpretability of Neural Networks'] },
        { code: 'CS 231N', name: 'Deep Learning for Computer Vision', topics: ['Deep Learning Basics', 'Perceiving and Understanding the Visual World', 'Generative and Interactive Visual Intelligence'] },
        { code: 'CS 229', name: 'Machine Learning', topics: ['Foundations of Machine Learning', 'Supervised and Unsupervised Learning', 'Deep Learning and Advanced Topics'] },
        { code: 'CS 129', name: 'Applied Machine Learning', topics: ['Implementation and Application of Supervised Learning Algorithms', 'Understanding and Applying Unsupervised and Reinforcement Learning Algorithms', 'Practical Skills in Machine Learning Systems Design and Analysis'] },
        { code: 'CS 145', name: 'Data Management and Data Systems', topics: ['SQL and Database Management', 'Query Optimization and Data Structures', 'Distributed Systems and Scaling'] },
        { code: 'CS 309A', name: 'Cloud Computing', topics: ['Cloud-Native Technologies', 'Cloud Business Strategies', 'Future of Cloud Computing'] },
        { code: 'CS 142', name: 'Web Applications', topics: ['Web Technologies and Development Fundamentals', 'Building Interactive Web Applications', 'Advanced Web Development and Security'] },
        { code: 'CS 147', name: 'Human-Computer Interaction', topics: ['User-Centered Design and Prototyping', 'Visual Design and Interaction', 'Evaluation and Project Development'] },
        { code: 'CS 107', name: 'Computer Organization and Systems', topics: ['C Programming Language Mastery', 'Machine-Level Understanding and Computer Architecture', 'Practical Application and Optimization Techniques'] },
        { code: 'CS 110', name: 'Principles of Computer Systems', topics: ['Filesystem and Data Management', 'Concurrency and Synchronization', 'Networking and Distributed Systems'] },
        { code: 'CS 103', name: 'Mathematical Foundations of Computing', topics: ['Foundations of Mathematical Logic and Proofs', 'Discrete Structures and Logic', 'Complexity Theory and the P = NP Problem'] },
        { code: 'CS 221', name: 'Artificial Intelligence: Principles and Techniques', topics: ['Machine Learning', 'Search and Heuristics', 'Markov Decision Processes (MDPs) and Games'] },
        { code: 'CS 106X', name: 'Programming Abstractions (Accelerated)', topics: ['Advanced C++ Programming Concepts', 'Data Structures and Algorithms', 'Memory Management and Graph Theory'] },
        { code: 'CS 1U', name: 'Practical Unix', topics: ['Unix Command Line Proficiency', 'Development Tools and Environment Customization', 'Scripting and System Management'] },
        { code: 'CS 109', name: 'Introduction to Probability for Computer Scientists', topics: ['Foundations in Combinatorics and Probability Theory', 'Analytical Skills in Probabilistic Models and Uncertainty Theory', 'Applications in Data Analysis and Introduction to Machine Learning'] },
        { code: 'EE 292D', name: 'Machine Learning on Embedded Systems', topics: ['Efficient Model Deployment on Embedded Systems', 'Techniques for Model Quantization and Knowledge Distillation', 'Hardware Acceleration and Efficient Model Design'] },
        { code: 'EE 292I', name: 'Insanely Great Products', topics: ['Successful Product Development Case Studies', 'Collaboration and Conflict Resolution in Cross-Functional Teams', 'Insights from Industry Leaders in Engineering and Business Management'] },
        { code: 'MS&E 297', name: 'Hacking for Defense', topics: ['Lean LaunchPad Principles in Hacking for Defense', 'Developing and Testing MVPs', 'Identifying Critical Needs and Problem Validation'] },
        { code: 'Engr 76', name: 'Information Science and Engineering', topics: ['Information Theory Fundamentals', 'Communication Systems and Error Correction', 'Machine Learning and Decision Making'] },
        { code: 'CS 329M', name: 'Machine Programming', topics: ['Foundations of Machine Programming', 'Deep Data Utilization and Synthesis', 'Semantic Reasoning in Software Development'] },
        { code: 'Psych 164', name: 'Brain Decoding', topics: ['Introduction to Brain Decoding and Visual Perception', 'Decoding Cognitive Processes', 'The Ethical Implications of Brain Decoding'] },
        { code: 'Psych 225', name: 'Triangulating Intelligence: Neuroscience, Psychology, and AI', topics: ['Introduction to the Intersection of Cognitive Science, Neuroscience, and AI', 'Object Perception: From Humans to Machines', 'Physics, Causality, and Cognitive Inference'] },
        { code: 'Psych 70', name: 'Social Psychology', topics: ['Understanding of Social Influences on Behavior', 'Critical Analysis of Interpersonal Relationships and Dynamics', 'Application of Social Psychology Principles in Various Real-world Contexts'] },
        { code: 'Psych 50', name: 'Cognitive Neuroscience', topics: ['Fundamental Concepts in Cognitive Neuroscience', 'Cognitive Processing and Brain Mechanisms', 'Experimental Methods and Critical Thinking'] },
        { code: 'SymSys 1', name: 'Minds and Machines', topics: ['Foundational Questions in Cognitive Science', 'Machines and Computational Models of Cognition', 'Neuroscience and Cognitive Philosophy'] },
    ];
    

    const transcriptLink = "https://drive.google.com/file/d/1n1IkLz-6hM2lYSWbbZ6Wz7uJXiuLzaNu/view?usp=sharing"; // Replace with your actual link

    return (
        <section id="skills-academics" className="skills-academics-section">
            <div className="container">
                <h2>Skills & Academics</h2>
                <div className="skills-academics-container">
                    <div className="skills">
                        <h3>Skills</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => <Skill key={index} {...skill} />)}
                        </div>
                    </div>
                    <div className="academics">
                        <h3>Relevant Coursework</h3>
                        <div className="academics-scrollable">
                            {classes.map((classInfo, index) => <ClassTile key={index} {...classInfo} />)}
                        </div>
                    </div>
                </div>
                <div className="transcript-download">
                    <a href={transcriptLink} target="_blank" rel="noopener noreferrer" className="transcript-button">
                        Download Transcript
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SkillsAndAcademics;