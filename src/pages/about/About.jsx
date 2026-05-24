import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './about.module.scss';
import profileImg from '../../assets/profiles.jpg';
import PureCounter from '@srexi/purecounterjs';
import antdIcon from '../../assets/images/antd.svg';
import htmlIcon from '../../assets/images/html5.svg';
import cssIcon from '../../assets/images/css3.svg';
import sassIcon from '../../assets/images/sass.svg';
import javascriptIcon from '../../assets/images/javascript.svg';
import reactIcon from '../../assets/images/react.svg';
import nextjsIcon from '../../assets/images/nextjs.svg';
import tailwindcssIcon from '../../assets/images/tailwindcss.svg';

const About = () => {
  useEffect(() => {
    // Initialize PureCounter for stats numbers
    new PureCounter({
      selector: '.purecounter',
      once: true,
      duration: 1.2
    });
  }, []);

  const statsItems = [
    { icon: 'bi-journal-richtext', count: 5, text: 'Projects Completed', color: 'purple' },
    { icon: 'bi-calendar', count: 3, text: 'Years Experience', color: 'cyan' },
  ];

  const skills = [
    { name: "React.js", logo: reactIcon, glow: "rgba(97, 218, 251, 0.3)", border: "rgba(97, 218, 251, 0.4)" },
    { name: "Next.js", logo: nextjsIcon, glow: "rgba(255, 255, 255, 0.2)", border: "rgba(255, 255, 255, 0.3)" },
    { name: "JavaScript", logo: javascriptIcon, glow: "rgba(247, 223, 30, 0.2)", border: "rgba(247, 223, 30, 0.3)" },
    { name: "Tailwind CSS", logo: tailwindcssIcon, glow: "rgba(56, 178, 172, 0.25)", border: "rgba(56, 178, 172, 0.35)" },
    { name: "Ant Design", logo: antdIcon, glow: "rgba(24, 144, 255, 0.25)", border: "rgba(24, 144, 255, 0.35)" },
    { name: "Sass", logo: sassIcon, glow: "rgba(204, 102, 153, 0.25)", border: "rgba(204, 102, 153, 0.35)" },
    { name: "HTML5", logo: htmlIcon, glow: "rgba(227, 79, 38, 0.25)", border: "rgba(227, 79, 38, 0.35)" },
    { name: "CSS3", logo: cssIcon, glow: "rgba(21, 114, 182, 0.25)", border: "rgba(21, 114, 182, 0.35)" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className={styles.aboutPage}>
      
      {/* About Section */}
      <section id="about" className={`${styles.about} ${styles.section}`}>
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
            <p>Crafting responsive and interactive digital web experiences</p>
          </div>

          <div className="row gy-5 align-items-center justify-content-center">
            
            {/* Profile image with neon frame */}
            <motion.div 
              className="col-lg-4 d-flex justify-content-center"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={styles.profileWrapper}>
                <div className={styles.rotatingGlow}></div>
                <div className={styles.profileImageContainer}>
                  <img src={profileImg} className="img-fluid" alt="Kuldeep Singh" />
                </div>
              </div>
            </motion.div>

            {/* Profile Bio Details */}
            <motion.div 
              className="col-lg-8"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={styles.aboutContent}>
                <h3>Frontend Developer | Building Scalable & Impactful Solutions</h3>
                <p className={styles.introParagraph}>
                  Hello! I'm <strong>Kuldeep Singh</strong>, a software developer with 3+ years of professional experience specializing in building responsive, scalable, and modular web applications. My tech stack revolves around ReactJS, Next.js, Redux Toolkit, and Tailwind CSS.
                </p>
                <p className={styles.bioParagraph}>
                  I'm deeply committed to writing clean architecture, creating pixel-perfect components, and implementing fluid UI animations. I thrive on collaborating within agile teams to transform complex ideas into high-end user experiences.
                </p>
                <div className="row mt-4 pt-2">
                  <div className="col-md-6">
                    <ul className={styles.infoList}>
                      <li><i className="bi bi-arrow-right-short"></i> <strong>Location:</strong> Noida, UP, India</li>
                      <li><i className="bi bi-arrow-right-short"></i> <strong>Email:</strong> <span className={styles.accentText}>kuldeepzack24@gmail.com</span></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className={styles.infoList}>
                      <li><i className="bi bi-arrow-right-short"></i> <strong>Experience:</strong> 3+ Years</li>
                      <li><i className="bi bi-arrow-right-short"></i> <strong>Freelance:</strong> Available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats widgets Section */}
      <section id="stats" className={`${styles.stats} ${styles.section}`}>
        <div className="container">
          <div className="row justify-content-center g-4">
            {statsItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="col-md-5 col-lg-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className={`${styles.statsItem} ${styles[item.color]}`}>
                  <div className={styles.statsIcon}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div className={styles.statsNum}>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end={`${item.count}`}
                      data-purecounter-duration="1.2"
                      className="purecounter"
                    >
                      0
                    </span>
                    <span className={styles.plus}>+</span>
                  </div>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Skills Badges Grid Section */}
      <section id="skills" className={`${styles.skills} ${styles.section}`}>
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
            <p>My tech stack and developmental ecosystem</p>
          </div>

          <motion.div 
            className="row"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="col-lg-12">
              <div className={styles.skillsContainer}>
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className={styles.skillCard}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -6, 
                      borderColor: skill.border,
                      boxShadow: `0 8px 25px -4px ${skill.glow}, 0 0 12px ${skill.glow}`,
                      scale: 1.04
                    }}
                  >
                    <div className={styles.skillLogoWrapper}>
                      <img src={skill.logo} alt={skill.name} />
                    </div>
                    <div className={styles.skillName}>{skill.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
