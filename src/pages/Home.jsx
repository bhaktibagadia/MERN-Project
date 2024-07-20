import '../index.css';

export const Home =()=>{
    return <>
    <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <p>Join our community of lifesavers and make a difference today.</p>
                    <h1>Donate Blood, Save Lives</h1>
                    <p>Your blood donation can save up to three lives. Join us in our mission to provide safe and sufficient blood supplies to those in need. Every drop counts, and together, we can make a significant impact on countless lives.</p>
                    <div className="btn btn-group">
                        <a href="/contact">
                        <button className="btn">Connect Now</button>
                        </a>
                        <a href="/services">
                        <button className="btn secondary-btn">Learn More</button>
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/images/home.png" alt="Blood Donation" width="400" height="500"/>
                </div>
            </div>
        </section>
    </main>

    <section className='section-analytics'>
        <div className="container grid grid-four-cols">
            <div className="div1">
                <h2>50+</h2>
                <p>Registered Hospitals</p>
            </div>
            <div className="div1">
                <h2>10,000+</h2>
                <p>Happy Donors</p>
            </div>
            <div className="div1">
                <h2>15,000+</h2>
                <p>Lives Saved</p>
            </div>
            <div className="div1">
                <h2>5,000+</h2>
                <p>Volunteers</p>
            </div>
        </div>
    </section>

    <section className="section-hero">
            <div className="container grid grid-two-cols">
            <div className="hero-image">
                    <img src="/images/home2.png" alt="Blood Donation Drive" width="700" height="500"/>
                </div>
                <div className="hero-content">
                    <p>Be a hero today, donate blood and save lives.</p>
                    <h1>Your Donation Matters</h1>
                    <p>By registering on our platform, you become part of a noble cause. After logging in, you can confirm your willingness to donate blood through a simple form. Our dedicated team will contact you whenever there is a need for your blood type, ensuring timely help for those in critical need.</p>
                    <div className="btn btn-group">
                        <a href="/contact">
                        <button className="btn">Connect Now</button>
                        </a>
                        <a href="/services">
                        <button className="btn secondary-btn">Learn More</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </> 
};
