import './Contact.css';
function Contact(){
  return(
    <>
        <div>
          <div className="contact-form" id="contact">
            <h2>Contact Me</h2>
            <p>Please Fill This From</p>
            <form action="#">
              <div>
                <label htmlFor="firstName">Full Name</label>
                <div className="names">
                  <input type="text" name="firstName" id="firstName" placeholder='First Name' required />
                  <input type="text" name="lastName" id="lastName" placeholder='lastName' />
                </div>
              </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='anonymous@email.com' required />
            </div>       
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" required></textarea>
            </div>     
            <button type="submit">Submit</button>
            </form>
          </div>
        </div>
    </>
  );
}
export default Contact