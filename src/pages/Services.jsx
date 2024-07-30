export const Services = () => {
    return (
        <section className="services-page">
            <h1>Our Services</h1>
            <div className="intro">
                <p>
                    We are dedicated to making blood donation easy and accessible for everyone.
                    Our services are designed to ensure that donors and recipients are well cared for,
                    and our facilities are equipped to handle all the needs of our community. Explore our
                    services to see how we can assist you.
                </p>
            </div>
            <div className="service-list">
                <div className="service-item">
                    <h2>Blood Donation Drives</h2>
                    <p>
                        Join our regular blood donation drives organized across various locations. Your donation
                        can save lives and help those in need.
                    </p>
                    <img src="/images/blood-drive.jpg" alt="Blood Donation Drives" />
                </div>
                <div className="service-item">
                    <h2>Emergency Blood Services</h2>
                    <p>
                        We offer emergency blood services to hospitals and clinics. Our team ensures that blood is
                        available promptly when it’s needed the most.
                    </p>
                    <img src="/images/emergency-services.jpg" alt="Emergency Blood Services" />
                </div>
                <div className="service-item">
                    <h2>Donor Registration</h2>
                    <p>
                        Register as a donor with us and stay updated about upcoming donation drives, health
                        tips, and more. Your involvement can make a huge difference.
                    </p>
                    <img src="/images/donor-registration.jpg" alt="Donor Registration" />
                </div>
                <div className="service-item">
                    <h2>Health Checkups</h2>
                    <p>
                        We provide complimentary health checkups for our blood donors to ensure their well-being
                        and to prepare them for future donations.
                    </p>
                    <img src="/images/health-checkup.jpg" alt="Health Checkups" />
                </div>
                <div className="service-item">
                    <h2>Awareness Programs</h2>
                    <p>
                        Participate in our awareness programs to learn more about the importance of blood donation
                        and how you can contribute to saving lives.
                    </p>
                    <img src="/images/awareness-program.jpg" alt="Awareness Programs" />
                </div>
                <div className="service-item">
                    <h2>Volunteer Opportunities</h2>
                    <p>
                        Join our team of volunteers and help organize and run blood donation drives and awareness
                        campaigns in your community.
                    </p>
                    <img src="/images/volunteer.jpg" alt="Volunteer Opportunities" />
                </div>
            </div>
        </section>
    );
};
