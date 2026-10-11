import './Skincare.css'

function Skincare() {
    return (
        <section className="Prod">

            <h1>Our Beauty Products</h1>

            <p className="Prod-intro">
                Discover products to help you care for
                your skin, hair, and overall beauty.
            </p>

            <section className="Prod-cards">

                <div className="card2">
                    <h2>Glow Face Serum</h2>
                    <p>Helps keep your skin hydrated and glowing.</p>
                    <p className="price">$15</p>
                    <button>Add to Cart</button>
                </div>

                <div className="card2">
                    <h2>Radiant Lip Gloss</h2>
                    <p>Gives your lips a smooth and shiny finish.</p>
                    <p className="price">$10</p>
                    <button>Add to Cart</button>
                </div>

                <div className="card2">
                    <h2>Soft Body Lotion</h2>
                    <p>Keeps your skin soft and moisturized.</p>
                    <p className="price">$12</p>
                    <button>Add to Cart</button>
                </div>

                <div className="card2">
                    <h2>Daily Sunscreen</h2>
                    <p>Helps protect your skin from UV exposure.</p>
                    <p className="price">$18</p>
                    <button>Add to Cart</button>
                </div>

            </section>
        </section>
    )
}

export default Skincare