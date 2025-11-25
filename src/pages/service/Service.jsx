import React from 'react';
import styles from './service.module.scss';

const Service = () => {
    const services = [
        {
            color: 'Cyan',
            icon: 'bi-activity',
            title: 'Complaint Service Management System with Admin Panel',
            description: `◦Developed a role-based Complaint Management System for Super Admin, State Head, and Dealer with well-defined access levels.
◦Implemented pagination, filters, and GPS tracking with distance calculation using latitude and longitude.
◦Integrated live map for real-time dealer tracking, auto-refreshing every 40 seconds during active site visits.
◦Built dynamic dashboards with Excel and PDF export options for audits and data analysis.
◦Enhanced decision-making through automated data sync and real-time monitoring capabilities.`,
            path: 'M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174'
        }
        ,
        {
            color: 'Orange',
            icon: 'bi-globe',
            title: 'ERP System for Textile Manufacturing',
            description: `◦Built an ERP solution for the textile industry to streamline procurement, inventory, and dispatch operations.
◦Developed scalable modules for sales, purchase, production planning, and financial performance tracking.
◦Enabled real-time tracking of fabric rolls throughout printing, stitching, warehousing, and logistics processes.
◦Delivered downloadable PDF and Excel reports to support audits, compliance, and strategic decision-making.`,
            path: 'M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426'
        },
        {
            color: 'Red',
            icon: 'bi-cart',
            title: 'HR Application Integrated with CRM Portal',
            description: `◦Developed a responsive HR portal using React JS with seamless cross-device compatibility.
◦Configured real-time notifications and integrated Google Charts for interactive analytics and reporting.
◦Implemented role-based workflow approvals (L1, L2, Treasury) with audit logs for transparency and compliance.`,
            path: 'M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813'
        },
        {
            color: 'Indigo',
            icon: 'bi-cloud',
            title: 'Hospitality Voucher Management System (HVMS)',
            description: `◦Developed a modern cost-tracking system with JWT-based multi-role authentication for secure access management.
◦Integrated RESTful APIs for real-time data fetching, improved accessibility, and enhanced data confidentiality.
◦Improved financial workflows by generating PDFs and displaying dynamic product data for better usability.
◦Implemented optimized pagination and search features to enhance overall user experience and performance.`,
            path: 'M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572'
        } ,


    ];

    return (
        <section id="services" className={styles.services}>
            <div className="container section-title" data-aos="fade-up">
                <h2>Services</h2>
                <p>Delivering High-Quality Solutions with Expert Services</p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    {services.map((service, index) => (
                        <div
                            className="col-lg-4 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                            key={index}
                        >
                            <div className={`${styles.serviceItem} ${styles[`item${service.color}`]}`}>
                                <div className={styles.icon}>
                                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" strokeWidth="0" fill="#f5f5f5" d={service.path}></path>
                                    </svg>
                                    <i className={`bi ${service.icon}`}></i>
                                </div>
                                <a href="#" className="stretched-link">
                                    <h3>{service.title}</h3>
                                </a>
                                <p style={{textAlign:"justify"}}>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
