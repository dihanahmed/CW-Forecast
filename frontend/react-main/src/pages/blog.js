import React from "react";
import {useHistory} from "react-router-dom";

const Blogpage = () => {
    let history = useHistory();

	return (
        <div>
		<div>
			<button
                onClick={()=>{
                    history.push("/registration")
                }}
            >
                Register Your Account
            </button>
				
		</div>

        <div>
        <button
                onClick={()=>{
                    history.push("/login")
                }}
            >
                Login to Your Account
            </button>
        </div>
        </div>
	)
};

export {Blogpage};