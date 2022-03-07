import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (

    <ul className="nav nav-tabs">

      <li className='name'>
        <h2>Erick Kyles Ball</h2>
      </li>

      {/*  navigation tab to the about section */}
      <li >
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // when the about button is clicked, re-render the page with the info from the about component
          // if the current page is the about page, set the value of nav-link to active, otherwise, leave false
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>

      {/*  navigation tab to the projects section */}
      <li >
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          // when the projects button is clicked, re-render the page with the info from the projects component
          // if the current page is the projects page, set the value of nav-link to active, otherwise, leave false
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>

      {/*  navigation tab to the resume section */}
      <li >
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // when the resume button is clicked, re-render the page with the info from the resume component          
          // if the current page is the resume page, set the value of nav-link to active, otherwise, leave false
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>

      {/*  navigation tab to the contact section */}
      <li >
        <a
          href="#contact"
          // when the contact button is clicked, re-render the page with the info from the contact component
          // if the current page is the contact page, set the value of nav-link to active, otherwise, leave false
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>

      </li>
    </ul>
  );
}

export default NavTabs;
