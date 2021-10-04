import React from 'react';
import { Link } from "react-router-dom";
import { Navbar } from '../Navbar'
import styled from 'styled-components';
import {useForm } from '../../hooks/useForm';
import {useDispatch} from 'react-redux';
import {startLoginEmailPassword, startGoogleLogin,startFacebookLogin} from '../../actions/authAction';

const Form = styled.form`
    width: 25%;
    margin: 0px auto;
    margin-top: 30px;
    .form-title{
        display:flex;
        align-items: center;
        place-content: center;

    }

    .form-title h1{
        font-size: 1.8rem;
        margin-left: 5px;
    }

    .btn-danger {
        color: #0202028c;
        background-color: #f7f7f7;
        border: 2px solid #d9d9d9;
    }

    .google-icon, .facebook-icon{
        width: 30px;
    }
    .col-md-4 {
        flex: 0 0 auto;
        width: 95%;
    }
`;

const Img = styled.img`
width: 110px;
height: 110px;
margin-left: 15px;

`;
const Button = styled.button`
    margin: 0px auto;
    display: flex;
    width: 170px;
    justify-content: center;
    padding: 5px;

`;

export const Login = () => {

    const dispatch = useDispatch();

    const [ values, handleInputChange, reset ] = useForm({
        email: '',
        password: ''
    })

    const {email,password} = values;

    const handleLogin = (e) => {
       e.preventDefault();
       dispatch(startLoginEmailPassword(email,password));
       reset();
    }

    const handleGoogleLogin = () => {
         dispatch(startGoogleLogin());
    }

    const handleFacebookLogin = () => {
        dispatch(startFacebookLogin());
   }


    return (
        <div>
            <Navbar/>
        <Form onSubmit={handleLogin}>
        <div className="form-title">
                    <h1>Iniciar sesión</h1>
                    <Img src="http://pa1.narvii.com/6197/1a6c2d60ba0103b2bd2d8f3a370ca394a2f465ff_00.gif" alt="pokeball" />
        </div>
            <br/>
            <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={email}
                        required=""
                        onChange={handleInputChange}
                    />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        required=""
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>

            <div className="google-btn btn-danger mb-3" onClick={handleGoogleLogin}>
                    <div className="google-icon-wrapper d-flex justify-content-evenly align-items-center">
                        <img
                            className="google-icon"
                            src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/544/Google__G__Logo-256.png"
                            alt="google button"
                        />
                        <p className="align-items-center p-2 m-0">
                            <b>Ingresar con google</b>
                        </p>
                    </div>

            </div>

                <div className="facebook-btn btn-danger mb-3" onClick={handleFacebookLogin} >
                    <div className="facebook-icon-wrapper d-flex justify-content-evenly align-items-center">
                        <img
                            className="facebook-icon"
                            src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png"
                            alt="facebook button"
                        />
                        <p className="align-items-center p-2 m-0">
                            <b>Ingresar con Facebook</b>
                        </p>
                    </div>

                </div>
                <Button type="submit" className="btn btn-primary">Ingresar</Button>
                <br/>
            <Link to="/auth/Register">¿Aún no tienes cuenta? registrate</Link>
        
        </Form>
        </div>

    );
}

