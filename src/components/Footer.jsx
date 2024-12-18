import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegEnvelope,
  FaUserCircle,
  FaMapMarkerAlt,
  FaGithub,
  FaCode,
  FaHeart
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer-wrapper" style={{
      background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      color: 'white',
      paddingTop: '4rem',
      paddingBottom: '2rem',
      boxShadow: '0 -10px 20px rgba(0,0,0,0.1)'
    }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="mb-4">
              <h3 className="h4 mb-4 fw-bold d-flex align-items-center">
                <FaCode className="me-2" size={24} style={{color: '#61dafb'}}/>
                Contact Information
              </h3>
              <div className="contact-info">
                <p className="d-flex align-items-center mb-3 contact-item">
                  <FaUserCircle className="me-3" size={20} style={{color: '#61dafb'}}/>
                  <span>Tarun Vaish</span>
                </p>
                <p className="d-flex align-items-center mb-3 contact-item">
                  <SiGmail className="me-3" size={20} style={{color: '#EA4335'}}/>
                  <span>vaish.Tarun9871@gmail.com</span>
                </p>
                <p className="d-flex align-items-center mb-3 contact-item">
                  <FaPhoneAlt className="me-3" size={20} style={{color: '#4CAF50'}}/>
                  <span>6287361885</span>
                </p>
                <p className="d-flex align-items-center mb-3 contact-item">
                  <FaMapMarkerAlt className="me-3" size={20} style={{color: '#FF5252'}}/>
                  <span>Tarun Electronics</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <h3 className="h4 mb-4 fw-bold d-flex align-items-center">
              <FaMapMarkerAlt className="me-2" size={24} style={{color: '#FF5252'}}/>
              Location
            </h3>
            <div className="map-container shadow-lg" style={{
              borderRadius: '15px',
              overflow: 'hidden',
              border: '3px solid rgba(255,255,255,0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8704200839015!2d80.14495257495238!3d28.51354608947508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1cd9cba79dcad%3A0x625baab26ff3f0fb!2sTarun%20Electronics!5e0!3m2!1sen!2sin!4v1732691700728!5m2!1sen!2sin"
                style={{
                  width: '100%',
                  height: '300px',
                  border: '0'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <hr className="my-5 opacity-25"/>
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h4 className="text-white mb-0 d-flex align-items-center justify-content-center justify-content-md-start">
              <FaHeart className="me-2" size={24} style={{color: '#FF5252'}}/>
              Connect With Us
            </h4>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end gap-4">
              <a href="https://github.com" className="social-link">
                <FaGithub size={24} className="social-icon github"/>
              </a>
              <a href="https://www.linkedin.com" className="social-link">
                <FaLinkedinIn size={24} className="social-icon linkedin"/>
              </a>
              <a href="https://www.instagram.com" className="social-link">
                <FaInstagram size={24} className="social-icon instagram"/>
              </a>
              <a href="https://www.facebook.com" className="social-link">
                <FaFacebookF size={24} className="social-icon facebook"/>
              </a>
              <a href="https://twitter.com" className="social-link">
                <FaTwitter size={24} className="social-icon twitter"/>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="mb-0 text-white-50">
            Made with <FaHeart style={{color: '#FF5252'}}/> by Vidit Gupta © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;