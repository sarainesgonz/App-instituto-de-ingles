import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink to="/cursos">Cursos</NavLink></li>
                    <li><NavLink to="/novedades">Novedades</NavLink></li>
                    <li><NavLink to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;