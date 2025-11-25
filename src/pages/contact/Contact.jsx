import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import styles from './contact.module.scss';
import dashboardBgImage from '../../assets/dashboard-bg.jpg'
import contactImage from '../../assets/images/contact-us2.svg';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    // subject: yup.string().required('Subject is required'),
    // message: yup.string().required('Message is required')
});

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const contactInfo = [
        {
            icon: 'bi-geo-alt',
            title: 'Address',
            content: 'Noida, UP, India.',
            delay: 200
        },
        {
            icon: 'bi-telephone',
            title: 'Contact Number',
            content: '+91 9169362113',
            delay: 300
        },
        {
            icon: 'bi-envelope',
            title: 'Email',
            content: 'kuldeepzack24@gmail.com',
            delay: 400
        }
    ];

   
    return (
        <section id="contact" className={styles.contact}>
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>Get in touch with me for any questions or opportunities</p>
            </div>

            <div className="container" data-aos="fade" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-4">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className={`${styles.infoItem} d-flex`}
                                data-aos="fade-up"
                                data-aos-delay={info.delay}
                            >
                                <i className={`bi ${info.icon} flex-shrink-0`}></i>
                                <div>
                                    <h3>{info.title}</h3>
                                    <p>{info.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="col-lg-8">
                        <div className={styles.contactImage}>
                            <img src={contactImage} alt="Contact illustration" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
