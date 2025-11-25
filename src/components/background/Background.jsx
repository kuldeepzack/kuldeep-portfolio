import React from 'react';
import styles from './background.module.scss';

const Background = () => {
    return (
        <div className={styles.background}>
            {/* Animated gradient background */}
            <div className={styles.gradientBg}></div>

            {/* SVG patterns */}
            <svg className={styles.patterns} xmlns="http://www.w3.org/2000/svg">
                {/* Animated circles */}
                <defs>
                    <pattern id="circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                        <circle cx="25" cy="25" r="2" className={styles.circle} />
                    </pattern>

                    {/* Animated lines */}
                    <pattern id="lines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="50" x2="100" y2="50" className={styles.line} />
                    </pattern>

                    {/* Animated dots */}
                    <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="1" className={styles.dot} />
                    </pattern>
                </defs>

                {/* Apply patterns */}
                <rect width="100%" height="100%" fill="url(#circles)" className={styles.patternOverlay} />
                <rect width="100%" height="100%" fill="url(#lines)" className={styles.patternOverlay} />
                <rect width="100%" height="100%" fill="url(#dots)" className={styles.patternOverlay} />
            </svg>

            {/* Animated shapes */}
            <div className={styles.shapes}>
                <div className={styles.shape1}></div>
                <div className={styles.shape2}></div>
                <div className={styles.shape3}></div>
            </div>
        </div>
    );
};

export default Background; 