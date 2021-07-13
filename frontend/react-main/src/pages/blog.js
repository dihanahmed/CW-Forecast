import React from "react";
import {getUseStyles} from "./DonationStyles";
import {BlogNavbar} from "./blogNavbar";
import axios from 'axios';

class Blogpage extends React.Component {

    state ={
        blogs:[]
    }

    render() {
        const useStyles = getUseStyles();
        const classes = useStyles;
        const { history } = this.props;

        console.log(this.state.blogs);
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