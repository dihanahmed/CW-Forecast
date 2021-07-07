import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Homepage, Blogpage, Wheather, Climate, Donation } from './App';

ReactDOM.render(
    <Router>
       <Switch>
		      <Route exact path="/" component={Homepage}/>
				<Route exact path="/blog" component={Blogpage }/>
        <Route exact path="/wheather" component={Wheather }/>
        <Route exact path="/climate" component={Climate }/>
        <Route exact path="/donation" component={Donation }/>
	    </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
