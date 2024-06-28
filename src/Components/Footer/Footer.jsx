import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="upperfoot">
        <div className="heading5">
            <h2>Trippy</h2>
            <p>Choose your favourite destination.</p>
        </div>
        <div className="icons">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-threads-fill"></i>
            <i class="bi bi-youtube"></i>
        </div>
      </div>

      <div className="lowerfoot">
        <div className="elements">
            <div className="element">
                <h4>Project</h4>
                <p>Changelog</p>
                <p>Status</p>
                <p>License</p>
                <p>All versions</p>
            </div>

            <div className="element">
                <h4>Community</h4>
                <p>Github</p>
                <p>Twitter</p>
                <p>Issues</p>
                <p>Instagram</p>
            </div>

            <div className="element">
                <h4>Help</h4>
                <p>Support</p>
                <p>Troubleshooting</p>
                <p>Contact Us</p>
            </div>

            <div className="element">
                <h4>Others</h4>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>License</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
