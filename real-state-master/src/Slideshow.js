import React, { useEffect, useState } from 'react';
import img1 from './img1.jpg'
const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    showSlides();
  }, []);

  function showSlides() {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex > slides.length) {
        newIndex = 1;
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
      }

      slides[newIndex - 1].style.display = 'block';
      dots[newIndex - 1].classList.add('active');
      return newIndex;
    });

    setTimeout(showSlides, 5000);
  }

  const slideshowContainerStyle = {
    maxWidth: '700px',
    margin: 'auto',
    position: 'relative',
  };

  const mySlidesStyle = {
    display: 'none',
  };

  const textStyle = {
    position: 'absolute',
    bottom: '8px',
    textAlign: 'center',
    color: '#f2f2f2',
    width: '100%',
    fontSize: '20px',
    padding: '8px 12px',
    backgroundColor: 'rgba(0,0,0,0.6)',
  };

  const numbertextStyle = {
    position: 'absolute',
    top: '0',
    fontSize: '12px',
    padding: '8px 12px',
    color: 'white',
  };

  const dotStyle = {
    display: 'inline-block',
    height: '15px',
    width: '15px',
    borderRadius: '50%',
    backgroundColor: '#bbb',
    margin: '0 10px',
    transition: 'background-color 0.6s ease',
  };

  const activeDotStyle = {
    backgroundColor: '#717171',
  };

  const fadeStyle = {
    animationName: 'fade',
    animationDuration: '1.5s',
  };

  const imgStyle = {
    width: '100%',
  };

  return (
    <div style={slideshowContainerStyle}>
      <div className="mySlides fade" style={mySlidesStyle}>
        <div className="numbertext" style={numbertextStyle}>
          1/3
        </div>
        <img
          src={img1}
          style={imgStyle}
        />
        <div className="text" style={textStyle}>
          Morrico palazzo
        </div>
      </div>
      <div className="mySlides fade" style={mySlidesStyle}>
        <div className="numbertext" style={numbertextStyle}>
          2/3
        </div>
        <img
          src={img1}
          style={imgStyle}
        />
        <div className="caption text" style={textStyle}>
          Tuchila palazzo
        </div>
      </div>
      <div className="mySlides fade" style={mySlidesStyle}>
        <div className="numbertext" style={numbertextStyle}>
          3/3
        </div>
        <img
          src={img1}
          style={imgStyle}
        />
        <div className="caption text" style={textStyle}>
          Bauer palazzo
        </div>
      </div>

      <br />
      <div style={{ textAlign: 'center' }}>
        <span className="dot" style={{ ...dotStyle, ...activeDotStyle }}></span>
        <span className="dot" style={dotStyle}></span>
        <span className="dot" style={dotStyle}></span>
      </div>
    </div>
  );
};

export default Slideshow;