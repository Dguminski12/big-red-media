import "../assets/styles/home.css"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-page">
            <div className="hero-section">
                <h1>Creative media & design that makes brands stand out.</h1>
                <h2>Affordable design solutions: logos, photo editing, social content, and event banners that connect with your audience.</h2>
                <p>See my <Link to="/Portfolio">work</Link>, or get in touch <Link to="/Contact">now!</Link></p>
                <section>
                    <h2> About Me </h2>
                    <p>Hi, I’m Matthew — I love turning ideas into visuals that shine. Whether it’s designing a new logo, editing photos, or producing social posts and event banners, I help businesses build a strong presence online and offline. I focus on quick turnaround, affordable rates, and designs that fit your unique brand style.</p>
                </section>
            </div>
            <div className="project-overview">
                <h2> Featured Projects </h2>
                <div className="project-cards-row">
                    <div className="project-card">
                        <img alt="Project 1" />
                        <p>Project 1</p>
                    </div>
                    <div className="project-card">
                        <img alt="Project 2" />
                        <p>Project 2</p>
                    </div>
                    <div className="project-card">
                        <img alt="Project 3" />
                        <p>Project 3</p>
                    </div>
                </div>
            </div>
            <div className="services-overview">
                <h2>Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <img src="/service-logo.png" alt="Logo Design Example" className="service-img" />
                        <div>
                            <h3>Logo Design</h3>
                            <p>Custom, memorable logos tailored to your brand’s personality and goals.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <img src="/service-photo.png" alt="Photo Editing Example" className="service-img" />
                        <div>
                            <h3>Photo Editing</h3>
                            <p>Professional retouching and enhancement to make your images stand out.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <img src="/service-social.png" alt="Social Media Content Example" className="service-img" />
                        <div>
                            <h3>Social Media Content</h3>
                            <p>Eye-catching graphics and posts designed for engagement and brand consistency.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <img src="/service-event.png" alt="Event Media Example" className="service-img" />
                        <div>
                            <h3>Event Media (Banners, Ads)</h3>
                            <p>Bold banners and ads for events, promotions, and campaigns.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}