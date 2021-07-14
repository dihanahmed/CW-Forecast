import React from "react";
import {getUseStyles} from "../DonationStyles";
import {BlogNavbar} from "../blogNavbar";
import axios from 'axios';
import {BaseNavBar} from "../components/BaseNavBar";

class Article extends React.Component {


    constructor(props){
        super(props)

    }



    render() {


        return (
            <div>

                <BaseNavBar/>

                <div>
                    {this.props.location.state.blog.title}
                </div>
                <div>
                    {this.props.location.state.blog.content}
                </div>
            </div>
        )
    }
}

export default {Article};