import React from "react";
import { Switch, Route } from "react-router-dom";
import { Homepage } from "../pages/HomePage";
import Home from "../pages/login";
import { Blogpage } from "../pages/blog";
import { Aboutus } from "../pages/aboutus"


export default function Body() {

  return (
    <section>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/blog" component={Blogpage} exact />
        <Route path="/regis" component={Homepage} exact />
        <Route path="/" component={Homepage} exact />
        <Route path="/" component={Homepage} exact />
        <Route path="/aboutus" component={Aboutus} exact />

      </Switch>
    </section>
  );
}