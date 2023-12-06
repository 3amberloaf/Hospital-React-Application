// Container for additional information
import React from 'react';

function InfoContainer() {
    
  return (
    <div className="info-container">
          {/* Contact information section */}
          <div className="contact-info">
            <p className="section-title">Contact Us</p> {/* Title for the contact section */}
            <p>Address: 323 Dr Martin Luther King Jr Blvd, Newark, NJ 07102</p>
            <p>Phone: (908) 123-4567</p>
            <p>Email: info@newarkmedicalassociates.com</p>
          </div>

          {/* Visiting information section */}
          <div className="visiting-info">
            <p className="section-title">Visiting Hours</p> {/* Title for the visiting hours section */}
            <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>
  ); 
}

export default InfoContainer;
