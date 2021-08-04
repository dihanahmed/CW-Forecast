import React from "react";
import {getUseStyles} from "../DonationStyles";
import {BlogNavbar} from "../blogNavbar";
import axios from 'axios';
import {BaseNavBar} from "../components/BaseNavBar";
import {DashboardNavBar} from "../components/DashboardNavBar";

class Article extends React.Component {


    constructor(props){
        super(props)
        console.log(this.props);
        console.log(this.props.location.state.blog.content);

    }



    render() {



        return (
            <div>
                <div style={{marginTop:100}}>
                <BlogNavbar/>
                </div>


                <h2>
                    {this.props.location.state.blog.title}
                </h2>
                <div style={{whiteSpace:"pre-wrap"}}>
                    {this.props.location.state.blog.content}
                </div>
            </div>
        )
    }
}

export default Article;