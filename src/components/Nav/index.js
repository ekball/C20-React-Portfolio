import React from 'react';

function Nav() {

  return (
    <header className='header'>

        <ul className="flex-row">

            <li className='page-anchors'>

                <a href="#about">
                About Me
                </a>

            </li>

            <li className='page-anchors'>

                <a href="#projects">
                Projects
                </a>

            </li>

            <li className='page-anchors'>

                <a href="#resume">
                Resume
                </a>

            </li>

            <li className='page-anchors'>

                <a href="#contact">
                Contact
                </a>

            </li>

        </ul>

    </header>
  );
}

export default Nav;