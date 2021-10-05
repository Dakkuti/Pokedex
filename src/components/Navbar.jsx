import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../actions/authAction'
import { Link } from 'react-router-dom'
import '../styles/style.css';


export const Navbar = () => {

    const {uid, name } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    return (
        <div>
            <nav className="navbar navbar-dark">
                <a className="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <span className="navbar-toggler-icon"></span>
                </a>


                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Pokedex</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <Link to="/" id="offcanvas-subtitle">Pokémon</Link>
                        <br/>
                        {
                            uid == null ? <Link to="/Login" id="offcanvas-subtitle">Iniciar sesión</Link>:null
                        }
                        
                        <br/>
                        { uid ? 
                            <Link to="/IndexUser" id="offcanvas-subtitle">Agregar pokemones</Link>: null
                        }

                        <br/>
                        { uid ?
                            <p  id="offcanvas-subtitle">Bienvenido/a {name}</p>:null

                        }
                        <br />
                        { uid ?
                                <a href="/" onClick={() => dispatch(startLogout())}> Cerrar Sesion</a>:null
                        }
                        
                        

                    </div>


                </div>
            </nav>
        </div>
    );
};


