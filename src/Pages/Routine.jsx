import './Routine.css'

function Routine() {
return (
<section className="routine">

        <div className="steps">
            <h1>GlowUp Routine</h1>

            <p>
                Simple steps, beautiful skin.
                Follow our daily skincare routine
                to keep your skin fresh, healthy and glowing.
            </p>
        </div>

        <div className="cards">

            <div className="card1">
                <span>01</span>
                <h3>Cleanse</h3>
                <p>
                    Start by gently cleansing your face to remove
                    dirt, oil, makeup and impurities. Cleansing
                    helps keep your pores clean and leaves your
                    skin feeling fresh and comfortable.
                </p>
            </div>

            <div className="card1">
                <span>02</span>
                <h3>Serum</h3>
                <p>
                    Apply a serum suited to your skin's needs.
                    Depending on its ingredients, it can help
                    hydrate, brighten and improve the appearance
                    of uneven skin tone.
                </p>
            </div>

            <div className="card1">
                <span>03</span>
                <h3>Moisturize</h3>
                <p>
                    Apply moisturizer to keep your skin soft
                    and hydrated. It helps reduce moisture loss,
                    supports the skin barrier and leaves your
                    skin feeling smooth and comfortable.
                </p>
            </div>

            <div className="card1">
                <span>04</span>
                <h3>Sunscreen</h3>
                <p>
                    Finish your morning routine with broad-spectrum
                    SPF 30 or higher sunscreen. It helps protect
                    your skin from harmful UV rays and reduces
                    the risk of sunburn and premature aging.
                </p>
            </div>

        </div>

    </section>
)

}

export default Routine