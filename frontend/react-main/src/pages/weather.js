import React, { Component } from "react";
import axios from "axios";
import { BaseNavBar } from "./components/BaseNavBar";
import { Card, Container, Row } from "react-bootstrap";
import { CityWeatherDataCard } from "./Weather/Components/cityWeatherDataCard";
import Midnoon from "../images/noon4.jpg";
import Storm from "../images/Storm.jpg";

import { rgbToHex } from "@material-ui/core";







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
        else if (weather.toUpperCase() === "CLEAR") {
            document.body.style.backgroundImage = `url(${Midnoon})`;
        }

        document.body.style.backgroundAttachment = "fixed";



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
        axios.post('http://localhost:8001/getWeather/hourly', { city: cityValue })
            .then((response) => {
                let truth;
                console.log(truth = response.data.currently !== undefined)
                if (truth) {
                    response.data.hourly.data[0] = response.data.currently;
                    this.backgroundChange(response.data.currently.summary,
                        new Date(response.data.currently.time * 1000).getHours()
                    )
                }

                console.log(response.data);
                this.setState({
                    cityData: response.data,
                    cityName: cityValue
                })


            });



    }

    onSubmitCurrent() {
        if (this.submitted) return;
        this.submitted = true;

        axios.get('http://localhost:8001/getWeather/hourly')
            .then((response) => {
                let truth;
                console.log(truth = response.data.currently !== undefined)
                if (truth) {
                    response.data.hourly.data[0] = response.data.currently;
                    this.backgroundChange(response.data.currently.summary,
                        new Date(response.data.currently.time * 1000).getHours()
                    )
                }

                console.log(response.data);
                this.setState({
                    cityData: response.data,
                    cityName: "Your Residence"
                });



            });

    }


    render() {
        this.onSubmitCurrent();
        return (
            <div>
                <BaseNavBar />
                <div style={{ marginTop: 80 }} />
                <Container className="d-flex vh-100">
                    <Row className="m-auto ">
                        <Card className="transparentBG" style={{ width: window.innerWidth - 750 }}>


                            <Card.Title>
                                <div className="text-center">Weather</div>
                            </Card.Title>

                            <div className='container'>
                                <div className='form-div j'>
                                    <form onSubmit={this.onSubmit.bind(this)}>
                                        <div className="row">
                                            <div className="col-sm-10"><input id="city" type='text'
                                                placeholder='cityName'
                                                className='form-control from-group' />
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

                                <h6 style={{ marginLeft: 20 }}
                                    className="justify-content-center">{this.state.cityName}</h6>

                            </div>) : (<></>)}

                            <div id="weather-data">



                            </div>

                            {this.showWeatherAtXthHour(0)}
                            {this.showWeatherAtXthHour(5)}
                            {this.showWeatherAtXthHour(11)}
                            {this.showWeatherAtXthHour(17)}


                        </Card>
                    </Row>
                </Container>


            </div>
        );
    }

    showWeatherAtXthHour(index) {
        return <div id="weather-data">
            {
                this.state.cityData.currently !== undefined ?

                    (<CityWeatherDataCard cityName={this.state.cityName}
                        cityData={this.state.cityData}
                        index={index}

                    />

                    ) :

                    (<>

                        <div hidden>
                            Actual City Data
                            {JSON.stringify(this.state.cityData)}
                        </div>

                    </>)}
        </div>;
    }
}

export default Weather;