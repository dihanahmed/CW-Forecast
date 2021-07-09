import React from "react";
import {getUseStyles} from "./DonationStyles";
import {BlogNavbar} from "./blogNavbar";

class Blogpage extends React.Component {



    render() {
        const useStyles = getUseStyles();
        const classes = useStyles;
        const { history } = this.props

        return (
            <div>

                <BlogNavbar classes={classes} onClick={() => {
                    history.push("/registration")
                }} onClick1={() => {
                    history.push("/login")
                }}/>


            </div>
        )
    }
}

export {Blogpage};