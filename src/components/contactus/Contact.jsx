import React, { useState, useEffect } from 'react';
import './contact.css';
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/bhurkeshubham26@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.success === "true") {
        setShowSuccess(true);
        setError('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        
        // Hide success message after 5 seconds and show form again
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      } else {
        setError('Failed to submit form. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Form submission error:', err);
    }
  };

  return (
    <div className="contact">
      <div className='container contact-container'>
        {showSuccess ? (
          <div className="submission-success">
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully.</p>
            <p>We'll get back to you soon.</p>
          </div>
        ) : (
          <section className='contact-section'>
            <div className="contact-content-left">
              <div className='inner-content-left'>
                <div className='left-inner'>
                  <div className='inner-1'>
                    <h4>*CONTACT US*</h4>
                  </div>
                  <div className='inner-2'>
                    <p>We are always ready to<br /> help you and answer your<br /> questions</p>
                  </div>
                </div>
                <div className='left-inner2'>
                  <p>How It Works</p>
                  <div className='step-list-box'>
                    <ul className='step-ul'>
                      <li className='step-li'><FaCheckCircle className='tickmark' /><span>Enter Your Details mentioned<br /> in the form</span></li>
                      <li className='step-li'><FaCheckCircle className='tickmark' /><span>Enter Your Phone No. </span></li>
                      <li className='step-li'><FaCheckCircle className='tickmark' /><span>Enter Your Message/queries</span> </li>
                      <li className='step-li'><FaCheckCircle className='tickmark' /><span>We will solve your queries by<br /> communicating through this <br />details </span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='form-container'>
              <h2>Get In Touch</h2>
              {error && <div className="error-message">{error}</div>}
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className='form-group'>
                  <label htmlFor="name">Name.*</label>
                  <input 
                    type='text' 
                    id='name' 
                    name='name' 
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="email">Email ID.*</label>
                  <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="phone">Phone No.*</label>
                  <input 
                    type='tel' 
                    id='phone' 
                    name='phone' 
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="message">Message.*</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    autoComplete="off"
                  ></textarea>
                </div>
                <div className='submit-btn-box'>
                  <button type='submit' className='submit-btn'>SEND THE MESSAGE</button>
                </div>
              </form>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Contact;