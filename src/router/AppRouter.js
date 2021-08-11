import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { UsersScreen } from "../components/UsersScreen";
import { UserScreen } from "../components/UserScreen";

export const AppRouter = () => {

  return (
    <Router>
      <div>

        <Switch>
          <Route
            exact 
            path="/" 
            component={UsersScreen}
          />
          
          <Route
            exact 
            path="/product/:login" 
            component={UserScreen}
          />

          <Redirect to="/" />
        </Switch>

      </div>
    </Router>
  )

}