import React from 'react';
import { motion } from 'framer-motion';
import styles from './resume.module.scss';

const Resume = () => {
    const educationData = [
        {
            degree: "Bachelor of Technology (Information Technology)",
            period: "2019 - 2023",
            school: "ABES Institute of Technology",
            description: "Earned my Bachelor of Technology degree in Information Technology with a strong academic foundation in software engineering, algorithms, and web technologies. This education served as the launchpad for my professional engineering career. 🚀"
        },
        {
            degree: "Intermediate Certificate (ISC)",
            period: "2017 - 2019",
            school: "Moti Singh Inter College",
            description: "Completed secondary education in Science and Mathematics, laying the groundwork for analytic skills and structured logical thinking applied everyday in frontend development workflows."
        },
        {
            degree: "High School Certificate (HSC)",
            period: "2017",
            school: "Raja Harpal Singh Inter College",
            description: "Graduated with honors, demonstrating high dedication, fast learning capabilities, and a commitment to continuous growth and scholastic excellence."
        }
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
                "Optimized application performance by preventing unnecessary component re-renders using React.memo, useCallback, and useMemo.",
                "Built reusable component libraries for consistent UI design and improved frontend development efficiency.",
                "Improved rendering efficiency by splitting large components, using lazy loading, and optimizing state management."
            ]
        },
        {
            position: "Full-Stack Developer",
            period: "June 2023 - October 2025",
            company: "Gomilestone Pvt Ltd. (India)",
            responsibilities: [
                "Collaborated with global teams and clients to ensure smooth, timely, and successful project delivery.",
                "Built responsive user interfaces using ReactJS, Tailwind CSS, and JavaScript efficiently.",
                "Integrated PubNub SDK to enable real-time chat functionality across multiple devices.",
                "Optimized chat performance by managing asynchronous message flows and ensuring reliable event handling with PubNub listeners.",
                "Implemented debouncing in search functionality to reduce API calls and improve user experience.",
                "Resolved critical UI issues and enhanced performance for consistent, reliable application user experience."
            ]
        }
    ];

    // Animation Configurations
    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="resume" className={`${styles.resume} section`}>
            {/* Page Header */}
            <div className="container section-title">
                <h2>Resume</h2>
                <p className={styles.introText}>
                    👋 I'm Kuldeep Singh, a passionate software developer with 3+ years of professional experience. 
                    Specialized in React, JavaScript, TypeScript, and modern ecosystem tools to build highly interactive, 
                    scalable, and high-performance digital experiences.
                </p>
            </div>

            <div className="container">
                <div className="row gy-5">
                    
                    {/* Education Column */}
                    <div className="col-lg-6">
                        <motion.h3 
                            className={styles.resumeTitle}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <i className="bi bi-mortarboard-fill"></i> Education
                        </motion.h3>

                        <motion.div 
                            className={styles.timeline}
                            variants={listVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {educationData.map((edu, index) => (
                                <motion.div 
                                    key={index} 
                                    className={styles.resumeItem}
                                    variants={cardVariants}
                                    whileHover={{ x: 6 }}
                                >
                                    <div className={styles.bulletNode}></div>
                                    <h4>{edu.degree}</h4>
                                    <h5>{edu.period}</h5>
                                    <p className={styles.school}><em>{edu.school}</em></p>
                                    <p className={styles.description}>{edu.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Experience Column */}
                    <div className="col-lg-6">
                        <motion.h3 
                            className={styles.resumeTitle}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <i className="bi bi-briefcase-fill"></i> Professional Experience
                        </motion.h3>

                        <motion.div 
                            className={styles.timeline}
                            variants={listVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {experienceData.map((exp, index) => (
                                <motion.div 
                                    key={index} 
                                    className={styles.resumeItem}
                                    variants={cardVariants}
                                    whileHover={{ x: 6 }}
                                >
                                    <div className={styles.bulletNode}></div>
                                    <h4>{exp.position}</h4>
                                    <h5>{exp.period}</h5>
                                    <p className={styles.company}><em>{exp.company}</em></p>
                                    <ul className={styles.responsibilities}>
                                        {exp.responsibilities.map((responsibility, idx) => (
                                            <li key={idx}>
                                                <i className="bi bi-patch-check"></i>
                                                <span>{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Resume;
