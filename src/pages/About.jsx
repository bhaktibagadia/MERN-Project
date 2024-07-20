import '../index.css';

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Join our life-saving mission.</p>
              <h1>Why Choose Us?</h1>
              <p>
                We are dedicated to creating a safe and efficient blood donation platform that connects willing donors with those in need. Our mission is to save lives by ensuring that everyone who requires blood has access to it promptly and safely.
              </p>
              <p>
                Our platform is trusted by thousands of donors and recipients, offering a seamless experience for both parties. By choosing us, you become a part of a compassionate community committed to making a real difference.
              </p>
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
              <img src="/images/about.png" alt="Blood donation" width="600" height="500" />
            </div>
          </div>
        </section>
      </main>
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>100+</h2>
            <p>Hospitals Partnered</p>
          </div>
          <div className="div1">
            <h2>10,000+</h2>
            <p>Registered Donors</p>
          </div>
          <div className="div1">
            <h2>50,000+</h2>
            <p>Units of Blood Donated</p>
          </div>
          <div className="div1">
            <h2>100,000+</h2>
            <p>Lives Saved</p>
          </div>
        </div>
      </section>
    </>
  );
};
