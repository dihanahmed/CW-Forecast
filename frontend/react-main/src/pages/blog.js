import React from "react";
import {useHistory} from "react-router-dom";

class Blogpage extends React.Component {
    render() {
        let history = useHistory();

        return (
            <div>
                <div>
                    <button
                        onClick={() => {
                            history.push("/registration")
                        }}
                    >
                        Register Your Account
                    </button>

                </div>

                <div>
                    <button
                        onClick={() => {
                            history.push("/login")
                        }}
                    >
                        Login to Your Account
                    </button>
                </div>
            </div>
        )
    }
}

export {Blogpage};