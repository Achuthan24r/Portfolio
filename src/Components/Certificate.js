import React from 'react';
import './Certificate.css'; // Import the CSS for the Certificate section

const Certificate = () => {
  return (
    <section id="certificate">
      <h1>My Certificates</h1>
      <div className="certificate-container">
        {/* Sample Certificate Cards */}
        <div className="certificate-card">
          <img src="path/to/your/certificate1.jpg" alt="Certificate 1" />
          <div className="certificate-title">e commerce</div>
          <div className="certificate-details">Mr.Mad | June 2023</div>
        </div>
        <div className="certificate-card">
          <img src="path/to/your/certificate2.jpg" alt="Certificate 2" />
          <div className="certificate-title">portfolio</div>
          <div className="certificate-details">Naveen.N | December 2023</div>
        </div>
        <div className="certificate-card">
          <img src="path/to/your/certificate3.jpg" alt="Certificate 3" />
          <div className="certificate-title">JavaScript Essentials</div>
          <div className="certificate-details">Issued by DEF Learning | March 2024</div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
