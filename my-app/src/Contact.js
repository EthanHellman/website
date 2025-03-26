// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

//   const handleSubmit = (e) => {
//     console.log("Form Data:", formData); // Debugging line to check form data
    
//     e.preventDefault();

//     console.log(e.target);
  
//     // emailjs.send('service_de8eqjo', 'template_3vmjyg8', formData, '0EOZzjaMLCxl7wBM_')
//     emailjs.send('service_de8eqjo', 'template_3vmjyg8', {
//       name: 'Test Name',
//       email: 'test@example.com',
//       message: 'This is a test message.'
//     }, '0EOZzjaMLCxl7wBM_').then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         // Clear the form or show a success message here
//         setFormData({ name: '', email: '', message: '' }); // Clear form after successful send
//       }, (error) => {
//         console.log('FAILED...', error);
//       });
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
//         <div className="content">
//           <div className="social-buttons">
//             {/* Social Media Buttons */}
//             <a href="https://www.linkedin.com/in/ethan-hellman-1804b0179/" target="_blank" rel="noopener noreferrer"><button>LinkedIn</button></a>
//             <a href="https://www.instagram.com/ethanhellman/" target="_blank" rel="noopener noreferrer"><button>Instagram</button></a>
//             <a href="https://twitter.com/EthanHellman" target="_blank" rel="noopener noreferrer"><button>Twitter</button></a>
//           </div>
//           <form onSubmit={handleSubmit} className="contact-form">
//             {/* Contact Form */}
//             <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
//             <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
//             <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });

  useEffect(() => {
    emailjs.init("0EOZzjaMLCxl7wBM_"); // Initialize EmailJS with your user ID
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', content: '' });

    try {
      const response = await emailjs.send('service_de8eqjo', 'template_6shwp69', formData, '0EOZzjaMLCxl7wBM_');
      console.log('SUCCESS!', response.status, response.text);
      // setMessage({ type: 'success', content: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      console.error('FAILED...', error);
      // setMessage({ type: 'error', content: 'Failed to send message. Please try again.' });
    }

    setIsLoading(false);
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
            <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} value={formData.name} />
            <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} value={formData.email} />
            <textarea name="message" placeholder="Your Message" required onChange={handleChange} value={formData.message}></textarea>
            <button type="submit" disabled={isLoading}>Send Message</button>
          </form>
          {message.content && (
            <div className={`message ${message.type}`}>{message.content}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

