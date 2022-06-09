import React from "react";
import Nav from "../NavTabs"
import Headroom from 'react-headroom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import Divider from '@mui/material/Divider';


function Header(props) {

    const {
        nav,
        currentNav,
        setCurrentNav,
    } = props

    return(

        <Headroom upTolerance={30} downTolerance={30}>

            <header className="">

                <div className="justify-center pt-5 pb-5">

                    <button className="hover:text-orange-400 border-none">
                        <a className="header-icons" href="https://github.com/ekball" target="_blank" rel="noreferrer">
                            <div className=''>
                                <GitHubIcon sx={{ fontSize: 50 }} />
                            </div>
                        </a>
                    </button>

                    <h1 className="title-name text-5xl mr-10 ml-10 mt-5 mb-5 text-orange-300">
                        Erick Kyles Ball
                    </h1> 

                    <button className="hover:text-orange-400 border-none">
                        <a className="header-icons" href="https://www.linkedin.com/in/kyles-ball" target="_blank" rel="noreferrer">
                            <div className=''><LinkedInIcon sx={{ fontSize: 50 }} />
                            </div>
                        </a>
                    </button>

                    
                </div>

                <Nav
                    nav={nav}
                    currentNav={currentNav}
                    setCurrentNav={setCurrentNav}
                    className=''
                >  
                </Nav>

                <Divider sx={{ borderBottomWidth: 5 }}/>

            </header>
            
        </Headroom>

    );
}

export default Header;