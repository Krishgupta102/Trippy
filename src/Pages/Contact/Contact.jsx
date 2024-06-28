import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="aboutimg">
        <div className="imgg">
          <img src="https://c1.wallpaperflare.com/preview/988/16/35/sunset-kerala-aleppay-boat.jpg" alt="" />
        </div>
        <div className="txts">
          <h1>Contact</h1>
        </div>
      </div>
      
      <div className="contactform">
        <div className="container">
          <h2>Connect With Us</h2>
        <div className="contact-box">
          <div className="contact-left">
            <h4>Send Your Request</h4>

            <form action="">
              <div className="input-row">
                <div className="input-group">
                  <label >Name</label>
                  <input type="text" placeholder='John Gupta'/>
                </div>
                <div className="input-group">
                  <label >Phone</label>
                  <input type="text" placeholder='91 9414232323'/>
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label >Email</label>
                  <input type="email" placeholder='JohnGupta1@gmail.com'/>
                </div>
                <div className="input-group">
                  <label >Subject</label>
                  <input type="text" placeholder='Project Demo'/>
                </div>
              </div>

              <label>Message</label>
              <textarea rows={3} placeholder='Your Message'></textarea>

              <button type="button" class="btn btn-primary">Submit</button>
            </form>
          </div>

          <div className="contact-right">
           <h4>Reach Us</h4>

           <table>
            <tr>
              <td>Email</td>
              <td>contactus@example.com</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>91 9414232323</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>#212, Ground floor, 7th cross Street, New York City</td>
            </tr>
           </table>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
