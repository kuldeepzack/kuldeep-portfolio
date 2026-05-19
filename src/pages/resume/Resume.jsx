import React from 'react';
import styles from './resume.module.scss';

const Resume = () => {


    const educationData = [
        {
            degree: "High School Certificate (HSC)",
            period: "2017",
            school: "Raja Harpal Singh Inter College",
            description: "I successfully completed my UP Board Examination with a 82% score. This achievement reflects my dedication, strong learning abilities, and commitment to continuous growth."
        },
        {
            degree: "Intermediate Certificate (ISC)",
            period: "2017 - 2019",
            school: "Moti Singh Inter College",
            description: "I completed my UP Board Examination with 62%. My academic foundation has played a key role in shaping my problem-solving abilities, which I apply in my professional journey as a Frontend Developer. 🚀"
        },
        {
            degree: "Bachelor of Technology (Information Technology)",
            period: "2019 - 2023",
            school: "ABES Institute of Technology",
            description: "I earned my Bachelor of Technology (Information Technology) degree in 2023 with a CGPA of 6.40 (64%) and have embarked on my journey as Frontend Developer."
        },
    ];

    const experienceData = [
        {
    position: "Frontend Developer",
    period: "Nov 2025 - Present",
    company: "TechMave Software (India)",
    responsibilities: [
        "Developed scalable SaaS web portals using ReactJS, TypeScript, Vite, and role-based access control.",
        "Implemented OneSignal push notifications for real-time alerts and improved platform user engagement.",
        "Integrated Context API, Redux Toolkit, and React Router for scalable and maintainable frontend architecture.",
        "Worked in Agile Scrum teams through sprint planning, standups, code reviews, and retrospectives.",
        "Built reusable component libraries for consistent UI design and improved frontend development efficiency.",
        "Collaborated with backend teams and product managers to deliver responsive, business-aligned user interfaces.",
        "Optimized application performance by preventing unnecessary component re-renders using React.memo, useCallback, and useMemo.",
        "Implemented debouncing in search functionality to reduce API calls and improve user experience.",
        "Improved rendering efficiency by splitting large components, using lazy loading, and optimizing state management."
    ]
},
        {
            position: "Full-Stack Developer",
            period: "June 2023 - October 2025",
            company: "Gomilestone Pvt Ltd. (India)",
            responsibilities: [
                "Collaborated with global teams and clients to ensure smooth, timely, and successful project delivery.",
                " Built responsive user interfaces using ReactJS, Tailwind CSS and JavaScript efficiently",
                "Integrated Context API, Redux Toolkit, and React Router for scalable and maintainable frontend architecture.",
                "Resolved critical UI issues and enhanced performance for consistent, reliable application user experience.",
                "Integrated PubNub SDK to enable real-time chat functionality across multiple devices.",
                "Optimized chat performance by managing asynchronous message flows and ensuring reliable event handling with PubNub listeners.",
                "Optimized application performance by preventing unnecessary component re-renders using React.memo, useCallback, and useMemo.",
                "Implemented debouncing in search functionality to reduce API calls and improve user experience.",
                "Improved rendering efficiency by splitting large components, using lazy loading, and optimizing state management."
            ]
        }
    ];

    return (
        <section id="resume" className={styles.resume}>
            <div className="container section-title" data-aos="fade-up">
                <h2>Resume</h2>
              <p className='text' style={{textAlign:"justify"}}>👋🏻 I'm Kuldeep Singh, a passionate software developer with 2+ years of experience in React, JavaScript, TypeScript, HTML/CSS, and modern tools like Git, GitHub, and JIRA, skilled in Agile practices and dedicated to building smooth, impactful digital experiences.</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                        <h3 className={styles.resumeTitle}>Education</h3>
                        {educationData.map((edu, index) => (
                            <div key={index} className={styles.resumeItem}>
                                <h4>{edu.degree}</h4>
                                <h5>{edu.period}</h5>
                                <p><em>{edu.school}</em></p>
                                <p>{edu.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <h3 className={styles.resumeTitle}>Professional Experience</h3>
                        {experienceData.map((exp, index) => (
                            <div key={index} className={styles.resumeItem}>
                                <h4>{exp.position}</h4>
                                <h5>{exp.period}</h5>
                                <p><em>{exp.company}</em></p>
                                <ul>
                                    {exp.responsibilities.map((responsibility, idx) => (
                                        <li key={idx}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
