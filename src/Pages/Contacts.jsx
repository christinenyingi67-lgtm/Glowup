import'./Contacts.css'
function Contacts(){
    return(
        <header>
    <section className="contacts">
        <h1>Contact Us</h1>
        <p>Have a question or need help?
            get in touch with glowup
        </p>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text"id="Name"placeholder="Enter your name"></input>
            <label htmlFor="email" >Email</label>
            <input type="text"id="Email"placeholder="Enter your Email"></input>
            <label htmlFor="message">Message</label>
            <input type="text"id="Message"placeholder="write your message"></input>
            <button type="submit">send message</button>
        </form>
    </section>

    </header>
    )
}
export default Contacts
