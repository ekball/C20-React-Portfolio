import React from "react";
import Nav from "../NavTabs"


function Header(props) {

    const {
        nav,
        currentNav,
        setCurrentNav,
    } = props

    return(

        <div className="header">
            <Nav
                nav={nav}
                currentNav={currentNav}
                setCurrentNav={setCurrentNav}
                className='nav-tabs'
            >
            </Nav>
        </div>

    );
}

export default Header;