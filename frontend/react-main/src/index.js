import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Homepage} from './App';
import {Blogpage} from './pages/blog';
import {Weather} from './pages/weather';
import {Climate} from './pages/climate';
import {Donation} from './pages/donation';
import App from './pages/registration';
import {Login} from './pages/login';

ReactDOM.render(
    <Router>
       <Switch>
		      <Route exact path="/" component={Homepage}/>
				<Route exact path="/blog" component={Blogpage }/>
        <Route exact path="/weather" component={Weather }/>
        <Route exact path="/climate" component={Climate }/>
        <Route exact path="/donation" component={Donation }/>
        <Route exact path="/registration" component = {App} />
        <Route exact path="/login" component = {Login} />
	    </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
