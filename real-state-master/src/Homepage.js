import "@fortawesome/fontawesome-free/css/all.min.css";

import "./css/bootstrap.css";
import "./css/slick.css";
import "./css/nouislider.css";
import "./css/jquery.fancybox.css";
import "./css/theme-color/default-theme.css";
import "./css/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import CardSlider from "./CardSlider";
import TestimonialCarousel from "./TestimonialCarousel";
import img1 from "./img1.jpg";
import about from "./about.jpg";
import imgp1 from "./imgp1.jpg";
import imgp2 from "./imgp2.jpg";
import imgp3 from "./imgp3.jpg";
import imgp4 from "./imgp4.jpg";
import imgp5 from "./imgp5.jpg";
import imgp6 from "./imgp6.jpg";
import imgl1 from "./imgl1.jpg";
import imgl2 from "./imgl2.jpg";
import imgl3 from "./imgl3.jpg";
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
import CarsoleOne from "./Carosal";
import "./style.css";

export default function Homepage() {
  return (
    <div>
      <section id="aa-slider">
        <div class="aa-slider-area">
          <div>
            <CarsoleOne></CarsoleOne>
            <div class="aa-top-slider-content">
              <span class="aa-top-slider-catg">Duplex</span>
              <h2 class="aa-top-slider-title">1560 Square Feet</h2>
              <p class="aa-top-slider-location">
                <i class="fa fa-map-marker"></i>South Beach, Miami (IND)
              </p>
              <span class="aa-top-slider-off">30% OFF</span>
              <p class="aa-top-slider-price">₹160,000</p>
            </div>
          </div>
        </div>
      </section>

      <section id="aa-advance-search">
        <div class="container">
          <div class="aa-advance-search-area">
            <div class="form">
              <div class="aa-advance-search-top">
                <div class="row">
                  <div class="col-md-4">
                    <div class="aa-single-advance-search">
                      <input type="text" placeholder="Type Your Location" />
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="aa-single-advance-search">
                      <select>
                        <option value="0" selected>
                          Category
                        </option>
                        <option value="1">Flat</option>
                        <option value="2">Land</option>
                        <option value="3">Plot</option>
                        <option value="4">Commercial</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="aa-single-advance-search">
                      <select>
                        <option value="0" selected>
                          Type
                        </option>
                        <option value="1">Flat</option>
                        <option value="2">Land</option>
                        <option value="3">Plot</option>
                        <option value="4">Commercial</option>
                      </select>
                    </div>
                  </div>
                  {/* <div class="col-md-2">
                    <div class="aa-single-advance-search">
                      <select>
                        <option value="0" selected>
                          Type
                        </option>
                        <option value="1">Flat</option>
                        <option value="2">Land</option>
                        <option value="3">Plot</option>
                        <option value="4">Commercial</option>
                      </select>
                    </div>
                  </div> */}
                  <div class="col-md-2">
                    <div class="aa-single-advance-search">
                      <input
                        class="aa-search-btn"
                        type="submit"
                        value="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="aa-advance-search-bottom">
               <div class="row">
                <div class="col-md-6">
                  <div class="aa-single-filter-search">
                    <span>AREA (SQ)</span>
                    <span>FROM</span>
                    <span id="skip-value-lower" class="example-val">30.00</span>
                    <span>TO</span>
                    <span id="skip-value-upper" class="example-val">100.00</span>
                    <div id="aa-sqrfeet-range" class="noUi-target noUi-ltr noUi-horizontal noUi-background">
                    </div>                  
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="aa-single-filter-search">
                    <span>PRICE (₹)</span>
                    <span>FROM</span>
                    <span id="skip-value-lower2" class="example-val">30.00</span>
                    <span>TO</span>
                    <span id="skip-value-upper2" class="example-val">100.00</span>
                    <div id="aa-price-range" class="noUi-target noUi-ltr noUi-horizontal noUi-background">
                    </div>      
                  </div>
                </div>
              </div>  
             </div> */}
            </div>
          </div>
        </div>
      </section>

      <section id="aa-latest-property">
        <div class="container">
          <div class="aa-latest-property-area">
            <div class="aa-title">
              <h2>Latest Properties</h2>
              <span></span>
              <p>
                Aorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                sit ea nobis quae vero voluptatibus.
              </p>
            </div>
            <div class="aa-latest-properties-content">
              <div class="row">
                <div class="col-md-4">
                  <article class="aa-properties-item">
                    <a href="#" class="aa-properties-item-img">
                      <img src={imgp1} alt="img" />
                    </a>
                    <div class="aa-tag for-sale">For Sale</div>
                    <div class="aa-properties-item-content">
                      <div class="aa-properties-info">
                        <span>5 Rooms</span>
                        <span>2 Beds</span>
                        <span>3 Baths</span>
                        <span>1100 SQ FT</span>
                      </div>
                      <div class="aa-properties-about">
                        <h3>
                          <a href="#">Property Title</a>
                        </h3>
                        <p>
                          Aorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Enim molestiae vero ducimus quibusdam odit
                          vitae.
                        </p>
                      </div>
                      <div class="aa-properties-detial">
                        <span class="aa-price">₹35000</span>
                        <a href="#" class="aa-secondary-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="col-md-4">
                  <article class="aa-properties-item">
                    <a href="#" class="aa-properties-item-img">
                      <img src={imgp2} alt="img" />
                    </a>
                    <div class="aa-tag for-rent">For Rent</div>
                    <div class="aa-properties-item-content">
                      <div class="aa-properties-info">
                        <span>5 Rooms</span>
                        <span>2 Beds</span>
                        <span>3 Baths</span>
                        <span>1100 SQ FT</span>
                      </div>
                      <div class="aa-properties-about">
                        <h3>
                          <a href="#">Property Title</a>
                        </h3>
                        <p>
                          Aorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Enim molestiae vero ducimus quibusdam odit
                          vitae.
                        </p>
                      </div>
                      <div class="aa-properties-detial">
                        <span class="aa-price">₹11000</span>
                        <a href="#" class="aa-secondary-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="col-md-4">
                  <article class="aa-properties-item">
                    <a href="#" class="aa-properties-item-img">
                      <img src={imgp3} alt="img" />
                    </a>
                    <div class="aa-tag sold-out">Sold Out</div>
                    <div class="aa-properties-item-content">
                      <div class="aa-properties-info">
                        <span>5 Rooms</span>
                        <span>2 Beds</span>
                        <span>3 Baths</span>
                        <span>1100 SQ FT</span>
                      </div>
                      <div class="aa-properties-about">
                        <h3>
                          <a href="#">Property Title</a>
                        </h3>
                        <p>
                          Aorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Enim molestiae vero ducimus quibusdam odit
                          vitae.
                        </p>
                      </div>
                      <div class="aa-properties-detial">
                        <span class="aa-price">₹15000</span>
                        <a href="#" class="aa-secondary-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="col-md-4">
                  <article class="aa-properties-item">
                    <a href="#" class="aa-properties-item-img">
                      <img src={imgp4} alt="img" />
                    </a>
                    <div class="aa-tag for-sale">For Sale</div>
                    <div class="aa-properties-item-content">
                      <div class="aa-properties-info">
                        <span>5 Rooms</span>
                        <span>2 Beds</span>
                        <span>3 Baths</span>
                        <span>1100 SQ FT</span>
                      </div>
                      <div class="aa-properties-about">
                        <h3>
                          <a href="#">Property Title</a>
                        </h3>
                        <p>
                          Aorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Enim molestiae vero ducimus quibusdam odit
                          vitae.
                        </p>
                      </div>
                      <div class="aa-properties-detial">
                        <span class="aa-price">₹35000</span>
                        <a href="#" class="aa-secondary-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="col-md-4">
                  <article class="aa-properties-item">
                    <a href="#" class="aa-properties-item-img">
                      <img src={imgp5} alt="img" />
                    </a>
                    <div class="aa-tag sold-out">Sold Out</div>
                    <div class="aa-properties-item-content">
                      <div class="aa-properties-info">
                        <span>5 Rooms</span>
                        <span>2 Beds</span>
                        <span>3 Baths</span>
                        <span>1100 SQ FT</span>
                      </div>
                      <div class="aa-properties-about">
                        <h3>
                          <a href="#">Property Title</a>
                        </h3>
                        <p>
                          Aorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Enim molestiae vero ducimus quibusdam odit
                          vitae.
                        </p>
                      </div>
                      <div class="aa-properties-detial">
                        <span class="aa-price">₹11000</span>
                        <a href="#" class="aa-secondary-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="col-md-4">
                  <article class="aa-properties-item">
                    <a href="#" class="aa-properties-item-img">
                      <img src={imgp6} alt="img" />
                    </a>
                    <div class="aa-tag for-rent">For Rent</div>
                    <div class="aa-properties-item-content">
                      <div class="aa-properties-info">
                        <span>5 Rooms</span>
                        <span>2 Beds</span>
                        <span>3 Baths</span>
                        <span>1100 SQ FT</span>
                      </div>
                      <div class="aa-properties-about">
                        <h3>
                          <a href="#">Property Title</a>
                        </h3>
                        <p>
                          Aorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Enim molestiae vero ducimus quibusdam odit
                          vitae.
                        </p>
                      </div>
                      <div class="aa-properties-detial">
                        <span class="aa-price">₹15000</span>
                        <a href="#" class="aa-secondary-btn">
                          View Details
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="aa-about-us">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="aa-about-us-area">
                <div class="row">
                  <div class="col-md-5">
                    <div class="aa-about-us-left">
                      <img src={about} alt="image" />
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="aa-about-us-right">
                      <div class="aa-title">
                        <h2>About Us</h2>
                        <span></span>
                      </div>
                      <p>
                        Aorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellat ab dignissimos vitae maxime adipisci
                        blanditiis rerum quae quos! Id at rerum maxime modi
                        fugit vero corrupti, ad atque sit laborum ipsum sunt
                        blanditiis suscipit odio, aut nostrum assumenda nobis
                        rem a maiores temporibus non commodi laboriosam,
                        doAoremque expedita! Corporis, provident?
                      </p>
                      <ul>
                        <li>
                          Aorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Esse, blanditiis.
                        </li>
                        <li>
                          Aorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </li>
                        <li>
                          Aorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quia.
                        </li>
                        <li>
                          Aorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Esse, blanditiis.
                        </li>
                        <li>
                          Aorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </li>
                        <li>
                          Aorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quia.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="aa-service">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="aa-service-area">
                <div class="aa-title">
                  <h2>Our Service</h2>
                  <span></span>
                  <p>
                    Aorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum sit ea nobis quae vero voluptatibus.
                  </p>
                </div>

                <div class="aa-service-content">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="aa-single-service">
                        <div class="aa-service-icon">
                          <span class="fa fa-home"></span>
                        </div>
                        <div class="aa-single-service-content">
                          <h4>
                            <a href="#">Property Sale</a>
                          </h4>
                          <p>
                            Aorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Iusto repellendus quasi asperiores itaque
                            doAorem at.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="aa-single-service">
                        <div class="aa-service-icon">
                          <span class="fa fa-check"></span>
                        </div>
                        <div class="aa-single-service-content">
                          <h4>
                            <a href="#">Property Rent</a>
                          </h4>
                          <p>
                            Aorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Iusto repellendus quasi asperiores itaque
                            doAorem at.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="aa-single-service">
                        <div class="aa-service-icon">
                          <span class="fa fa-crosshairs"></span>
                        </div>
                        <div class="aa-single-service-content">
                          <h4>
                            <a href="#">Property Posting</a>
                          </h4>
                          <p>
                            Aorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Iusto repellendus quasi asperiores itaque
                            doAorem at.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="aa-single-service">
                        <div class="aa-service-icon">
                          <span class="fa fa-bar-chart"></span>
                        </div>
                        <div class="aa-single-service-content">
                          <h4>
                            <a href="#">Market Analysis</a>
                          </h4>
                          <p>
                            Aorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Iusto repellendus quasi asperiores itaque
                            doAorem at.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="aa-promo-banner">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="aa-promo-banner-area">
                <h3>Find Your Best Property</h3>
                <p>
                  Aorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloribus, ex illum corporis quibusdam numquam quisquam optio
                  explicabo. Officiis odit quia odio dignissimos eius repellat
                  id!
                </p>
                <a href="#" class="aa-view-btn">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*    
      <section id="aa-agents">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="aa-agents-area">
                <div class="aa-title">
                  <h2>Our Agents</h2>
                  <span></span>
                  <p>Aorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit ea nobis quae vero voluptatibus.</p>
                </div>
               
                <div class="aa-agents-content">
                  <ul class="aa-agents-slider">
                    <li>
                      <div class="aa-single-agents">
                        <div class="aa-agents-img">
                          <img src={img1}alt="agent member image"/>
                        </div>
                        <div class="aa-agetns-info">
                          <h4><a href="#">Philip Smith</a></h4>
                          <span>Top Agent</span>
                          <div class="aa-agent-social">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-google-plus"></i></a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="aa-single-agents">
                        <div class="aa-agents-img">
                          <img src={img1} alt="agent member image"/>
                        </div>
                        <div class="aa-agetns-info">
                          <h4><a href="#">Adam Barney</a></h4>
                          <span>Expert Agent</span>
                          <div class="aa-agent-social">
                          <a href="#"><i className="fab fa-facebook"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
      <a href="#"><i className="fab fa-google-plus"></i></a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="aa-single-agents">
                        <div class="aa-agents-img">
                          <img src={img1} alt="agent member image"/>
                        </div>
                        <div class="aa-agetns-info">
                          <h4><a href="#">Paul Walker</a></h4>
                          <span>Director</span>
                          <div class="aa-agent-social">
                          <a href="#"><i className="fab fa-facebook"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
      <a href="#"><i className="fab fa-google-plus"></i></a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="aa-single-agents">
                        <div class="aa-agents-img">
                          <img src={img1} alt="agent member image"/>
                        </div>
                        <div class="aa-agetns-info">
                          <h4><a href="#">John Smith</a></h4>
                          <span>Jr. Agent</span>
                          <div class="aa-agent-social">
                          <a href="#"><i className="fab fa-facebook"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
      <a href="#"><i className="fab fa-google-plus"></i></a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    */}

      <section id="aa-latest-blog">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="aa-latest-blog-area">
                <div class="aa-title">
                  <h2>Latest News</h2>
                  <span></span>
                  <p>
                    Aorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Saepe magni, est harum repellendus. Accusantium, nostrum!
                  </p>
                </div>
                <div class="aa-latest-blog-content">
                  <div class="row">
                    <div class="col-md-4">
                      <article class="aa-blog-single">
                        <figure class="aa-blog-img">
                          <a href="#">
                            <img src={imgl1} alt="img" />
                          </a>
                          <span class="aa-date-tag">15 April, 16</span>
                        </figure>
                        <div class="aa-blog-single-content">
                          <h3>
                            <a href="#">
                              Aorem ipsum dolor sit amet, consectetur.
                            </a>
                          </h3>
                          <p>
                            Aorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Optio est quaerat magnam exercitationem
                            voluptas, voluptatem sed quam ab laborum voluptatum
                            tempore dolores itaque, molestias vitae.
                          </p>
                          <div class="aa-blog-single-bottom">
                            <a href="#" class="aa-blog-author">
                              <i class="fa fa-user"></i> Admin
                            </a>
                            <a href="#" class="aa-blog-comments">
                              <i class="fa fa-comment-o"></i>6
                            </a>
                          </div>
                        </div>
                      </article>
                    </div>

                    <div class="col-md-4">
                      <article class="aa-blog-single">
                        <figure class="aa-blog-img">
                          <a href="#">
                            <img src={imgl2} alt="img" />
                          </a>
                          <span class="aa-date-tag">15 April, 16</span>
                        </figure>
                        <div class="aa-blog-single-content">
                          <h3>
                            <a href="#">
                              Aorem ipsum dolor sit amet, consectetur.
                            </a>
                          </h3>
                          <p>
                            Aorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Optio est quaerat magnam exercitationem
                            voluptas, voluptatem sed quam ab laborum voluptatum
                            tempore dolores itaque, molestias vitae.
                          </p>
                          <div class="aa-blog-single-bottom">
                            <a href="#" class="aa-blog-author">
                              <i class="fa fa-user"></i> Admin
                            </a>
                            <a href="#" class="aa-blog-comments">
                              <i class="fa fa-comment-o"></i>6
                            </a>
                          </div>
                        </div>
                      </article>
                    </div>

                    <div class="col-md-4">
                      <article class="aa-blog-single">
                        <figure class="aa-blog-img">
                          <a href="#">
                            <img src={imgl3} alt="img" />
                          </a>
                          <span class="aa-date-tag">15 April, 16</span>
                        </figure>
                        <div class="aa-blog-single-content">
                          <h3>
                            <a href="#">
                              Aorem ipsum dolor sit amet, consectetur.
                            </a>
                          </h3>
                          <p>
                            Aorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Optio est quaerat magnam exercitationem
                            voluptas, voluptatem sed quam ab laborum voluptatum
                            tempore dolores itaque, molestias vitae.
                          </p>
                          <div class="aa-blog-single-bottom">
                            <a href="#" class="aa-blog-author">
                              <i class="fa fa-user"></i> Admin
                            </a>
                            <a href="#" class="aa-blog-comments">
                              <i class="fa fa-comment-o"></i>6
                            </a>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="aa-client-testimonial">
        <TestimonialCarousel />
      </section>

      <script src="js/jquery.min.js"></script>

      <script src="js/bootstrap.js"></script>

      <script type="text/javascript" src="js/slick.js"></script>

      <script type="text/javascript" src="js/nouislider.js"></script>

      <script type="text/javascript" src="js/jquery.mixitup.js"></script>

      <script type="text/javascript" src="js/jquery.fancybox.pack.js"></script>

      <script src="js/custom.js"></script>

      <div></div>
    </div>
  );
}
