import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import styled from 'styled-components';
import { setError, removeError} from '../../actions/uiError'
import {startRegisterWithEmailPasswordName} from '../../actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from '../Navbar'



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

export const Register = () => {
    
    
    const dispatch = useDispatch();
    const { msjError } = useSelector(state => state.ui);

    const [values, handleInputChange,reset] = useForm({
        nombre: '',
        email: '',
        password: '',
        password2: ''
    })

    //desestructuramos
    const { nombre, email, password, password2 } = values;

    const formValid = () => {
        if (nombre.trim().length === 0) {
            dispatch(setError('Nombre requerido'))
            return false
        }
        else if (!validator.isEmail(email)) {
            dispatch(setError('Email requerido'))
            return false
        }
        else if (password !== password2 || password < 5) {
            dispatch(setError('La contraseña es incorecta'))
            return false
        }

        dispatch(removeError(''))
        return true
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if (formValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, nombre))
        }
        reset()
    }

    return (
        <div >
            <Navbar/>
            <Form className="form-signin"  onSubmit={handleRegister}>
                {
                    msjError &&
                    (
                        <div className="alert alert-danger">
                            {msjError}
                        </div>
                    )
                }
               
                
               <div className="form-title">
                    <h1>Registrate</h1>
                    <Img src="https://i.pinimg.com/originals/4a/d3/b5/4ad3b567236d7d59e2f31e6633cfcdc7.gif" alt="pokeball" />
                </div>
                <br />
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    className="form-control"
                    autoComplete="off"
                    value={nombre}
                    onChange={handleInputChange}
                    required
                />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="form-control"
                    autoComplete="off"
                    required
                    value={email}
                    onChange={handleInputChange}

                />
                <br />
                <input
                    type="Password"
                    name="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Contraseña"
                    required
                    value={password}
                    onChange={handleInputChange}
                />
                <br />
                <input
                    type="Password"
                    name="password2"
                    id="inputPassword2"
                    className="form-control"
                    placeholder="Confirmar contraseña"
                    required
                    value={password2}
                    onChange={handleInputChange}
                />
                <br />
                <Button type="submit" className="btn btn-primary btn-block mb-1">Registrarse</Button>
                <br />
                <Link to="/auth/Login" className="link">¿Ya estas registrado? Inicia sesión</Link>

            </Form>

        </div>
    )
}
