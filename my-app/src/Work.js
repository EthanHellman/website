// Work.js
import React from 'react';
import Slider from 'react-slick';
import Project from './Project'; // A new component for individual projects
import './Work.css'; // CSS file for styling
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Work = () => {
    const projects = [
        {
            title: 'Geography-Aware Few-Shot Remote Sensing Scene Classification',
            date: 'Fall 23/24',
            description: 'Exploring new horizons in remote sensing, this project innovatively applies geography-aware few-shot learning to scene classification, leveraging the RemoteCLIP model combined with meta-learning. The study showcases the potent combination of visual and textual data, highlighting how this integrated approach can enhance classification accuracy in data-scarce environments.',
            pdfLink: 'https://drive.google.com/file/d/1tfpxyVc_otvXRQ7s3gVt368WF1j1_S7H/preview'
        },
        {
            title: 'Evaluating Prompt Learning Strategies for Remote Sensing Vision-Language Foundation Models',
            date: 'Fall 23/24',
            description: 'The study in this project takes an inventive approach to remote sensing, utilizing Vision-Language Models (VLMs) to improve the accuracy of scene classification in satellite imagery. By evaluating various prompt learning strategies on foundational models, the project aims to refine AI applications in environmental conservation, bridging the gap between advanced computational techniques and practical, real-world environmental challenges.',
            pdfLink: 'https://drive.google.com/file/d/1LfGNm_EKe65sqD0gIDUsQTdJJilIvrKv/preview'
        },
        {
            title: 'Sage',
            date: 'Fall 23/24',
            description: 'Exploring the social and emotional needs of the elderly, the study proposes a unique approach to combat loneliness and disconnection by establishing gardening groups. It examines how these groups can foster friendships, instill a sense of purpose, and contribute to a fulfilling community experience, focusing on the simplicity of group formation and the benefits of engaging in stress-free physical activities.',
            pdfLink: 'https://web.stanford.edu/class/cs147/projects/DesigningforActiveLifestyles/Sage/'
        },
        {
            title: 'Un-reinventing the Wheel: Large Scale Open Source Code Search',
            date: 'Fall 22/23',
            description: 'Delving into the intersection of AI and software development, this project explores the use of advanced language models for effective code retrieval from large-scale public repositories. It introduces a unique system capable of converting natural language questions into precise code solutions, highlighting the significant strides and emerging complexities in using artificial intelligence for more efficient programming and code utilization.',
            pdfLink: 'https://drive.google.com/file/d/10Cb4QMnFN0v4R-T-eZFXC2pdFxP-ETbK/preview'
        },
        {
            title: 'Toucan Events',
            date: '2020 - Present',
            description: 'Toucan is a dynamic and interactive platform designed to revolutionize online social experiences, offering a unique approach to virtual events and team collaboration. It focuses on creating a more natural and engaging environment for online interactions, aiming to closely mimic the fluidity and spontaneity of real-life social dynamics. The platform is tailored to enhance user engagement and networking opportunities in a virtual setting, making it a suitable choice for various online gatherings and collaborative needs.',
            pdfLink: 'https://www.toucan.events/'
        },
        {
            title: 'Cell Segmentation on the Edge for Diagnostic Microscopy',
            date: 'Fall 22/23',
            description: 'In this project, a novel approach is explored to enhance cell segmentation in diagnostic microscopy, particularly for malaria detection. The study focuses on optimizing machine learning models for efficient processing on edge devices like the Nvidia Jetson Nano, using techniques like model quantization and fine-tuning, aiming to bring powerful diagnostic tools to resource-constrained environments.',
            pdfLink: 'https://drive.google.com/file/d/1C2lEWMRQRLKY582q_vwB0dNiQjMEExmF/preview'
        },
        {
            title: 'Hacking for Defense: Team Cricket Final Presentation',
            date: 'Spring 22/23',
            description: 'This project introduces an AI-driven platform for improving legal and administrative aspects of research collaborations, informed by insights from over 150 interviews with key stakeholders in academia and biotech. It focuses on automating contract drafting and compliance, aiming to expedite scientific progress by streamlining partnership processes, reflecting a deep understanding of the challenges and needs identified through extensive stakeholder engagement.',
            pdfLink: 'https://drive.google.com/file/d/1bRsZ66hGB3AqcKORk4kv_3yjn0IGLpy5/preview'
        },
        {
            title: 'Target Tracking in Full-Motion Video via Electro-Optical and Infrared Sensor Fusion',
            date: 'Summer 22',
            description: 'Venturing into advanced technological realms, this project addresses the complexities of fusing electro-optical and infrared imagery for object detection and tracking. It encompasses a deep dive into developing and refining models, tackling unique challenges in data analysis, and striving towards state-of-the-art real-time detection and tracking in dynamic environments.',
            pdfLink: 'https://drive.google.com/file/d/1DiUdkdDDestCM64qbAGVAPPZKpbimq7P/preview'
        },
        {
            title: 'SolarX: Solar Panel Segmentation and Classification',
            date: 'Spring 21/22',
            description: 'This report details a study on using deep learning models for solar panel segmentation and classification from satellite imagery. It describes the development and testing of two models: a ResNet-34 for identifying solar panels in images and a U-Net for detailed segmentation, aiming to enhance the accuracy and efficiency of solar panel mapping in urban environments.',
            pdfLink: 'https://drive.google.com/file/d/1wSTgyYHinEmprVkhwwAauq_JXsom8Gn5/preview'
        },
        {
            title: 'News and Social Media: Shifts in Reality',
            date: 'Spring 21/22',
            description: 'The paper analyzes the transformative impact of social media on news consumption and journalism, addressing the shift in public engagement and knowledge levels, and the challenges posed by misinformation and polarization. It proposes solutions to mitigate these issues, emphasizing the need for redesigned social media algorithms and government intervention to support traditional journalism and fact-checking initiatives.',
            pdfLink: 'https://drive.google.com/file/d/1aCo0wSynUsuW_q-eLnSlVT2lCUQEd-d-/preview'
        },
        {
            title: 'Collective Intelligence: A Review of Emergent Trends and Research in Support of a New Communication Paradigm',
            date: 'Winter 21/22',
            description: 'This paper investigates the advancing field of brain-to-brain interfaces (B2Bi), focusing on recent studies that explore complex communication, synchronization, and memory transfer between brains. It critically examines the potential applications, ethical considerations, and future implications of this technology in enhancing collective intelligence and human-computer interaction.',
            pdfLink: 'https://drive.google.com/file/d/1aC5dU9mDM1ePiQbu2-LSOjdfna8t_4d6/preview'
        },
        {
            title: 'The Stentrode',
            date: 'Winter 21/22',
            description: 'The paper presents an extensive analysis of the Stentrode, an innovative brain-computer interface technology, focusing on its development, applications, and potential for neuroprosthetic advancements. It explores the Stentrode\'s minimally invasive approach, its capabilities in neural data recording and stimulation, and discusses the broader implications, challenges, and future possibilities of this technology in therapeutic and practical applications.',
            pdfLink: 'https://drive.google.com/file/d/1AyvyFslxYB15MMV61hpuhxQXdpm1Jg5a/preview'
        },
        {
            title: 'Automatic Laugh Detection through Video and Audio Analysis',
            date: 'Spring 19/20',
            description: 'This work details a project focused on creating a deep learning model for detecting laughter in video input, employing a sequence model with face detection, facial landmark localization, and a time-sequence prediction model. It explores the potential for real-time detection and emotion recognition, highlighting the challenges and future possibilities for enhancing online communication and emotional analysis in virtual interactions.',
            pdfLink: 'https://drive.google.com/file/d/14kVQEa9MBkNvvmA56KJ6pR6joDb4odVE/preview'
        },
        {
            title: 'The Digital Landscape: A Critical Analysis',
            date: 'Winter 19/20',
            description: 'The work is a comprehensive analysis of the ethical and societal challenges posed by the digital age, focusing on issues of data privacy, the role of technology in democracy, and the responsibilities of users, corporations, and governments in navigating and regulating the digital landscape. It emphasizes the urgent need for changes in how digital data is managed and the importance of ethical practices in technology development and usage.',
            pdfLink: 'https://drive.google.com/file/d/16W6D48nZd6Zsn0adWqavcOq_GLnyenAW/preview'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:  2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id="work" className="work-section">
            <h2>My Work</h2>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </Slider>
        </section>
    );
};

export default Work;
