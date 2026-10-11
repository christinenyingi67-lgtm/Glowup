import './About.css'
import image from '../assets/about.jpg'

function About() {
    return (
        <main className="about">

            {/* Hero section */}
            <section className="about-hero">
                <div className="about-intro">
                    <span className="about-tag">WELCOME TO GLOW UP</span>

                    <h1>
                        Beauty begins with
                        <span> feeling like you.</span>
                    </h1>

                    <p>
                        Glow Up is a beauty and self-care platform
                        created to help you discover products and
                        simple routines that fit into your everyday life.
                    </p>

                    <a href="#our-mission" className="about-button">
                        Discover Our Story
                    </a>
                </div>

                <div className="about-image">
                    <img src={image} alt="Glow Up beauty and self-care" />
                    <div className="image-caption">
                        <span>YOUR BEAUTY, YOUR WAY</span>
                        <p>Glow with confidence.</p>
                    </div>
                </div>
            </section>

            {/* Mission section */}
            <section className="mission" id="our-mission">
                <span className="section-tag">WHAT WE BELIEVE</span>
                <h2>Our Mission</h2>

                <p>
                    Our mission is to make beauty and self-care
                    simple, enjoyable and accessible. We believe
                    everyone deserves to feel confident and
                    comfortable in their own skin.
                </p>
            </section>

            {/* What we offer */}
            <section className="offer">
                <div className="offer-heading">
                    <span className="section-tag">A LITTLE SELF-LOVE</span>
                    <h2>What We Offer</h2>
                    <p>
                        Everything you need to make your everyday
                        beauty routine feel special.
                    </p>
                </div>

                <div className="glowup">

                    <article className="glow">
                        <span className="category-number">01</span>
                        <h3>Skincare</h3>
                        <p>
                            Discover products that help you care
                            for healthy, hydrated and glowing skin.
                        </p>
                    </article>

                    <article className="glow">
                        <span className="category-number">02</span>
                        <h3>Makeup</h3>
                        <p>
                            Explore beauty products that let you
                            express your personal style.
                        </p>
                    </article>

                    <article className="glow">
                        <span className="category-number">03</span>
                        <h3>Haircare</h3>
                        <p>
                            Find ways to care for and maintain
                            beautiful, healthy-looking hair.
                        </p>
                    </article>

                    <article className="glow">
                        <span className="category-number">04</span>
                        <h3>Self-Care</h3>
                        <p>
                            Discover easy beauty routines that
                            encourage you to make time for yourself.
                        </p>
                    </article>

                </div>
            </section>

            {/* Why choose Glow Up */}
            <section className="why-glow">
                <span className="section-tag">MORE THAN BEAUTY</span>
                <h2>Why Glow Up?</h2>

                <p>
                    Glow Up is more than just beauty products.
                    It is a place to learn, discover new routines
                    and find inspiration to make self-care part
                    of your everyday life.
                </p>

                <div className="closing-line">
                    Feel good. Care for yourself. Glow confidently.
                </div>
            </section>

        </main>
    )
}

export default About;