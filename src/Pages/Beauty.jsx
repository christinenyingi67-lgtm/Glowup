import "./Beauty.css";

function Beauty() {
  return (
    <div className="beauty-page">
      <section className="beauty-hero">
        <p className="beauty-label">GLOW UP BEAUTY</p>

        <h1>Discover Your Beauty</h1>

        <p>
          Enhance your natural beauty with products
          that help you glow with confidence.
        </p>

        <button>Explore Beauty</button>
      </section>

      <section className="beauty-products">
        <h2>Our Beauty Collection</h2>

        <div className="beauty-list">
          <div className="beauty-item">
            <h3>Skincare</h3>
            <p>Nourish your skin and reveal your glow.</p>
          </div>

          <div className="beauty-item">
            <h3>Serums</h3>
            <p>Give your skin extra care and hydration.</p>
          </div>

          <div className="beauty-item">
            <h3>Moisturizers</h3>
            <p>Keep your skin soft and moisturized.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Beauty;