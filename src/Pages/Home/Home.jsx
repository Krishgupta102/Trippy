import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='body'>
      <div className="text-img">
        <div className="image">
          <img src="https://www.rainbowworldtours.com/uploads/tour/home_slider_03_14824798020.jpg" alt="" />
        </div>
        
        <div className="text">
          <h3>Your Journey Your Story</h3>
          <p><b>Choose your favourite destination</b></p>
          <button type="button" className="btn btn-light">Travel Plan</button>
        </div>
      </div>

      <div className="destination">
        <div className="heading1">
          <h2>Popular Destinations</h2>
          <p>Tours give you the oppurtunity to see a lot, within a time frame</p>
        </div>

        <div className="destination1">
          <div className="heading2">
            <h4>Taal Volcano, Batangas</h4>
            <p>Taal Volcano is part of a chain of volcanoes lining the western edge of the island of Luzon. They were formed by the subduction of the Eurasian Plate underneath the Philippine Mobile Belt. Taal Lake lies within a 25–30 km  caldera formed by explosive eruptions between 140,000 and 5,380 BP. Each of these eruptions created extensive ignimbrite deposits reaching as far away as present-day Manila
            Taal Volcano and Lake are entirely located in the province of Batangas.
            </p>
          </div>

          <div className="images">
            <div className="images1">
              <div className="image1">
                <img src="https://cdn.getyourguide.com/img/tour/62ecc8c87320d.jpeg/132.webp" alt="" />
              </div>
              <div className="image2">
                <img src="https://cdn.getyourguide.com/img/tour/5c6fc0ac2ac5e.jpeg/132.webp" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="destination1">
          <div className="images">
            <div className="images1">
              <div className="image1">
                <img src="https://i0.wp.com/tokyotreatblog.wpcomstaging.com/wp-content/uploads/2024/02/mt-fuji-japan-thumbnail.webp?fit=1024%2C683&ssl=1" alt="" />
              </div>
              <div className="image2">
                <img src="https://png.pngtree.com/background/20230512/original/pngtree-mount-fuji-with-a-red-sunset-along-a-lake-picture-image_2503541.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="heading3">
            <h4>Mount Fuji, Japan</h4>
            <p>Mount Fuji 富士山, Fujisan, Japanese: is an active stratovolcano located on the Japanese island of Honshu, with a summit elevation of 3,776.24 m 12,389 ft 3 in. It is the tallest mountain in Japan, the second-highest volcano located on an island in Asia after Mount Kerinci on the Indonesian island of Sumatra, and seventh-highest peak of an island on Earth. Mount Fuji last erupted from 1707 to 1708. The mountain is located about 100 km southwest of Tokyo and is visible from the Japanese capital on clear days. Mount Fuji's exceptionally symmetrical cone, which is covered in snow for about five months of the year.
            </p>
          </div>

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

export default Home
