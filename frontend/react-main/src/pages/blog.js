import React from "react";

class Blogpage extends React.Component {
    render() {
        const { history } = this.props

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