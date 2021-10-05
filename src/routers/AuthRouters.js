import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {Login} from "../components/User/Login";
import { Detalle } from '../components/Detalle';
import { UserIndex } from "../components/Tasks/UserIndex";
import { Register } from "../components/User/Register";

export const AuthRouters = () => {
  return (
    <div className="auth__main">
      <div>
        <Switch>
        <Route exact path="/auth/Login" component={Login} />
        <Route exact path="/auth/Register" component={Register}/>
        <Route exact path="/Detalle/:id" component={Detalle} />
        <Route exact path="/IndexUser" component={UserIndex} />

          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};
