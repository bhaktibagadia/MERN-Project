import '../index.css';

export const About =()=>{
    return <>
    <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h1>Why Choose Us?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis iure similique, inventore enim aliquid quis autem nesciunt aliquam non necessitatibus aperiam cupiditate eveniet ab iste quas ex. Veniam ipsa aspernatur sit quod saepe reiciendis ipsam odit nam laudantium optio.</p>
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
                    <img src="/images/home.jpg" alt="" width="400" height="500"/>
                </div>
            </div>
        </section>
    </main>
    <section className='section-analytics'>
        <div className="container grid grid-four-cols">
            <div className="div1">
                <h2>50+</h2>
                <p>Registered Companies</p>
            </div>
            <div className="div1">
                <h2>10000+</h2>
                <p>Happy Clients</p>
            </div>
            <div className="div1">
                <h2>10000+</h2>
                <p>Happy Clients</p>
            </div>
            <div className="div1">
                <h2>10000+</h2>
                <p>Happy Clients</p>
            </div>
        </div>
    </section>
    </>
}