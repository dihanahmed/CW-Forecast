import React, {Component} from "react";
import * as PropTypes from "prop-types";

export class CityWeatherDataCard extends Component {
    render() {
        return <>
            <div className="container-fluid">


                <div className="card p-4">
                    <div className="d-flex">
                        <h6 className="flex-grow-1">{this.props.cityName}</h6>
                        <h6>{new Date(this.props.cityData.currently.time * 1000).toLocaleTimeString()}</h6>
                    </div>
                    <div className="d-flex flex-column temp mt-5 mb-3">
                        <h1 className="mb-0 font-weight-bold"
                            id="heading"> {this.props.cityData.currently.temperature}° C </h1>
                        <span className="small grey">Stormy</span>
                    </div>
                    <div className="d-flex">
                        <div className="temp-details flex-grow-1">
                            <p className="my-1"><img alt="Wind Speed" src="https://i.imgur.com/B9kqOzp.png"
                                                     height="17px"/>
                                <span>{this.props.cityData.currently.windSpeed} Km/h </span>
                            </p>
                            <p className="my-1"><img alt="Precipitation"
                                src="https://cdn2.iconfinder.com/data/icons/line-weather/130/Rain-64.png"
                                height="17px"/>
                                <span> {this.props.cityData.currently.precipProbability * 100}% </span></p>
                            <p className="my-1"><img alt="UV Index" src="https://i.imgur.com/wGSJ8C5.png"
                                                     height="17px"/>
                                <span> {this.props.cityData.currently.uvIndex}h </span></p>
                        </div>

                        {/*<div><img src="https://i.imgur.com/Qw7npIg.png" width="100px"/></div>*/}
                    </div>
                </div>


            </div>
        </>;
    }
}

CityWeatherDataCard.propTypes = {
    cityName: PropTypes.string,
    cityData: PropTypes.shape({})
};