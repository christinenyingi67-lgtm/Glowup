import './HairCare.css';

function HairCare() {
return (
<main className="Hair">
<section className="hair-hero">
<span className="hair-label">YOUR CROWN DESERVES CARE</span>

    <h1>Love Your Hair</h1>

    <p className="hair-tagline">
      Love your hair, own your glow.
    </p>

    <p className="hair-intro">
      Discover the beauty of healthy, nourished hair.
      Find the care your crown deserves and let your
      natural beauty shine.
    </p>

    <a href="#haircare-collection" className="hair-button">
      Explore Haircare
    </a>
  </section>

  <section
    className="hair-collection"
    id="haircare-collection"
  >
    <div className="hair-heading">
      <span>THE GLOW UP COLLECTION</span>
      <h2>Your Hair, Your Beauty</h2>
      <p>
        Everything your hair needs to look and feel its best.
      </p>
    </div>

    <div className="Container">
      <article className="card3 shampoo">
        <div className="overlay">
          <span className="hair-number">01</span>
          <h3>Shampoo</h3>
          <p>Cleanse your hair and refresh your scalp.</p>
        </div>
      </article>

      <article className="card3 conditioner">
        <div className="overlay">
          <span className="hair-number">02</span>
          <h3>Conditioner</h3>
          <p>Soften your strands and improve manageability.</p>
        </div>
      </article>

      <article className="card3 hair-oils">
        <div className="overlay">
          <span className="hair-number">03</span>
          <h3>Hair Oils</h3>
          <p>Nourish your hair and give it a healthy shine.</p>
        </div>
      </article>

      <article className="card3 hair-masks">
        <div className="overlay">
          <span className="hair-number">04</span>
          <h3>Hair Masks</h3>
          <p>Give dry hair extra moisture and conditioning.</p>
        </div>
      </article>

      <article className="card3 scalp-care">
        <div className="overlay">
          <span className="hair-number">05</span>
          <h3>Scalp Care</h3>
          <p>Care for your scalp and keep it feeling fresh.</p>
        </div>
      </article>

      <article className="card3 styling">
        <div className="overlay">
          <span className="hair-number">06</span>
          <h3>Styling Products</h3>
          <p>Style your hair while caring for your strands.</p>
        </div>
      </article>
    </div>
  </section>

  <section className="hair-ending">
    <p>YOUR BEAUTY, YOUR WAY</p>
    <h2>Healthy Hair. Confident You.</h2>
    <span>Glow from root to tip. 💗</span>
  </section>
</main>

);
}

export default HairCare;