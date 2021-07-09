import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import Background from '../src/images/green.jpg';

const  useStyles = makeStyles({
	component: {
		background: '#FFFFFF',
		color: 'black'
	},
	container: {
		justifyContent: 'center'
	},
	design: {
		backgroundImage: `url(${Background})`,
		backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
		
	}
});

// const Header = () => {
// 	return (
		
// 	)
// };

const App = () => {
	const classes = useStyles();
	return (
		<div>


		</div>
	)
};

export {App } ;





