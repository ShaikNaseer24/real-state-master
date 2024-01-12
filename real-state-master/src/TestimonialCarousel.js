// TestimonialCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './TestimonialCarousel.css';
import img1 from './img1.jpg';
// import { FaStar } from 'react-icons/fa';
import { BiStar } from 'react-icons/bi'

const testimonialData = [
  // Testimonial data as before...

  {
    id: 1,
    name: 'John ',
    title: 'CEO, Company XYZ',
    rating: 5,
    profilePic: img1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet justo eu lacus tristique, vel ullamcorper lorem dictum.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Designer, Creative Studio',
    rating: 4,
    profilePic: img1,
    description:
      'Nulla facilisi. Fusce eu mauris elit. Nullam consectetur nec ipsum non elementum. Vestibulum eu libero eget sapien maximus convallis vel nec massa.',
  },
  
  {
    id: 3,
    name: 'Amith ',
    title: 'CEO, Company XYZ',
    rating: 5,
    profilePic: img1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet justo eu lacus tristique, vel ullamcorper lorem dictum.',
  },
  {
    id: 4,
    name: 'Ratan',
    title: 'Designer, Creative Studio',
    rating: 4,
    profilePic: img1,
    description:
      'Nulla facilisi. Fusce eu mauris elit. Nullam consectetur nec ipsum non elementum. Vestibulum eu libero eget sapien maximus convallis vel nec massa.',
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="carousel-container testimonial-carousel-container">
      <strong className="testim">Testimonial</strong>
      <Carousel
        className="carousel"
        showThumbs={false}
        infiniteLoop={true}
        showArrows={true}
        showIndicators={true}
        renderArrowPrev={(onClickHandler, hasPrev) => (
          <button
            type="button"
            onClick={onClickHandler}
            className={`arrow-button left-arrow ${hasPrev ? 'active' : ''}`}
          >
            ≺
          </button>
        )}
        renderArrowNext={(onClickHandler, hasNext) => (
          <button
            type="button"
            onClick={onClickHandler}
            className={`arrow-button right-arrow ${hasNext ? 'active' : ''}`}
          >
            ≻
          </button>
        )}
      >
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <div className="profile-pic">
              <img src={testimonial.profilePic} alt="Profile" />
            </div>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.title}</p>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <BiStar
                  key={index}
                  className={`star ${testimonial.rating > index ? 'highlighted' : ''}`}
                />
              ))}
            </div>
            <p className="description">{testimonial.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
