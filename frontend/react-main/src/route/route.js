import React from "react";
import { Switch, Route } from "react-router-dom";
import { Homepage } from "../App";
import Home from "../login";
import { Blogpage } from "../pages/blog";


export default function Body() {

  return (
    <section>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/blog" component={Blogpage} exact />
        <Route path="/" component={Homepage} exact />
        <Route path="/" component={Homepage} exact />
        <Route path="/" component={Homepage} exact />
        
      </Switch>
    </section>
  );
}