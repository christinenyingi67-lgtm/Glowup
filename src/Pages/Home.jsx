import './Home.css'
import image from '../assets/imgb.jpg'


function Home(){
    return(
    <>
    <div className="Home">
        <section className="hero">
            <div>
            <h1>Welcome to glow up</h1>
            <h2>Discover your glow</h2>
            <p>Your beauty journey starts here,Discover beauty essentials,Beauty products and<br />
                simple routines designed to take care of yourself,biuld confidence and bring out<br /> 
                your natural glow.whether your starting an new routine or looking for something <br />
                new to try.we're here to make yor glow-up journey simple,enjoyable and inspiring
            </p>
            <button style={{backgroundColor:"brown", color:"white", marginTop:"20px", padding:"10px 40px", borderRadius:"20px"}}>Explore now</button>
            </div>
            <div>
                <img style={{width:"340px", height:'390px', borderRadius:"30px"}} src={image} alt='image here' />
            </div>
              </section>
              <section className="Special-offer">
                <h2>Glow more, spend less!</h2>
                <p>Enjoy 20% OFF selected beauty essentials.</p>
          <button style={{backgroundColor:"brown", color:"white", marginTop:"20px", padding:"10px 40px", borderRadius:"25px"}}>Shop Now</button>
              </section>
         <section className="Categories">
            <h2>Explore our beauty world</h2>
            
            <div className="category">
                <div>
                <h3>Skincare</h3>
                <p>Care for your skin and keep it glowing</p>
            </div>
            <div>
                <h3>Haircare</h3>
                <p>Give your hair the care it deserves</p>
            </div>
            <div>
                <h3>Makeup</h3>
                <p>Express your beauty and personal style</p>
            </div>
        <div>
            <h3>Bodycare</h3>
            <p>Keep your skin soft,fresh,and nourished</p>
        </div>
        </div>
         </section>
         <section className="Glow-message">
            <h2>Beauty starts with you</h2>
            <p>Take time for yourself,discover what works for you
                and let your natural beauty shine.
            </p>
    
         </section>
         </div>
    
    </>
        
        
    )
}
export default Home