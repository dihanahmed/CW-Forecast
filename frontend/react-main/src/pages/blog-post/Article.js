import React from "react";
import {getUseStyles} from "../DonationStyles";
import {BlogNavbar} from "../blogNavbar";
import axios from 'axios';
import {BaseNavBar} from "../components/BaseNavBar";

class Article extends React.Component {

    state ={
        blog:{}
    }

    constructor(props){
        super(props)
    }

    componentDidMount() {
        axios.post(`http://localhost:8001/blog-api/blog/id-get/`,{blog_id:this.props.location.state.blog_id})
            .then(res => {
                this.setState({ blog: res.data });
            });
    }


    render() {
        const classes = getUseStyles();
        const {history} = this.props;


        return (
            <div>

                <BaseNavBar/>

                <div>
                    {this.state.blog.title}
                </div>
                <div>
                    {this.state.blog.content}
                </div>
            </div>
        )
    }
}

export default {Article};