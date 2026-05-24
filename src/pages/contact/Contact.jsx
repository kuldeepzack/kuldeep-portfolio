import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './contact.module.scss';

// Validation Schema
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Please enter a valid email address').required('Email is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required')
});

// CONFIGURATION: Paste your Web3Forms Access Key below to receive contact form emails!
// Get your free key at https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = "cd72b636-b8bf-4ecb-8c49-1156f4d3fa9c";

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isValid }
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    });

    const onSubmit = async (data) => {
        if (WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_KEY_HERE") {
            // Artificial delay so the user can see the loading spinner in action
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsSubmitted(true);
            reset();
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: data.name,
                    email: data.email,
                    subject: `Portfolio Contact: ${data.subject}`,
                    message: data.message
                })
            });

            const result = await response.json();
            if (result.success) {
                setIsSubmitted(true);
                reset();
            } else {
                alert("Submission failed: " + (result.message || "Please check your Web3Forms access key."));
            }
        } catch (error) {
            console.error("Form submit error:", error);
            alert("Error sending message. Please check your internet connection and try again.");
        }
    };

    const contactInfo = [
        {
            icon: 'bi-geo-alt',
            title: 'Location',
            content: 'Noida, UP, India.',
            delay: 0.1,
            color: 'cyan'
        },
        {
            icon: 'bi-telephone',
            title: 'Call Me',
            content: '+91 9169362113',
            delay: 0.2,
            color: 'purple'
        },
        {
            icon: 'bi-envelope',
            title: 'Email Me',
            content: 'kuldeepzack24@gmail.com',
            delay: 0.3,
            color: 'pink'
        }
    ];

    // SVG Drawing animation for success checkmark
    const svgVariants = {
        hidden: { rotate: -10, scale: 0.8, opacity: 0 },
        visible: { 
            rotate: 0, 
            scale: 1, 
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const pathVariants = {
        hidden: { pathLength: 0 },
        visible: { 
            pathLength: 1,
            transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 }
        }
    };

    return (
        <section id="contact" className={`${styles.contact} section`}>
            {/* Header */}
            <div className="container section-title">
                <h2>Contact</h2>
                <p>Have a question or looking to work together? Drop me a message below!</p>
            </div>

            <div className="container">
                <div className="row gy-5">
                    
                    {/* Left Column: Contact info */}
                    <div className="col-lg-4">
                        <div className={styles.infoWrapper}>
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className={`${styles.infoItem} ${styles[info.color]}`}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: info.delay }}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className={styles.infoIcon}>
                                        <i className={`bi ${info.icon}`}></i>
                                    </div>
                                    <div>
                                        <h3>{info.title}</h3>
                                        <p>{info.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Contact form/Success Card */}
                    <div className="col-lg-8">
                        <div className={styles.formContainer}>
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="contact-form"
                                        onSubmit={handleSubmit(onSubmit)}
                                        className={styles.contactForm}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="row gy-4">
                                            {/* Name Field */}
                                            <div className="col-md-6">
                                                <div className={styles.inputGroup}>
                                                    <input 
                                                        type="text" 
                                                        placeholder="Your Name"
                                                        className={`${styles.formInput} ${errors.name ? styles.inputError : ''}`}
                                                        {...register('name')}
                                                    />
                                                    {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
                                                </div>
                                            </div>

                                            {/* Email Field */}
                                            <div className="col-md-6">
                                                <div className={styles.inputGroup}>
                                                    <input 
                                                        type="email" 
                                                        placeholder="Your Email"
                                                        className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
                                                        {...register('email')}
                                                    />
                                                    {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
                                                </div>
                                            </div>

                                            {/* Subject Field */}
                                            <div className="col-12">
                                                <div className={styles.inputGroup}>
                                                    <input 
                                                        type="text" 
                                                        placeholder="Subject"
                                                        className={`${styles.formInput} ${errors.subject ? styles.inputError : ''}`}
                                                        {...register('subject')}
                                                    />
                                                    {errors.subject && <span className={styles.errorMessage}>{errors.subject.message}</span>}
                                                </div>
                                            </div>

                                            {/* Message Field */}
                                            <div className="col-12">
                                                <div className={styles.inputGroup}>
                                                    <textarea 
                                                        rows="6" 
                                                        placeholder="Message"
                                                        className={`${styles.formInput} ${errors.message ? styles.inputError : ''}`}
                                                        {...register('message')}
                                                    ></textarea>
                                                    {errors.message && <span className={styles.errorMessage}>{errors.message.message}</span>}
                                                </div>
                                            </div>

                                            {/* Submit button */}
                                            <div className="col-12 text-center">
                                                <motion.button 
                                                    type="submit" 
                                                    className={styles.submitBtn}
                                                    disabled={isSubmitting || !isValid}
                                                    whileHover={!isValid ? {} : { scale: 1.02 }}
                                                    whileTap={!isValid ? {} : { scale: 0.98 }}
                                                    style={{ opacity: !isValid ? 0.5 : 1, cursor: !isValid ? 'not-allowed' : 'pointer' }}
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <span className={styles.spinner}></span>
                                                            <span>Sending Message...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>Send Message</span>
                                                            <i className="bi bi-send-fill"></i>
                                                        </>
                                                    )}
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.form>
                                ) : (
                                    /* Beautiful Animated Success Card */
                                    <motion.div
                                        key="success-card"
                                        className={styles.successCard}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ type: "spring", damping: 25, stiffness: 150 }}
                                    >
                                        <motion.div 
                                            className={styles.checkmarkCircle}
                                            variants={svgVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                                <motion.circle 
                                                    cx="26" 
                                                    cy="26" 
                                                    r="25" 
                                                    fill="none" 
                                                    stroke="#06b6d4" 
                                                    strokeWidth="3"
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                                />
                                                <motion.path 
                                                    fill="none" 
                                                    stroke="#06b6d4" 
                                                    strokeWidth="4" 
                                                    strokeLinecap="round"
                                                    d="M14 27l7.5 7.5L38 18"
                                                    variants={pathVariants}
                                                />
                                            </svg>
                                        </motion.div>
                                        <h2>Message Sent!</h2>
                                        <p>Thank you for reaching out, Kuldeep Singh will get back to you shortly.</p>

                                        {/* Informative setup warning box directly in the UI instead of blocking browser pop-up */}
                                        {WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_KEY_HERE" && (
                                            <motion.div 
                                                className={styles.setupWarning}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                <i className="bi bi-info-circle-fill"></i>
                                                <p>
                                                    To receive messages directly at your inbox (<strong>kuldeepzack24@gmail.com</strong>), get a free Access Key from <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer">web3forms.com</a> and paste it into <code>Contact.jsx</code>!
                                                </p>
                                            </motion.div>
                                        )}

                                        <motion.button
                                            className={styles.resetBtn}
                                            onClick={() => setIsSubmitted(false)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Send Another Message
                                        </motion.button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
