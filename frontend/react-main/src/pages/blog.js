import React from "react";
import {getUseStyles} from "./DonationStyles";
import {BlogNavbar} from "./blogNavbar";
import axios from 'axios';

class Blogpage extends React.Component {

    state ={
        blogs:[]
    }

    componentDidMount() {
        axios.get(`http://localhost:8001/`)
            .then(res => {
                const movies = res.data;
                this.setState({ movies: movies });
            })
    }

    render() {
        const useStyles = getUseStyles();
        const classes = useStyles;
        const { history } = this.props;

        axios.get("http://localhost:8001/getWeather").then((res)=>{
            console.log(res);
        })

        return (
            <div>

                <BlogNavbar classes={classes} onClick={() => {
                    history.push("/registration")
                }} onClick1={() => {
                    history.push("/login")
                }}/>

                <div>Blog Posts:
                    <div>

                   </div>
                </div>





            </div>
        )
    }
}

export {Blogpage};