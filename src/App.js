import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      {/* header section containing nav */}
      <header className='header'>

        <Nav>
        </Nav>

      </header>

      {/* main section containing About Me, Projects, Resume, and Contact Me */}
      <main className='main'>

        <About className='about'>
        </About>

        <Projects className='projects'>
        </Projects>

        <Resume className='resume'>
        </Resume>

        <Contact className='contact'>
        </Contact>

      </main>

      <footer className='footer'>

      </footer>
    </div>

  );
}

export default App;
