import { useState, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Background from '../background/Background';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './layout.module.scss';

const Layout = () => {
    const [isPreloaderVisible, setPreloaderVisible] = useState(true);
    const location = useLocation();

    // Hide preloader after content loads
    useEffect(() => {
        setTimeout(() => setPreloaderVisible(false), 1000);
    }, []);

    // Scroll to section when route changes
    useEffect(() => {
        const sectionId = location.pathname.slice(1) || 'home';
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div className={styles.layout}>
            {/* Background */}
            <Background />

            {/* Preloader */}
            {isPreloaderVisible && <div id="preloader"></div>}

            {/* Sidebar/Header Navigation */}
            <Sidebar />

            {/* Main Content */}
            <div className={styles.main}>
                <div className={styles.sections}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
