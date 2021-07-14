import React from "react";
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";
import Background from "../../images/green.jpg";


const useStyles = makeStyles({
    component: {
        background: "#FFFFFF",
        color: "black",
    },
    container: {
        justifyContent: "center",
    },
    design: {
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
    },
});


export function DashboardNavBar(props) {
    const classes = useStyles()
    return <AppBar className={classes.component}>
        <Toolbar className={classes.container}>
            <div>
                <Typography>
                    {" "}
                    <Link to="/" className="navlinks">
                        Homepage
                    </Link>{" "}
                </Typography>
            </div>
            <div>
                <Typography>
                    {" "}
                    <Link to="/blog" className="navlinks">
                        Blogpage
                    </Link>{" "}
                </Typography>
            </div>
            <div>
                <Typography>
                    {" "}
                    <Link to="/weather" className="navlinks">
                        Weather
                    </Link>{" "}
                </Typography>
            </div>
            <div>
                <Typography>
                    {" "}
                    <Link to="/climate" className="navlinks">
                        Climate
                    </Link>{" "}
                </Typography>
            </div>
            <div>
                <Typography>
                    {" "}
                    <Link to="/donation" className="navlinks">
                        Donation
                    </Link>{" "}
                </Typography>
            </div>

            <div>
                <Typography>
                    {" "}
                    <Link to="/Addpost" className="navlinks">
                        Create Post
                    </Link>{" "}
                </Typography>
            </div>
        </Toolbar>
    </AppBar>;
}

DashboardNavBar.propTypes = {classes: PropTypes.any};