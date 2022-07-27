import React from "react";
import '../../styles/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="apple.png" width="70" alt= "Instituto de Ingles logo"/>
                <h1>Instituto de Inglés <span className="logo_bold">The Big Apple</span></h1>
                {/* <p>¡Aprende inglés de la forma más divertida!</p> */}
            </div>
        </header>
    )
}

export default Header;