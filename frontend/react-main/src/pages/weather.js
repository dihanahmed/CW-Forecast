import React, { Component } from "react";
import axios from "axios";


class Weather extends Component{

	state = {
	    cityName: ""
    }

    constructor(props){
     super(props);

    }

    changeCityName(event){

        this.state.cityName = event.target.value;

    }



    onSubmit(event){
        event.preventDefault()
        const cityValue = document.getElementById("city").value;
        axios.post('http://localhost:8001/getWeather', {city:cityValue})
        .then((response) => {
            document.getElementById("weather-data").innerText = JSON.stringify(response.data);
        });

    }

    

    render(){
        return(
            <div>
                <div className= 'container'>
                    <div className = 'form-div'>
                        <form onSubmit={this.onSubmit}>

                            <input id="city" type = 'text' placeholder='cityName' className = 'form-control from-group'/>

                            <input type = 'submit' className='btn btn-danger btn-block' value = 'Submit' />

                        </form>
                    </div>
                </div>
                <duv id="weather-data">

                </duv>

            </div>
        );
    }
}

export default Weather;