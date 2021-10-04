import React from "react";

import { Link } from 'react-router-dom'
import '../styles/style.css';


export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark">
                <a className="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <span className="navbar-toggler-icon"></span>
                </a>


                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Pokedex</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <Link to="/" id="offcanvas-subtitle">Pokémon</Link>
                        <br/>
                        <Link to="/auth/Login" id="offcanvas-subtitle">Iniciar sesión</Link>
                     
                    </div>


                </div>
            </nav>
        </div>
    );
};


