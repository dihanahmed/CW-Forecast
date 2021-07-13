import React, { Component } from "react";
import axios from "axios";


class Weather extends Component{

	state = {
		cityName: []
	}

    constructor(props){
        super(props)
        this.state = {
            cityName: '',
        }
        this.changeCityName = this.changeCityName.bind(this)

    }

    changeCityName(event){
        this.setState({
            cityName:event.target.value
        })
    }



    onSubmit(event){
        event.preventDefault()

			const cityName = this.cityName
        

        axios.post('http://localhost:8001/get/Weather', cityName)
        .then((response) => {
        });

        

        this.setState({
            cityName:''
        })
    }

    

    render(){
        return(
            <div>
                <div classname= 'container'>
                    <div classname = 'form-div'>
                        <form onSubmit={this.onSubmit}>

                            <input type = 'text' placeholder='cityName' onChange = {this.changeCityName} value = {this.state.cityName} classname = 'form-control from-group'/>

                            <input type = 'submit' classname='btn btn-danger btn-block' value = 'Submit' />

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weather;