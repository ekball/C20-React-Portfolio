import './App.css';
import About from './components/About';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import Resume from './components/Resume';  
import Divider from '@mui/material/Divider';

import { useState } from 'react';

function App() {

  const [page] = useState([
    'about', 'projects', 'contact', 'resume'
  ])

  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <> 
      <Header
        page={page}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      

      
      <div className='flex-column justify-evenly content-evenly'>

        <Divider className='pt-10 text-3xl text-orange-300' id="about-me">About Me</Divider>
        <About/>

        <Divider className='pt-20 text-3xl text-orange-300' id="projects">Projects</Divider>
        <Projects/>

        <Divider className='pt-20 text-3xl text-orange-300' id="resume">Resume</Divider>
        <Resume/>

        <Divider className='pt-20 text-3xl text-orange-300' id="contact">Contact Me</Divider>
        <Contact/>

      </div>

      <Footer/>

    </>
  );
}

export default App;