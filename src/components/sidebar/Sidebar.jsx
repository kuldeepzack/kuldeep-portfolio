import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './sidebar.module.scss';
import { ROUTES } from '../../routes/Routes';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { path: ROUTES.home, icon: 'bi-house', text: 'Home', id: 'home' },
        { path: ROUTES.about, icon: 'bi-person', text: 'About', id: 'about' },
        { path: ROUTES.resume, icon: 'bi-file-earmark-text', text: 'Resume', id: 'resume' },
        { path: ROUTES.services, icon: 'bi-hdd-stack', text: 'Services', id: 'services' },
        { path: ROUTES.contact, icon: 'bi-envelope', text: 'Contact', id: 'contact' }
    ];

    // Scroll tracking for scrolling effects and scroll spy
    useEffect(() => {
        const handleScroll = () => {
            // Add scroll class after 50px
            setIsScrolled(window.scrollY > 50);

            const sections = menuItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 150; // Offset for detection trigger

            // Highlight section scrollspy
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(menuItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (path, id) => {
        navigate(path);
        setIsActive(false);
    };

    return (
        <>
            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className={styles.mobileOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsActive(false)}
                    />
                )}
            </AnimatePresence>

            {/* Glowing top navigation header */}
            <header
                id="header"
                className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''} ${isActive ? styles.headerShow : ''}`}
            >
                <div className={styles.headerContent}>
                    {/* Logo container */}
                    <div className={styles.logo}>
                        <Link to={ROUTES.home} className={styles.logoLink}>
                            <div className={styles.logoBadge}>
                                <span className={styles.badgeK}>K</span>
                                <span className={styles.badgeS}>S</span>
                            </div>
                            <span className={styles.logoText}>
                                Kuldeep Singh<span className={styles.logoDot}>.</span>
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        className={styles.headerToggle}
                        onClick={() => setIsActive(!isActive)}
                        aria-label="Toggle Menu"
                    >
                        <i className={`bi ${isActive ? 'bi-x-lg' : 'bi-list'}`}></i>
                    </button>

                    {/* Navigation Menu */}
                    <nav className={`${styles.navmenu} ${isActive ? styles.navmenuShow : ''}`}>
                        <ul>
                            {menuItems.map((item, index) => {
                                const isCurrentActive = activeSection === item.id;
                                return (
                                    <li key={index}>
                                        <Link
                                            to={item.path}
                                            className={`${styles.navLink} ${isCurrentActive ? styles.active : ''}`}
                                            onClick={() => handleClick(item.path, item.id)}
                                        >
                                            {/* Beautiful slide-in indicator underneath active tab */}
                                            {isCurrentActive && (
                                                <motion.div
                                                    layoutId="activeGlowTab"
                                                    className={styles.activeGlowTab}
                                                    transition={{ type: 'spring', stiffness: 350, damping: 26 }}
                                                />
                                            )}

                                            <i className={`bi ${item.icon}`}></i>
                                            <span>{item.text}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Sidebar;
