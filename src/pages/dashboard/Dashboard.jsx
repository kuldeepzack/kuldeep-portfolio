import React, { useEffect } from 'react'
import AOS from 'aos'
import Typed from 'typed.js'
import styles from './dashboard.module.scss'
import profileImage from '../../assets/images/profile.svg'

const Dashboard = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })

    // Initialize Typed.js
    const typed = new Typed('.typed', {
      strings: ['Frontend Developer', 'Freelancer', 'Problem Solver'],
      typeSpeed: 100,
      backSpeed: 50,
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
      <div className="container" data-aos="zoom-out">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className={styles.profileImage}>
              <img src={profileImage} alt="Pushti Vekariya" />
            </div>
          </div>
          <div className="col-md-6">
            <h2>Kuldeep Singh</h2>
            <p>
              I'm <span className="typed" data-typed-items="Freelancer, Problem Solver">
                Frontend Developer
              </span>
              <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
            </p>
            <div className={styles.socialLinks}>
              <a href="https://github.com/kuldeepzack" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/kuldeep-singh-690b3919a" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard