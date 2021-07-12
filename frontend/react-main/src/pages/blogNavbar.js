import React from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import * as PropTypes from "prop-types";

export class BlogNavbar extends React.Component {

    render() {
        return <AppBar className={this.props.classes.component}>
            <Toolbar className={this.props.classes.container}>
                <Typography variant="h4"> Blog</Typography>

                <Typography variant="h4">
                    <div>
                        <button
                            onClick={this.props.onClick}
                        >
                            Register Your Account
                        </button>

                    </div>

                </Typography>

                <Typography variant="h4">
                    <div>
                        <button
                            onClick={this.props.onClick1}
                        >
                            Login to Your Account
                        </button>
                    </div>

                </Typography>
            </Toolbar>
        </AppBar>;
    }
}

BlogNavbar.propTypes = {
    classes: PropTypes.func,
    onClick: PropTypes.func,
    onClick1: PropTypes.func
};