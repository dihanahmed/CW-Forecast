import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Homepage} from './pages/HomePage';
// import {Header} from './App';
import {Blogpage} from './pages/blog';
import Weather from './pages/weather';
import {Climate} from './pages/climate';
import {Donation} from './pages/donation';
import { Aboutus } from './pages/aboutus'
import Registration from './pages/registration';
import Login from './pages/login';
import DonationForm from './pages/donationForm';
import Dashboard from './pages/blog-post/dashboard'
import Addpost from './pages/blog-post/add';
import Article from './pages/blog-post/Article'
import "bootstrap/dist/css/bootstrap.min.css"
ReactDOM.render(

    <Router>
       <Switch>
		      <Route exact path="/" component={Homepage}/>
				<Route exact path="/blog" component={Blogpage }/>
        <Route exact path="/weather" component={Weather }/>
        <Route exact path="/climate" component={Climate }/>
        <Route exact path="/donation" component={Donation }/><Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/registration" component = {Registration} />
        <Route exact path="/login" component = {Login} />
        <Route exact path="/donationform" component = {DonationForm} /> 
        <Route exact path="/dashboard" component = {Dashboard} /> 
        <Route exact path="/addpost" component = {Addpost} />
        <Route exact path="/view" component = {Article} />

	    </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


