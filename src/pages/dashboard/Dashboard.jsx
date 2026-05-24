import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'
import styles from './dashboard.module.scss'
import profileImage from '../../assets/images/profile.svg'

const Dashboard = () => {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed('.typed', {
      strings: ['Frontend Developer', 'Freelancer', 'Problem Solver'],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      loop: true
    })

    // Cleanup
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id="home" className={`${styles.hero} section`}>
      <div className="container">
        <div className="row align-items-center justify-content-center gy-5">
          
          {/* Profile Image and Neon Aura container */}
          <div className="col-lg-5 order-lg-2 d-flex justify-content-center">
            <motion.div 
              className={styles.profileContainer}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Spinning gradient aura background */}
              <div className={styles.glowRing}></div>
              <div className={styles.profileImage}>
                <img src={profileImage} alt="Kuldeep Singh" />
              </div>
            </motion.div>
          </div>

          {/* Intro content */}
          <div className="col-lg-7 order-lg-1">
            <div className={styles.heroContent}>
              <motion.span 
                className={styles.greeting}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                🚀 Welcome to my portfolio
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Kuldeep Singh
              </motion.h2>

              <motion.p
                className={styles.subTitle}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I'm a <span className="typed">Frontend Developer</span>
              </motion.p>

              <motion.p 
                className={styles.description}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Crafting modern, high-performance, and visually breathtaking web applications with a dedication to robust UI architectures and sleek, micro-animated details.
              </motion.p>

              {/* Glowing CTA Buttons */}
              <motion.div 
                className={styles.ctaGroup}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <a href="#services" className={styles.primaryBtn}>
                  <span>Explore Work</span>
                  <i className="bi bi-arrow-right-short"></i>
                </a>
                <a href="#contact" className={styles.secondaryBtn}>
                  <span>Get In Touch</span>
                </a>
              </motion.div>

              {/* Social links */}
              <motion.div 
                className={styles.socialLinks}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.a 
                  whileHover={{ y: -6, scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.15)", borderColor: "rgba(168, 85, 247, 0.4)" }} 
                  href="https://github.com/kuldeepzack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  <i className="bi bi-github"></i>
                </motion.a>
                <motion.a 
                  whileHover={{ y: -6, scale: 1.1, backgroundColor: "rgba(6, 182, 212, 0.15)", borderColor: "rgba(6, 182, 212, 0.4)" }} 
                  href="https://www.linkedin.com/in/kuldeep-singh-690b3919a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  <i className="bi bi-linkedin"></i>
                </motion.a>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Dashboard