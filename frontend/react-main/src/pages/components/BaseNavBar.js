import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";



const useStyles = makeStyles({
    component: {
        background: "#DDDDDDDD",
    },
    container: {
        justifyContent: "center",
        fontFamily: "cinzel"
    },
    design: {
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
    },
});


export function BaseNavBar(props) {
    const classes = useStyles()
    return <AppBar className={classes.component}>
        <Toolbar className={classes.container}>

            <div>
                <Typography style={{ fontFamily: 'cinzel' }}>
                    {" "}
                    <Link to="/" className="navlinks">
                        Homepage
                    </Link>{" "}
                </Typography>
            </div>
            <div>
                <Typography style={{ fontFamily: 'cinzel' }}>
                    {" "}
                    <Link to="/blog" className="navlinks">
                        Blogpage
                    </Link>{" "}
                </Typography>
            </div>
            <div>
                <Typography style={{ fontFamily: 'cinzel' }}>
                    {" "}
                    <Link to="/weather" className="navlinks">
                        Weather
                    </Link>{" "}
                </Typography>
            </div>
            <div>
                <Typography style={{ fontFamily: 'cinzel' }}>
                    {" "}
                    <Link to="/climate" className="navlinks">
                        Climate
                    </Link>{" "}
                </Typography>
            </div>
            <div>
                <Typography style={{ fontFamily: 'cinzel' }}>
                    {" "}
                    <Link to="/donation" className="navlinks">
                        Donation
                    </Link>{" "}
                </Typography>
            </div>
            <div>
                <Typography style={{ fontFamily: 'cinzel' }}>
                    {" "}
                    <Link to="/aboutus" className="navlinks">
                        About
                    </Link>{" "}
                </Typography>
            </div>

        </Toolbar>
    </AppBar>;
}

BaseNavBar.propTypes = { classes: PropTypes.any };