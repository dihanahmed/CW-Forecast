import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Storm from "../../../images/Storm.jpg";
import night from "../../../images/night.jpg";
import Midnoon from "../../../images/noon4.jpg";

//import Date from "./Date";
// export function getUseStyles() {
//     return makeStyles({
//         design: {
//             backgroundImage: `url(${Storm})`,
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             width: "100vw",
//             height: "100vh",
//         }
//     });
// }


// const classes = getUseStyles();

// const useStyles = makeStyles({
//     design: {
//         backgroundImage: `url(${night})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         width: "100vw",
//         height: "100vh",
//     },
// });



//Humid and Mostly Cloudy

export class CityWeatherDataCard extends Component {
    render() {




        return (


            <div id="weather">
                <div className="container-fluid">




                    <div className="card p-4">

                        {/* <div style={{ backgroundImage: `url(${Storm})` }}></div> */}
                        {/* <div styles={{ backgroundImage: `url(Storm)` }}> </div> */}
                        {/* <div styles={{ backgroundImage: `url(${Storm})` }}> </div> */}
                        <div className="d-flex">
                            <h6>{new Date(this.props.cityData.hourly.data[this.props.index].time * 1000).toLocaleTimeString()}</h6>
                        </div>
                        <div className="row">
                        <div className="d-flex flex-column temp  mb-3 col-sm-6">
                            <h1 className="mb-0 font-weight-bold"
                                id="heading"> {this.props.cityData.hourly.data[this.props.index].temperature}° C </h1>
                            <span className="small grey">{this.props.cityData.hourly.data[this.props.index].summary}</span>
                        </div>
                        <div className="d-flex col-sm-6">
                            <div className="temp-details flex-grow-1">
                                <p className="my-1"><img alt="Wind Speed" src="/image/weather-wind.png"
                                    height="17px" />
                                    <span>{this.props.cityData.hourly.data[this.props.index].windSpeed} Km/h </span>
                                </p>
                                <p className="my-1"><img alt="Precipitation"
                                    src="/image/weather-precipitation.png"
                                    height="17px" />
                                    <span> {this.props.cityData.hourly.data[this.props.index].precipProbability * 100}% </span></p>
                                <p className="my-1"><img alt="UV Index" src="/image/weather-uv.png"
                                    height="17px" />
                                    <span> {this.props.cityData.hourly.data[this.props.index].uvIndex}h </span></p>
                            </div>

                            {/* <div><img src="https://i.imgur.com/Qw7npIg.png" width="100px" /></div> */}
                        </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

CityWeatherDataCard.propTypes = {
    cityName: PropTypes.string,
    cityData: PropTypes.shape({})
};