import React from "react";
import { BaseNavBar } from "./components/BaseNavBar";
import { Card } from "react-bootstrap";
import "./climate.css";


const Climate = () => {

	function openANewTab() {
		window.open("http://127.0.0.1:8080/")
	}

	window.document.body.style.backgroundImage="url('/image/ultano_nouka.jpg')";
	window.document.body.style.backgroundAttachment="fixed";


	return (
		<div>
			<BaseNavBar />
			<h1>ClimateSimulator</h1>
			<br /><br /><br />




			<div >
				<iframe
					className="border-info rounded-lg"
					style={{
					height: window.innerHeight * .8,
					width: window.innerWidth * .8,
					position: 'absolute', left: '50%', top: '50%',
					transform: 'translate(-50%, -50%)'
				}} src="http://127.0.0.1:8080/" title="Test">
				</iframe>

			</div>

			<button style={
				{
					position:"absolute", left:'75%', top: '75%'
				}
			}
					className="btn btn-outline-success" onClick={openANewTab}
			>Open In A New Tab</button>







		</div>
	)
};

export { Climate };