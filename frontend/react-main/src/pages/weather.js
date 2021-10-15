import React, { Component } from "react";
import axios from "axios";
import { BaseNavBar } from "./components/BaseNavBar";
import { Card, Container, Row } from "react-bootstrap";
import { CityWeatherDataCard } from "./Weather/Components/cityWeatherDataCard";


class Weather extends Component {

    state = {
        cityName: "",
        cityData: {}
    }

    constructor(props) {
        super(props);

    }


    onSubmit(event) {
        event.preventDefault()
        const cityValue = document.getElementById("city").value;
        axios.post('http://localhost:8001/getWeather', { city: cityValue })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    cityData: response.data,
                    cityName: cityValue
                })
            });

    }

    onSubmit(event) {
        event.preventDefault()
        axios.get('http://localhost:8001/getWeather')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    cityData: response.data,
                    cityName: "res"
                })
            });

    }


    render() {
        return (
            <div>
                <BaseNavBar />
                <Container className="d-flex vh-100">
                    <Row className="m-auto align-self-center">
                        <Card style={{ width: 500 }}>


                            <Card.Title>
                                <div className="text-center">Weather</div>
                            </Card.Title>

                            <div className='container'>
                                <div className='form-div'>
                                    <form onSubmit={this.onSubmit.bind(this)}>

                                        <input id="city" type='text' placeholder='cityName'
                                            className='form-control from-group' />

                                        <input type='submit' className='btn btn-danger btn-block' value='Show' />

                                        <div>
                                            <input type='submit' className="allweather" value='Current Location Weather' />
                                        </div>

                                    </form>
                                </div>
                            </div>

                            <div id="weather-data">
                                {
                                    this.state.cityData.currently !== undefined ?

                                        (<CityWeatherDataCard cityName={this.state.cityName}
                                            cityData={this.state.cityData} />

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