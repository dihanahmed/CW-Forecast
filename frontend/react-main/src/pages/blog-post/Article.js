import React from "react";
import {getUseStyles} from "../DonationStyles";
import {BlogNavbar} from "../blogNavbar";
import axios from 'axios';
import {BaseNavBar} from "../components/BaseNavBar";

class Article extends React.Component {


    constructor(props){
        super(props)
        console.log(this.props);

    }



    render() {



        return (
            <div>
                <div>
                <BaseNavBar/>
                </div>


                <h2>
                    {this.props.location.state.blog.title}
                </h2>
                <div>
                    {this.props.location.state.blog.content}
                </div>
            </div>
        )
    }
}

export default Article;