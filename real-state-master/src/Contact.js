import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qkobzcp', 'template_d2olxca', form.current, 'YVeFaDQAqJTHMPwwT')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section className="container">
      <p>If you have any types of queries related to our website,</p>
      <h5>you can send us a message from here. It's my pleasure to help you..</h5>
      <div className="form-map-container">
        <form ref={form} onSubmit={sendEmail} className="card form-background">
          <h4>Contact <span>us</span></h4>
          <div className="form-group">
            <label htmlFor="user_name">Full Name:</label>
            <input type="text" name="user_name" id="user_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Email:</label>
            <input type="email" name="user_email" id="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" name="subject" id="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" placeholder="Enter message.." required></textarea>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
        <div className="map-container map-background">
          <span><FaMapMarkerAlt /> Bangalore, Karnataka -560098</span><br />
          <span><FiPhoneCall /> 08578-273878</span><br />
          <span><FiMail /> realestate12@gmail.com</span>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.081438930898!2d77.5078768444178!3d12.92247579821204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e21c103985b%3A0x7af7b0258b8258fa!2sMatrical%20Technologies!5e0!3m2!1sen!2sin!4v1690007018203!5m2!1sen!2sin"
            style={{ border: 0, borderRadius: '5px', marginTop: '24px', marginLeft: '32px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>&nbsp;
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <BsFacebook />
            </a>&nbsp;
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <BsTwitter />
            </a>&nbsp;
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <BsYoutube />
            </a>
          </h5>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin-top: 20px;
          max-width: 100%;
          width: 100%;
          background-color:skyblue;
          // background-image: url('https://img.freepik.com/premium-photo/contact-us-business-icon-computer-keyboard-with-globe_117856-2468.jpg');
          background-size: cover;
          padding: 40px;
        }
      
        a {
          color: white;
        }
        p {
          color: orange;
          font-size: 23px;
        }

        .form-map-container {
          margin-top:30px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .card {
          flex: 1;
          background-color: #f9f9f9;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
          padding: 0px;
          border-radius: 5px;
        }

        .form-group {
          margin-bottom: 35px;
        }

        label {
          color: white;
        }

        input{
          width: 91%;
          height:70%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 16px;
          outline: none;
        }

        textarea {
          border-radius:5px;
          width:90%;
        }

        span {
          color: orange;
        }

        h4,
        h5 {
          color: white;
        }

        .map-container iframe {
          width: 90%;
          height: 250px;
          border-radius: 5px;
          margin-right:200px;
        }

        .btn {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          color: #fff;
          font-weight: 600;
        }

        .btn-primary {
          background-color: orange;
        }

        .form-background {
          background-image: url('https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg');
          background-size: cover;
        }

        .map-background {
          background-image: url('');
          background-size: cover;
          background-position: center;
        }

        @media screen and (max-width: 1024px) {
          .form-map-container {
            flex-direction: column;
            align-items: center;
          }
         
          .card {
            margin-bottom: 20px;
          }
          .map-container {
            margin-top: 20px;
          }
        }

        @media screen and (max-width: 768px) {
          .card {
            flex: 1 0 90%;
          }
          textarea {
            width: 90%;
            height: 80px;
            border-radius: 10px;
          }
          input{
            width:90%;
            
          }
          .form-map-container {
            width: 100%;
            margin-top:-10px;
            max-width: 400px;
          }
          .map-container iframe {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;