import React from 'react';
import "./Contact.css";
function Contact() {
  return (
    <div>
      <h1 style={{ color: 'palegreen' }}>Contact Details</h1>
      <br />
      <div className='contact-container'>
        <a href="mailto:shaiksajid.sk3@gmail.com">
          <i class='bi bi-envelope'></i> shaiksajid.sk3@gmail.com
        </a>
        <a href="tel:9347114153"><i class='bi bi-person-circle'></i> 9347114153</a>
        <a href="https://www.linkedin.com/in/shaik-sajid-875b2124b"><i class='bi bi-linkedin'></i> Linkedin</a>
        <a href="https://github.com/ShaikSajid3"><i class='bi bi-github'></i> Github</a>
        <br />
      </div>
    </div>
  )
}

export default Contact;