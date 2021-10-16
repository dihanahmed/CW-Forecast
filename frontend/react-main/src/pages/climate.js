import React from "react";
import { BaseNavBar } from "./components/BaseNavBar";
import { Card } from "react-bootstrap";
import "./climate.css";
const Climate = () => {

	document.body.style.backgroundImage = "none";

	return (
		<div>
			<BaseNavBar />
			<h1>Climate</h1>
			<br /><br /><br />




			<div>
				<iframe style={{
					height: window.innerHeight * .8,
					width: window.innerWidth * .8,
					position: 'absolute', left: '50%', top: '50%',
					transform: 'translate(-50%, -50%)'
				}} src="http://127.0.0.1:8080/" title="Test">
				</iframe>

			</div>





		</div>
	)
};

export { Climate };