import React from 'react'
import b3 from './reimg/b3.jpg'
import re2 from './reimg/re2.jpg'
import nimg7 from './nimg/nimg7.jpg'
import banner1 from './reimg/banner1.jpg'
import nimg5 from './nimg/nimg5.jpg'
import nimg6 from './nimg/nimg6.jpg'
import './About.css'
import g1 from './reimg/g1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';




function Aboutus() {
  return (
    
    <div className='aboutus'>
      <div className='top1'>          

<h1> About US </h1>
</div>
<div className='imagess'>
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>WELCOME TO OUR COMPANY</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nimg7}
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nimg6}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>


{/* <a href="/#"><button className='b2'><h1> DISCOVER YOUR THINGS </h1></button></a> */}

{/* <div className='img1'>
  <img src={banner1} alt='top'></img>
  <div class="img1text">
      <h1>ABOUT US </h1>
      
    </div>
</div> */}


<div className='alltext'>

<div class="aboutuscvv">
    <img src={g1} alt='re1'></img>
    <br />
    Company Overview: 
 The page should start with a concise and engaging introduction to the real estate company. 
   It can include information about the company's history, mission, vision, values,
and the areas it operates in. 
The page should start with a concise and engaging introduction to the real estate company. 
   It can include information about the company's history, mission, vision, values,
and the areas it operates in. 
The page should start with a concise and engaging introduction to the real estate company. 
   It can include information about the company's history, mission, vision, values,
and the areas it operates in. 
The page should start with a concise and engaging introduction to the real estate company. 
   It can include information about the company's history, mission, vision, values,
and the areas it operates in.   
</div>




<div className="txt1">
<img  src={b3} alt='night' ></img>

<h3>Mission and Vision: </h3>  
<p> Clearly state the company's mission and vision. Explain the purpose of the company, its long-term goals, and how it aims to make a positive impact in the real estate industry. </p>
<h3> Company History:</h3>

<p>  Provide a brief overview of the company's history. 
Share when and how the company was founded, key milestones, 
and any significant achievements. </p>
<h3> Core Values:  </h3>

<p>  List the core values that drive the company's operations.
 Values like integrity, transparency, customer-centricity,
  and professionalism are common in the real estate industry. </p>
  </div>
</div>
<div>

</div>

<div className='cont'>
  <div className='ct'>
  <h1>Do You Have Questions ?</h1>
We'll help you to grow your career and growth.
  </div>
<div className='cb'>
  <a href='/#'>   <h2> contact us today </h2>       </a>

  </div>

</div>
    </div>
  )
}

export default Aboutus