import React from 'react';
import { motion } from 'framer-motion';
import styles from './service.module.scss';

const Service = () => {
    const services = [
        {
            color: 'Purple',
            icon: 'bi-people-fill',
            title: 'Rota Management System',
            subtitle: 'Healthcare Workforce SaaS',
            description: [
                "Developed a SaaS-based healthcare workforce portal for managing clients, care workers, and agency operations.",
                "Implemented slot-based scheduling to assign care workers based on availability and client requirements.",
                "Built check-in, check-out, and digital signature features for tracking service visit completion.",
                "Provided role-based access control for office staff, family members, and external stakeholders.",
                "Maintained real-time care worker schedule tracking and service monitoring for operational oversight."
            ],
            glow: "rgba(168, 85, 247, 0.25)",
            border: "rgba(168, 85, 247, 0.4)",
        },
        {
            color: 'Teal',
            icon: 'bi-briefcase-fill',
            title: 'FindSoll Freelance Marketplace',
            subtitle: 'Multi-Role Hiring Platform',
            description: [
                "Developed a multi-role SaaS platform for agencies, suppliers, clients, and freelancers with role-based access control.",
                "Integrated Stripe payment gateway for secure transactions and subscription billing across multiple user roles.",
                "Implemented OneSignal push notifications for real-time job alerts and platform activity updates.",
                "Built an audit trail system for freelancer activity tracking, ensuring transparency and compliance.",
                "Delivered scalable portal architecture supporting complex workflows across multiple stakeholder types."
            ],
            glow: "rgba(6, 182, 212, 0.25)",
            border: "rgba(6, 182, 212, 0.4)",
        },
        {
            color: 'Cyan',
            icon: 'bi-activity',
            title: 'Complaint Service System',
            subtitle: 'GPS Tracking Admin Panel',
            description: [
                "Developed a role-based Complaint Management System for Super Admin, State Head, and Dealer with well-defined access levels.",
                "Implemented pagination, filters, and GPS tracking with distance calculation using latitude and longitude.",
                "Integrated live map for real-time dealer tracking, auto-refreshing every 40 seconds during active site visits.",
                "Built dynamic dashboards with Excel and PDF export options for audits and data analysis.",
                "Enhanced decision-making through automated data sync and real-time monitoring capabilities."
            ],
            glow: "rgba(14, 165, 233, 0.25)",
            border: "rgba(14, 165, 233, 0.4)",
        },
        {
            color: 'Orange',
            icon: 'bi-globe2',
            title: 'ERP Textile Manufacturing',
            subtitle: 'Enterprise Logistics Software',
            description: [
                "Built an ERP solution for the textile industry to streamline procurement, inventory, and dispatch operations.",
                "Developed scalable modules for sales, purchase, production planning, and financial performance tracking.",
                "Enabled real-time tracking of fabric rolls throughout printing, stitching, warehousing, and logistics processes.",
                "Delivered downloadable PDF and Excel reports to support audits, compliance, and strategic decision-making."
            ],
            glow: "rgba(249, 115, 22, 0.25)",
            border: "rgba(249, 115, 22, 0.4)",
        },
        {
            color: 'Red',
            icon: 'bi-person-badge-fill',
            title: 'HR Application & CRM Portal',
            subtitle: 'Enterprise Employee Portal',
            description: [
                "Developed a responsive HR portal using React JS with seamless cross-device compatibility.",
                "Configured real-time notifications and integrated Google Charts for interactive analytics and reporting.",
                "Implemented role-based workflow approvals (L1, L2, Treasury) with audit logs for transparency and compliance."
            ],
            glow: "rgba(239, 68, 68, 0.25)",
            border: "rgba(239, 68, 68, 0.4)",
        },
        {
            color: 'Indigo',
            icon: 'bi-cloud-check-fill',
            title: 'Hospitality Voucher System',
            subtitle: 'Cost-Tracking HVMS SaaS',
            description: [
                "Developed a modern cost-tracking system with JWT-based multi-role authentication for secure access management.",
                "Integrated RESTful APIs for real-time data fetching, improved accessibility, and enhanced data confidentiality.",
                "Improved financial workflows by generating PDFs and displaying dynamic product data for better usability.",
                "Implemented optimized pagination and search features to enhance overall user experience and performance."
            ],
            glow: "rgba(99, 102, 241, 0.25)",
            border: "rgba(99, 102, 241, 0.4)",
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 35 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="services" className={`${styles.services} section`}>
            {/* Header */}
            <div className="container section-title">
                <h2>Projects & Services</h2>
                <p>Delivering high-performance SaaS platforms, enterprise portals, and customized engineering solutions.</p>
            </div>

            <div className="container">
                <motion.div 
                    className="row gy-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <motion.div
                                className={`${styles.serviceItem} ${styles[`item${service.color}`]}`}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    borderColor: service.border,
                                    boxShadow: `0 15px 35px -5px ${service.glow}, 0 0 20px ${service.glow}`,
                                    scale: 1.02
                                }}
                            >
                                {/* Glowing backdrop blur dot */}
                                <div className={styles.glowingDot} style={{ backgroundColor: service.border }}></div>

                                {/* Icon frame */}
                                <div className={styles.iconContainer}>
                                    <i className={`bi ${service.icon}`}></i>
                                </div>

                                {/* Title Header */}
                                <div className={styles.serviceHeader}>
                                    <h3>{service.title}</h3>
                                    <span className={styles.subtitle}>{service.subtitle}</span>
                                </div>

                                {/* Bullet achievements */}
                                <ul className={styles.descriptionList}>
                                    {service.description.map((bullet, idx) => (
                                        <li key={idx}>
                                            <span className={styles.bulletSymbol}>•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Service;
