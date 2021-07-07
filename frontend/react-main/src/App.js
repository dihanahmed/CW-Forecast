import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
				<p>Header</p>
		</div>
	)
};

const Homepage = () => {
	return (
		<div>
				<h1>Homepage </h1>
				<Link to='/'>Go to Homepage</Link><br/>
        <Link to='/blog'>Go to Blogpage</Link><br/>
        <Link to='/wheather'>Go to Wheather</Link><br/>
        <Link to='/climate'>Go to Climate</Link><br/>
        <Link to='/donation'>Go to Donation</Link><br/>
		</div>
	)
};

const Blogpage = () => {
	return (
		<div>
				<h1>Blogpage</h1>
				
		</div>
	)
};

const Wheather = () => {
	return (
		<div>
				<h1>Wheather</h1>
				
		</div>
	)
};

const Climate = () => {
	return (
		<div>
				<h1>Climate</h1>
				
		</div>
	)
};

const Donation = () => {
	return (
		<div>
				<h1>Donation</h1>
				
		</div>
	)
};

export {Homepage, Blogpage , Wheather, Climate, Donation, Header } ;











// import React, { useState } from 'react';
// //import ReactDOM from 'react-dom';
// import { BrowseRouter as Router , Route, Switch, Link, browserHistory, IndexRoute } from 'react-router-dom';
// import blog from "./blog";
// import wheather from "./wheather";
// import climate from "./climate";
// import donation from "./donation";
// import { func } from 'prop-types';


// function App(){
//   return(
//     <Router>
//       <switch>
//         <Route exact path = "/blog" component={blog} />
//         <Route exact path = "/wheather" component={wheather} />
//         <Route exact path = "/climate" component={climate} />
//         <Route exact path = "/donation" component={donation} />
//       </switch>
//     </Router>
//   );
// }

// export default App;


// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             </ul>
//             {this.props.children}
//          </div>
//       )
//    }
// }
// export default App;

// class Home extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Home...</h1>
//          </div>
//       )
//    }
// }
// export default Home;

// class About extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>About...</h1>
//          </div>
//       )
//    }
// }
// export default About;

// class Contact extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Contact...</h1>
//          </div>
//       )
//    }
// }
// export default Contact;

//  ReactDOM.render((
//   <Router history = {browserHistory}>
//      <Route path = "/" component = {App}>
//         <IndexRoute component = {Home} />
//         <Route path = "home" component = {Home} />
//         <Route path = "about" component = {About} />
//         <Route path = "contact" component = {Contact} />
//      </Route>
//   </Router>
// ), document.getElementById('app'))