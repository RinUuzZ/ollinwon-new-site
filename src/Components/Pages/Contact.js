import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    mobilenumber: '',
    message: '',
  });
  const [serverResponse, setServerResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://nodeapp-r5o9.onrender.com/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      const responseData = await response.json();
      setServerResponse(responseData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <section className="contact-section">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>
            By contacting us you can also get valuable feedback and if you need more facilities we can do it. No need to
            hesitate.
          </p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-box">
              <div className="info-icon">
                <i className="fa fa-map-marker" aria-hidden="true" />
              </div>
              <div className="info-text">
                <h3>Address</h3>
                <p>Smart trade city Kottakkal <br /> Malappuram (Drct)</p>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <p>+91 8590083588</p>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon">
                <i className="fa fa-envelope" aria-hidden="true" />
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <p>ollinwonofficial@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form method="POST" onSubmit={handleSubmit} encType="application/x-www-form-urlencoded">
              <h2>Send Message</h2>

              <div className="input-box">
                <input type="text" name="fullname" required onChange={handleChange} />
                <span>Full Name</span>
              </div>

              <div className="input-box">
                <input type="text" name="email" required onChange={handleChange} />
                <span>Email</span>
              </div>

              <div className="input-box">
                <input type="text" name="mobilenumber" required onChange={handleChange} />
                <span>Mobile Number</span>
              </div>

              <div className="input-box1">
                <textarea required onChange={handleChange} name="message" />
                <span className='messageSpan'>Type Your Message.....</span>
              </div>

              <button type="submit" className="submit-button">Submit</button>

            </form>
            {serverResponse && <p>{serverResponse.message}</p>}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
