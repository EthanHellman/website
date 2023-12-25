// import React, { useState } from 'react';
// import './Contact.css'; // Make sure to create a CSS file for styles

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would handle form submission, perhaps using a service like EmailJS or a serverless function
//     // See https://www.emailjs.com/docs/examples/reactjs/ for an example of using EmailJS with React
//     console.log(formData);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({ ...prevState, [name]: value }));
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <div className="container">
//         <h2>Contact</h2>
//         <h3>Feel free to reach out!</h3>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
//           <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
//           <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact</h2>
        <h3>Feel free to reach out!</h3>
        <div className="content">
          <div className="social-buttons">
            {/* Social Media Buttons */}
            <a href="https://www.linkedin.com/in/ethan-hellman-1804b0179/" target="_blank" rel="noopener noreferrer"><button>LinkedIn</button></a>
            <a href="https://www.instagram.com/ethanhellman/" target="_blank" rel="noopener noreferrer"><button>Instagram</button></a>
            <a href="https://twitter.com/EthanHellman" target="_blank" rel="noopener noreferrer"><button>Twitter</button></a>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Contact Form */}
            <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
