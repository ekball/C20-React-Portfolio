import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      {/* header containing nav section */}
        <Header>
        </Header>

      {/* main section containing About Me, Projects, Resume, and Contact Me */}
      <main className='main'>

        <About className='about'>
        </About>

        <Projects className='projects'>
        </Projects>

       {/*  <Resume className='resume'>
        </Resume>

        <Contact className='contact'>
        </Contact> */}

      </main>
{/* 
      <Footer className='footer'>
      </Footer> */}

    </div>

  );
}

export default App;
