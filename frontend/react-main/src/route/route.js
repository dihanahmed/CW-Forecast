import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../login";


export default function Body() {

  return (
    <section>
      <Switch>
        <Route path="/login" component={Home} exact />
        
      </Switch>
    </section>
  );
}