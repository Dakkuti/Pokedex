import React, { useEffect, useState } from 'react'
import {firebase} from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux';
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";

import {PrivateRouters} from './PrivateRouters'
import {PublicRouters} from './PublicRouters'
import {AuthRouters} from './AuthRouters'



import Index from '../components/Index';
import {Login} from "../components/User/Login";
import { Detalle } from '../components/Detalle';
import { login } from '../actions/authAction';
import Loading from '../container/Loading';
import { UserIndex} from '../components/Tasks/UserIndex';
import { Register } from '../components/User/Register';

export const AppRouters = () => {
    const [checking, setChecking] = useState(true)
    const [isLooggedIn, setsIsLoogedIn] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user?.uid) {
          dispatch(login(user.uid, user.displayName, user.email));
          setsIsLoogedIn(true);
          //dispatch(Listar(user.uid));
        } else {
          setsIsLoogedIn(false);
        }
        setChecking(false);
      });
    }, [dispatch, setChecking]);
  
    if (checking) {
      return <Loading />;
    }
  

    return (
        <BrowserRouter>
            <Switch>
            <PublicRouters path="/auth" component={AuthRouters} isAuthenticated ={isLooggedIn} />

            
                <PublicRouters exact path="/" component={Index} />
                <PublicRouters exact path="/Detalle/:id" component={Detalle} />
                <PublicRouters exact path="/auth/Login" component={Login} />
                <PublicRouters exact path="/Register" component={Register}/>
        
        
                <PrivateRouters exact path="/" component={Index} isAuthenticated={isLooggedIn}/>
                <PrivateRouters exact path="/IndexUser" component={UserIndex} isAuthenticated={isLooggedIn}/>
                <PrivateRouters exact path="/Detalle/:id" component={Detalle} isAuthenticated={isLooggedIn}/>

                
        <Route
          component={() =>
            isLooggedIn ? <Redirect to="/" /> : <Redirect to="/IndexUser" />
          }
        />

            </Switch>

    </BrowserRouter>
    )
}