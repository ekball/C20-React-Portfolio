import React from "react";
import Nav from "../NavTabs"


function Header(props) {

    const {
        nav,
        currentNav,
        setCurrentNav,
    } = props

    return(

        <Headroom className="header-section">

            <Nav
                nav={nav}
                currentNav={currentNav}
                setCurrentNav={setCurrentNav}
                className='nav-tabs'
            >
                
            </Nav>
            
        </Headroom>

    );
}

export default Header;