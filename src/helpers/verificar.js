import React, { useEffect, useState } from 'react'
import { firebase } from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux'
import { login } from '../actions/authAction'
import  {NavbarAuth}  from '../components/NavbarAuth'
import {Navbar} from '../components/Navbar'

export const Verificar = () => {

    const dispatch = useDispatch();
    const [isLooggedIn, setsIsLoogedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
                setsIsLoogedIn(true);
                <NavbarAuth />
                
            } else {
                setsIsLoogedIn(false);
                <Navbar />
            }

        });
    }, [ dispatch]);
    return (
        <div>
            {
                isLooggedIn ? <NavbarAuth /> : <Navbar />
            }
        </div>
    )

}
