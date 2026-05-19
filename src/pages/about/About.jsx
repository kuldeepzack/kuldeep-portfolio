import React, { useEffect } from 'react';
import styles from './about.module.scss';
import profileImg from '../../assets/profiles.jpg';
import PureCounter from '@srexi/purecounterjs';
import antdIcon from '../../assets/images/antd.svg'
import htmlIcon from '../../assets/images/html5.svg'
import cssIcon from '../../assets/images/css3.svg'
import sassIcon from '../../assets/images/sass.svg'
import javascriptIcon from '../../assets/images/javascript.svg'
import reactIcon from '../../assets/images/react.svg'
import nextjsIcon from '../../assets/images/nextjs.svg'
import nodeIcon from '../../assets/images/nodejs.svg'
import mongodbIcon from '../../assets/images/mongodb.svg'
import sqlIcon from '../../assets/images/mysql.svg'
import muiIcon from '../../assets/images/materialui.svg'
import tailwindcssIcon from '../../assets/images/tailwindcss.svg'

const About = () => {
  useEffect(() => {
    // Initialize PureCounter
    new PureCounter({
      selector: '.purecounter',
      once: true,
      duration: 1
    });
  }, []);

  const statsItems = [
    // { icon: 'bi-emoji-smile', count: "3", text: 'Happy Clients' },
    { icon: 'bi-journal-richtext', count: 5, text: 'Projects' },
    { icon: 'bi-calendar', count: 2.5, text: 'Years of Experience' },
  ];

  const skills = [
    { name: "HTML", logo: htmlIcon },
    { name: "CSS", logo: cssIcon },
    { name: "Sass", logo: sassIcon },
    { name: "JavaScript", logo: javascriptIcon },
    { name: "React.js", logo: reactIcon },
    { name: "Next.js", logo: nextjsIcon },
    // { name: "Node.js", logo: nodeIcon },
    // { name: "MongoDB", logo: mongodbIcon },
    // { name: "SQL", logo: sqlIcon },
    // { name: "MUI", logo: muiIcon },
    { name: "Ant Design", logo: antdIcon },
    { name: "Tailwind", logo: tailwindcssIcon },
  ];


  const skillsItems = [
    { name: 'HTML', value: 100 },
    { name: 'CSS', value: 90 },
    { name: 'JavaScript', value: 75 },
    { name: 'PHP', value: 80 },
    // { name: 'WordPress/CMS', value: 90 },
    { name: 'Photoshop', value: 55 }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* About Section */}
      <section id="about" className={`${styles.about} ${styles.section}`}>
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>Learn more about me and my experience</p>
          </div>

          <div className="row gy-4 justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-4">
              <img src={profileImg} className="img-fluid" alt="profile" />
            </div>
            <div className="col-lg-8">
              <h2>Frontend Developer | Building Scalable & Impactful Solutions.</h2>
              <p className="fst-italic py-3">
                Frontend Developer with 3 years of expertise in ReactJS, Redux Toolkit, and Zustand.
                Specializes in scalable, high-performance web apps using clean architecture and Vite. Focused on responsive UIs,
                performance optimization, and UI/UX excellence. Delivers pixel-perfect, production-ready code in agile workflows.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className={`${styles.stats} ${styles.section}`}>
        <div className="container" data-aos="fade-up">
          <div className="row">
            {statsItems.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className={styles.statsItem} data-aos="fade-up" data-aos-delay={index * 100}>
                  <i className={`bi ${item.icon}`}></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end={`${item.count}`}
                    data-purecounter-duration="1"
                    className="purecounter"
                  >
                  </span>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className={`${styles.skills} ${styles.section}`}>
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <p>My technical level</p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12">
              <div className={styles.skillsContainer}>
                {skills.map((skill, index) => (
                  <div key={index} className={styles.skillCard}>
                    <img src={skill.logo} alt={skill.name} />
                    <div className={styles.skillName}>{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
