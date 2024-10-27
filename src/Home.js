import React from 'react'
import NavigationBar from './Components/NavigationBar';
import './Home.css';
import About from './About/About.js';
import Skills from './Skills/Skills.js';
import Contact from './Contact/Contact.js';
function Home() {
  return (
    <div className='outer-container'>

      <div className='inner-container'>
        <div className='row' style={{ height: 600 }}>
          <div className='inner-sub-container offset-md-1 col-md-5'>
            <h2><span style={{ color: 'lightcoral' }}>Hi,</span> I'm a <span style={{ color: 'lightcoral' }}>CSE</span> undergrad.</h2>
            <p id='biopara'>
              As an aspiring FullStack developer, my career goal is to immerse myself<br />
              into the depths of frontend and backend technologies that will be helpful<br />
              to craft innovative and efficient solutions that bridge the gap between<br />
              frontend and backend technologies.
            </p>
            <div className='group-icons'>
              <a className='home-icons' href='https://wa.me/9347114153' target='_blank'><i class="bi bi-whatsapp"></i></a>
              <a className='home-icons' href="#"><i class="bi bi-instagram"></i></a>
              <a className='home-icons' href="mailto:shaiksajid.sk3@gmail.com" target='_blank'><i class="bi bi-envelope"></i></a>
            </div>
          </div>
          <div className='sub-container col-md-6'>
            <img id='myimage' src="myimage1.jpg" />
          </div>
        </div>
      </div>
      <div className='inner-container'>
        <About />
      </div>
      <div className='inner-container'>
        <Skills />
      </div>
      <div className='inner-container'>
        <Contact />
      </div>
    </div>
  )
}

export default Home;