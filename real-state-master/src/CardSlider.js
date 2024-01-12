// CardSlider.js
import React, { useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import "./CardSlider.css";

const CardSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [paragraphs, setParagraphs] = useState([
    "This is the first paragraph.",
    "This is the second paragraph.",
    "This is the third paragraph.",
    "This is the fourth paragraph.",
    "This is the fifth paragraph.",
    "This is the sixth paragraph.",
  ]);

  const visibleCards = paragraphs.slice(startIndex, startIndex + 3).map((paragraph, index) => (
    <div key={index} className={`card ${Math.abs(index - startIndex) === 1 ? "center" : ""}`}>
      <img src="https://picsum.photos/200/300" alt="Image" />
      <p>{paragraph}</p>
    </div>
  ));

  const handleSlideLeft = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleSlideRight = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, paragraphs.length - 3));
  };

  const handleDotClick = (index) => {
    setStartIndex(index);
  };

  const dots = paragraphs.map((_, index) => (
    <div
      key={index}
      className={`dot ${startIndex === index ? "active" : ""}`}
      onClick={() => handleDotClick(index)}
    />
  ));

  return (
    <div className="wrapper">
      <div className="carousel-container">
        <div className="carousel">
          {visibleCards}
        </div>
        <div className={`arrow arrow-left ${startIndex === 0 ? "invisible" : ""}`} onClick={handleSlideLeft}>
          <BsFillArrowLeftCircleFill />
        </div>
        <div className={`arrow arrow-right ${startIndex === paragraphs.length - 1 ? "invisible" : ""}`} onClick={handleSlideRight}>
          <BsFillArrowRightCircleFill />
        </div>
        <div className="dots">
          {dots}
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
