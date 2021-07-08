import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blogs from './components/pages/Blogs';
import Weather from './components/pages/Weather';
import SignUp from './components/pages/SignUp';
import Donations from './components/pages/Donations';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Blogs} />
          <Route path='/products' component={Weather} />
          <Route path='/donations' component={Donations} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
