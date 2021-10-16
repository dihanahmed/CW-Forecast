import React, {Component} from "react";
import axios from "axios";
import {BaseNavBar} from "./components/BaseNavBar";
import {Card, Container, Row} from "react-bootstrap";
import {CityWeatherDataCard} from "./Weather/Components/cityWeatherDataCard";


class Weather extends Component {

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
        axios.post('http://localhost:8001/getWeather', {city: cityValue})
            .then((response) => {
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

        axios.get('http://localhost:8001/getWeather')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    cityData: response.data,
                    cityName: "Your Residence"
                })
            });

    }


    render() {
        this.onSubmitCurrent();
        return (
            <div>
                <BaseNavBar/>
                <div style={{marginTop: 80}}/>
                <Container className="d-flex vh-100">
                    <Row className="m-auto ">
                        <Card style={{width: window.innerWidth - 200}}>


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
                                                              cityData={this.state.cityData}/>

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
                                                              cityData={this.state.cityData}/>

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