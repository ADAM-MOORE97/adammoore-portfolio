import React from 'react';

import './App.css';

function App() {

  const toggleActive = () =>{
   const hamburger = document.querySelector('.hamburger')
   const mobile_menu = document.querySelector('.mobile-nav')
   hamburger.classList.toggle('is-active')
   mobile_menu.classList.toggle('is-active')
  }

  return (
    <div className="App">
      <nav>
        <div className='container'>
          {/* <img src='../logo64.png'/> */}
        <h1>Adam Moore </h1>
        <div className='menu'>
          <a href='#' className='is-active'>Portfolio</a>
          <a href='#'>Github</a>
          <a href='#'>Blog</a>
          <a href='#'>LinkedIn</a>
        </div>
        <button aria-label='menu-button' className='hamburger' onClick={toggleActive}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        </div>
      </nav>
      
      <div className='mobile-nav'>
      <a href='#' className='is-active'><i className='nav-item-glyph glyph-devto'></i>Portfolio</a>
          <a href='#'>Github</a>
          <a href='#'>Blog</a>
          <a href='#'>LinkedIn</a>
      </div>
      <div className='intro-container'>
        <div id="name">
        <h1>Adam Moore</h1>
        </div>
      <div id="intro">
      <p>I'm Adam, a full-stack engineer who loves problem solving. After dabbling in code for several years, I decided to enroll in Flatiron School's Software Engineering program in order to enhance my skills and prepare for the next step in my career.</p>
      <br></br>
      <p>Previously, I worked as a firefighter and EMT where I earned multiple certifications; never letting a chance to enhance my skill set and broaden my knowledge pass me by. It was in this role that I developed the communication and time management skills that are essential when working within a team at a high-stress level. Along with my professional career, I owned and operated a small landscaping business with forty-five individual clients and two employees. This experience allowed me to sharpen my leadership and organizational skills. By taking advantage of these experiences, I was able to devote more time to my passion for technology, leading to my dream of transitioning to full-time web development.</p>
      <br></br>
      <p>As a recent graduate of this software engineering course, I look forward to learning about other frameworks and languages while also enhancing the skills I accumulated during the course. If you are looking for a passionate, focused, and efficient full-stack engineer that is eager to take on any challenge, then please reach out to me.</p>
      </div>

     
      </div>
      <div className='skill-container'>
          <h2>Code Stack</h2>
      </div>
    </div>
  );
}

export default App;
