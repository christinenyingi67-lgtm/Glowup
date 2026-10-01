import './Skincare.css'
function Skincare(){
    return(
        

        <section className="Prod">
            <h1>Our Beauty Products </h1>
            <p>Discover products to help you take care for your skin hair
        and overall beauty 
            </p>
        
            <section className="Prod-cards">
                <div className='card2'>
                    <h2>Glow face serum</h2>
                    <p>Helps keep your skin hydrated and glowing</p>
                    <p>$15</p>
                    <button>Add to cart</button>
                    </div>
            
                    <div className='card2'>
                    
                      <h2>Radiant lipgloss</h2>
                        <p>Gives your lips smooth and siny finish</p>
                        <p>$10</p>
                        <button>Add to cart</button>
                        </div>
                        
                        <div className='card2'>
                            <h2>Soft body lotion</h2>
                            <p>Keeps your skin soft and moisturized.</p>
                            <p>$12</p>
                            <button>Add to cart</button>
                            </div>
                             <div className='card2'>
                                <h2>Daily sunscreen</h2>
                                <p>Helps protect your skin from UV exposure.</p>
                                <p>$18</p>
                                <button>Add to cart</button>
                                </div>
                        </section>

             </section>
    

    )
}
export default Skincare