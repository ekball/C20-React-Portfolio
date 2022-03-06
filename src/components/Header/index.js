import React from "react";
import Nav from "../Nav"


function Header(props) {

    const {
        nav,
        currentNav,
        setCurrentNav,
    } = props

    return(

        <div>
            <Nav
                nav={nav}
                currentNav={currentNav}
                setCurrentNav={setCurrentNav}
            >
            </Nav>
        </div>

    );
}

export default Header;