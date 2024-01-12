import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ing1 from './nimg/ing1.jpeg'
import ing2 from './nimg/ing2.jpg'
import nimg5 from './nimg/nimg5.jpg'
import nimg6 from './nimg/nimg6.jpg'
import './Carosal.css'


const imageUrls = [ing1,ing2,nimg5,nimg6,];

function CarsoleOne() {
  return (
    <div className="curosel">
      <Carousel
        autoPlay={true}
        interval={2000}
        stopOnHover={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        showIndicators={false}
        showArrows={false} // This line will hide the arrow buttons
       
       
      >
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slide ${index}`} />
            
          </div>
        ))}
      </Carousel>

        </div>
      )
    }
    
   
export default CarsoleOne