import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './background.module.scss';
import astronautImg from '../../assets/images/astronaut.png';

const Background = () => {
    const canvasRef = useRef(null);

    // Motion values for tracking cursor position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics configuration
    const springConfig = { damping: 30, stiffness: 80, mass: 0.6 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Offset coordinates so the orb centers perfectly under the cursor
            mouseX.set(e.clientX - 150);
            mouseY.set(e.clientY - 150);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Canvas starfield animation loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        
        let animationFrameId;
        let stars = [];
        const numStars = 100; // Number of stars in the background

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.5,
                    speed: Math.random() * 0.4 + 0.1, // Drifting speed
                    alpha: Math.random(),
                    alphaChange: Math.random() * 0.015 + 0.005
                });
            }
        };

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff';

            stars.forEach((star) => {
                // Twinkle animation
                star.alpha += star.alphaChange;
                if (star.alpha > 1 || star.alpha < 0) {
                    star.alphaChange = -star.alphaChange;
                }
                
                // Keep alpha safe
                if (star.alpha < 0) star.alpha = 0;
                if (star.alpha > 1) star.alpha = 1;

                // Drift stars downwards and slightly left
                star.y += star.speed;
                star.x -= star.speed * 0.2;

                // Loop stars back to the screen
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
                if (star.x < 0) {
                    star.x = canvas.width;
                    star.y = Math.random() * canvas.height;
                }

                ctx.globalAlpha = star.alpha;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalAlpha = 1.0;
            animationFrameId = requestAnimationFrame(drawStars);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawStars();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className={styles.background}>
            {/* Smooth Canvas Drifting Stars */}
            <canvas ref={canvasRef} className={styles.starfield} />

            {/* Drifting Nebula glow blurs */}
            <div className={styles.ambientGlow1}></div>
            <div className={styles.ambientGlow2}></div>
            <div className={styles.ambientGlow3}></div>

            {/* Spring-smoothed Interactive Cursor Follow Glow */}
            <motion.div
                className={styles.interactiveOrb}
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />

            {/* Futuristic floating astronaut in space */}
            <motion.div
                className={styles.astronautContainer}
                animate={{
                    y: [0, -25, 0],
                    x: [0, 15, 0],
                    rotate: [0, 6, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <img src={astronautImg} alt="Drifting Astronaut" className={styles.astronaut} />
            </motion.div>

            {/* Futuristic Tech Grid overlay */}
            <div className={styles.gridOverlay}></div>
        </div>
    );
};

export default Background;