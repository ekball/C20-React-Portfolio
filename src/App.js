import './App.css';
import React from 'react';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

// const App = () => <Portfolio />;
  // return (
//     <div>
//       {/* header containing nav section */}
//         <Header>
//         </Header>

//       {/* main section containing About Me, Projects, Resume, and Contact Me */}
//       <main className='main'>

//         <About className='about'>
//         </About>

//         <Projects className='projects'>
//         </Projects>

//        {/*  <Resume className='resume'>
//         </Resume>

//         <Contact className='contact'>
//         </Contact> */}

//       </main>
// {/* 
//       <Footer className='footer'>
//       </Footer> */}

//     </div>


//   );
// }

function App () {

   return (
     <div>
      <Portfolio />

      <Footer/>
    </div>
   );
} 


export default App;
