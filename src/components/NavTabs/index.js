import React from 'react';
import { Link } from 'react-scroll';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function NavTabs({ currentPage, handlePageChange }) {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#FED7AA',
      }
    }
  });

  return (

      <nav className="flex justify-evenly pb-5">
        <Link to="about-me"
          isDynamic={true}
          ignoreCancelEvents={true}
          smooth={true}
          duration={750}
          offset={-200}>                    
              <div className='\'>
                <ThemeProvider theme={theme}>
                  <Button className='hover:text-orange-300' size="large" variant="outlined">
                    About
                  </Button>
                </ThemeProvider>
              </div>
        </Link>
        <Link to="projects"
          isDynamic={true}
          ignoreCancelEvents={true}
          smooth={true}
          duration={750}
          offset={-150}>                    
             <div className=''>
                <ThemeProvider theme={theme}>
                  <Button className='hover:text-orange-300' size="large" variant="outlined">
                    Projects
                  </Button>
                </ThemeProvider>
              </div>
        </Link>
        <Link to="resume"
           isDynamic={true}
          ignoreCancelEvents={true}
          smooth={true}
          duration={750}
          offset={-150}>                    
              <div className=''>
                <ThemeProvider theme={theme}>
                  <Button className='hover:text-orange-300' size="large" variant="outlined">
                    Resume
                  </Button>
                </ThemeProvider>
              </div>
        </Link>
        <Link to="contact"
          isDynamic={true}
          ignoreCancelEvents={true}
          smooth={true}
          duration={750}
          offset={-150}>                    
              <div className=''>
                <ThemeProvider theme={theme}>
                  <Button className='hover:text-orange-300' size="large" variant="outlined">
                    Contact
                  </Button>
                </ThemeProvider>
              </div>
        </Link>
    </nav>

      // <ul className="flex justify-evenly pb-5">

      //   {/*  navigation tab to the about section */}
      //   <li className='hover:text-orange-400 text-xl'>
      //     <a
      //       href="#about"
      //       onClick={() => handlePageChange('About')}
      //       // when the about button is clicked, re-render the page with the info from the about component
      //       // if the current page is the about page, set the value of nav-link to active, otherwise, leave false
      //       className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
      //     >
      //       About
      //     </a>
      //   </li>

      //   {/*  navigation tab to the projects section */}
      //   <li className='hover:text-orange-400 text-xl'>
      //     <a
      //       href="#projects"
      //       onClick={() => handlePageChange('Projects')}
      //       // when the projects button is clicked, re-render the page with the info from the projects component
      //       // if the current page is the projects page, set the value of nav-link to active, otherwise, leave false
      //       className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
      //     >
      //       Projects
      //     </a>
      //   </li>

      //   {/*  navigation tab to the resume section */}
      //   <li className='hover:text-orange-400 text-xl'>
      //     <a
      //       href="#resume"
      //       onClick={() => handlePageChange('Resume')}
      //       // when the resume button is clicked, re-render the page with the info from the resume component          
      //       // if the current page is the resume page, set the value of nav-link to active, otherwise, leave false
      //       className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
      //     >
      //       Resume
      //     </a>
      //   </li>

      //   {/*  navigation tab to the contact section */}
      //   <li className='hover:text-orange-400 text-xl'>
      //     <a
      //       href="#contact"
      //       // when the contact button is clicked, re-render the page with the info from the contact component
      //       // if the current page is the contact page, set the value of nav-link to active, otherwise, leave false
      //       onClick={() => handlePageChange('Contact')}
      //       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
      //     >
      //       Contact
      //     </a>

      //   </li>
      // </ul>
  );
}

export default NavTabs;
