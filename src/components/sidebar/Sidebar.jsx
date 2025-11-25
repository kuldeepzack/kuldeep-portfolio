import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './sidebar.module.scss';
import { ROUTES } from '../../routes/Routes';
import Logo from '../../assets/logokd.png';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { path: ROUTES.home, icon: 'bi-house', text: 'Home', id: 'home' },
        { path: ROUTES.about, icon: 'bi-person', text: 'About', id: 'about' },
        { path: ROUTES.resume, icon: 'bi-file-earmark-text', text: 'Resume', id: 'resume' },
        { path: ROUTES.services, icon: 'bi-hdd-stack', text: 'Services', id: 'services' },
        { path: ROUTES.contact, icon: 'bi-envelope', text: 'Contact', id: 'contact' }
    ];

    // Handle scroll spy and hide/show header
    useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            // Handle section highlighting
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(menuItems[i].id);
                    break;
                }
            }

            // Handle header visibility
            const currentScrollY = window.scrollY;
            // setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 100);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleClick = (path, id) => {
        navigate(path);
        // setActiveSection(id);
        setIsActive(false);
    };

    return (
        <>
            {/* Mobile Menu Overlay */}
            {isActive && (
                <div
                    className={styles.mobileOverlay}
                    onClick={() => setIsActive(false)}
                />
            )}

            {/* Header */}
            <header
                id="header"
                className={`${styles.header} ${isActive ? styles.headerShow : ''} ${isVisible ? styles.headerVisible : ''}`}
            >
                <div className={styles.headerContent}>
                    <div className={styles.logo}>
                        <Link to={ROUTES.home}>
                            <img src={Logo} />
                        </Link>
                    </div>

                    <button
                        className={styles.headerToggle}
                        onClick={() => setIsActive(!isActive)}
                        aria-label="Toggle Menu"
                    >
                        <i className={`bi ${isActive ? 'bi-x-lg' : 'bi-list'}`}></i>
                    </button>

                    <nav id="navmenu" className={styles.navmenu}>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        className={activeSection === item.id ? styles.active : ''}
                                        onClick={() => handleClick(item.path, item.id)}
                                    >
                                        <i className={`bi ${item.icon}`}></i>
                                        <span>{item.text}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Sidebar;
