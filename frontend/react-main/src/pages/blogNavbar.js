import React from "react";
import {AppBar, makeStyles, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import * as PropTypes from "prop-types";
import Background from "../images/green.jpg";
import {Link} from "react-router-dom";


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


export function BlogNavbar(props) {
    const classes = useStyles();
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
                <Link to="/Login" className="navlinks">
                    Login
                </Link>
                {" "}
            </Typography>
            </div>
            <div>
            <Typography>
                {" "}
                <Link to="/Registration" className="navlinks">
                    Register
                </Link>
                {" "}

            </Typography>
            </div>
            <div>
                <Typography>
                    {" "}
                    <Link to="/dashboard" className="navlinks">
                        My Blogs
                    </Link>
                    {" "}

                </Typography>
            </div>
        </Toolbar>
    </AppBar>;
}

BlogNavbar.propTypes = {
    classes: PropTypes.func,
    onClick: PropTypes.func,
    onClick1: PropTypes.func
};

export default BlogNavbar;