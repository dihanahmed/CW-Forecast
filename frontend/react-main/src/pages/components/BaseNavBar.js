import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";

export class BaseNavBar extends React.Component {
    render() {
        return <AppBar className={this.props.classes.component}>
            <Toolbar className={this.props.classes.container}>
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
            </Toolbar>
        </AppBar>;
    }
}

BaseNavBar.propTypes = {classes: PropTypes.any};