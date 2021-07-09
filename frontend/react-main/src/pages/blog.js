import React from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {getUseStyles} from "./DonationStyles";

class Blogpage extends React.Component {



    render() {
        const useStyles = getUseStyles();
        const classes = useStyles;
        const { history } = this.props

        return (
            <div>

                <AppBar className = {classes.component}>
                    <Toolbar className = {classes.container}>
                        <Typography variant="h4"> Blog</Typography>

                        <Typography variant="h4">
                            <div>
                                <button
                                    onClick={() => {
                                        history.push("/registration")
                                    }}
                                >
                                    Register Your Account
                                </button>

                            </div>

                        </Typography>

                        <Typography variant="h4">
                            <div>
                                <button
                                    onClick={() => {
                                        history.push("/login")
                                    }}
                                >
                                    Login to Your Account
                                </button>
                            </div>

                        </Typography>
                    </Toolbar>
                </AppBar>


            </div>
        )
    }
}

export {Blogpage};