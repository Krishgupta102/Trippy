import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='About'>
      <div className="aboutimg">
        <div className="imgg">
          <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className="txt">
          <h1>About</h1>
        </div>
      </div>

      <div className="details">
        <div className="heading5">
          <h3>Our History</h3>
        </div>
        <div className="paras">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis tempore facilis id quae corporis accusamus qui hic amet excepturi, debitis molestiae vel pariatur, iusto itaque, ut consequatur. Fugit ea praesentium sed fugiat eum. Optio officiis, harum eligendi accusantium illum voluptates minus est. Eius, exercitationem aperiam.
        </div>

        <div className="heading5">
          <h3>Our Mission</h3>
        </div>
        <div className="paras">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis tempore facilis id quae corporis accusamus qui hic amet excepturi, debitis molestiae vel pariatur, iusto itaque, ut consequatur. Fugit ea praesentium sed fugiat eum. Optio officiis.
        </div>

        <div className="heading5">
          <h3>Our Vision</h3>
        </div>
        <div className="paras">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis tempore facilis id quae corporis accusamus qui hic amet excepturi.
        </div>
      </div>
    </div>
  )
}

export default About
