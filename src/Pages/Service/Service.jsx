import React from 'react'

const Service = () => {
  return (
    <div className='service'>

      <div className="aboutimg">
        <div className="imgg">
          <img src="https://www.rainbowworldtours.com/uploads/tour/home_slider_03_14824798020.jpg" alt="" />
        </div>
        <div className="txts">
          <h1>Service</h1>
        </div>
      </div>

      <div className="Trips">
        <div className="heading1">
          <h2>Recent Trips</h2>
          <p>You can discover unique destinations using Google Maps</p>
        </div>

        <div className="Cards">
          <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <img src="https://www.cuddlynest.com/blog/wp-content/uploads/2023/01/best_beaches_in_los_angeles_featured_image.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h4>Trip in America</h4>
              <p className="card-text">The United States of America (USA or U.S.A.), commonly known as the United States (US or U.S.) or America, is a country primarily located in North America.</p>
            </div>
          </div>

          <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <img src="https://assets.vogue.com/photos/6603d64d13a27b5703522946/master/w_1920,c_limit/509288876" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h4>Trip in Spain</h4>
              <p className="card-text">Spain is a country located in Southern Europe, with parts of its territory in the Atlantic Ocean, the Mediterranean Sea and Africa.It is the largest country in Southern Europe and the fourth-most populous Europe.</p>
            </div>
          </div>

          <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <img src="https://www.state.gov/wp-content/uploads/2023/07/shutterstock_590390942v2-768x512.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h4>Trip in Australia</h4>
              <p className="card-text">Australia, is a country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. Australia is the largest country by area in Oceania and the world's sixth-largest country.</p>
            </div>
          </div>

        </div>
      </div> 
    </div>
  )
}

export default Service
