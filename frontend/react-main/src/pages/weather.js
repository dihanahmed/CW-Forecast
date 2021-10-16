import React, {Component} from "react";
import axios from "axios";
import {BaseNavBar} from "./components/BaseNavBar";
import {Card, Container, Row} from "react-bootstrap";
import {CityWeatherDataCard} from "./Weather/Components/cityWeatherDataCard";
import Midnoon from "../images/noon4.jpg";
import Storm from "../images/Storm.jpg";

import {rgbToHex} from "@material-ui/core";







class Weather extends Component {


     backgroundChange(weather, time) {

        console.log(time);
        if (weather === "Humid and Mostly Cloudy") {
            document.body.style.backgroundImage = `url(${Midnoon})`;
            // console.log("gese?");
        }
        else if (weather === "Rainy") {
            document.body.style.backgroundImage = `url(${Storm})`;
        }
        else if (weather === "Humid and Partly Cloudy") {
            document.body.style.backgroundImage = `url(${Midnoon})`;
        }
        else if (weather === "Humid and Overcast") {
            document.body.style.backgroundImage = `url(${Storm})`;
        }

        document.body.style.backgroundAttachment="fixed";



    }


    state = {
        cityName: "",
        cityData: {}
    }
    submitted = false;

    constructor(props) {
        super(props);

    }

    onSubmit(event) {
        event.preventDefault()
        const cityValue = document.getElementById("city").value;
        axios.post('http://localhost:8001/getWeather/hourly', {city: cityValue})
            .then((response) => {
                console.log(response.data);
                this.setState({
                    cityData: response.data,
                    cityName: cityValue
                })

                let truth;
                console.log(truth=  response.data.currently !== undefined)
                if(truth){
                    console.log("CHANGE")
                    this.backgroundChange(response.data.currently.summary,
                        new Date(response.data.currently.time * 1000).getHours()
                    )
                }
            });



    }

    onSubmitCurrent() {
        if (this.submitted) return;
        this.submitted = true;

        axios.get('http://localhost:8001/getWeather/hourly')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    cityData: response.data,
                    cityName: "Your Residence"
                });
                let truth;
                console.log(truth=  response.data.currently !== undefined)
                if(truth){
                    console.log("CHANGE")
                    this.backgroundChange(response.data.currently.summary,
                        new Date(response.data.currently.time * 1000).getHours()
                        )
                }


            });

    }


    render() {
        this.onSubmitCurrent();
        return (
            <div>
                <BaseNavBar/>
                <div style={{marginTop: 80} }/>
                <Container className="d-flex vh-100">
                    <Row className="m-auto ">
                        <Card className="transparentBG" style={{width: window.innerWidth - 300}}>


                            <Card.Title>
                                <div className="text-center">Weather</div>
                            </Card.Title>

                            <div className='container'>
                                <div className='form-div j'>
                                    <form onSubmit={this.onSubmit.bind(this)}>
                                        <div className="row">
                                            <div className="col-sm-10"><input id="city" type='text'
                                                                              placeholder='cityName'
                                                                              className='form-control from-group'/>
                                            </div>

                                            <div className="col-sm-2">
                                                <button
                                                    className='btn btn-success'>Show
                                                </button>
                                            </div>

                                        </div>
                                    </form>

                                </div>
                            </div>


                            {this.state.cityData.currently !== undefined ? (<div className="d-flex">

                                <h6 style={{marginLeft:20}} className="justify-content-center">{this.state.cityName}</h6>

                            </div>) : (<></>)}

                            <div id="weather-data">


                                {
                                    this.state.cityData.currently !== undefined ?

                                        (<CityWeatherDataCard cityName={this.state.cityName}
                                                              cityData={this.state.cityData}
                                                              index={0}

                                            />

                                        ) :

                                        (<>

                                            <div hidden>
                                                Actual City Data
                                                {JSON.stringify(this.state.cityData)}
                                            </div>

                                        </>)}
                            </div>

                            <div id="weather-data">
                                {
                                    this.state.cityData.currently !== undefined ?

                                        (<CityWeatherDataCard cityName={this.state.cityName}
                                                              cityData={this.state.cityData}
                                                              index={1}

                                            />

                                        ) :

                                        (<>

                                            <div hidden>
                                                Actual City Data
                                                {JSON.stringify(this.state.cityData)}
                                            </div>

                                        </>)}
                            </div>





                        </Card>
                    </Row>
                </Container>


            </div>
        );
    }
}

export default Weather;