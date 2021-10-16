import React from "react";
import { getUseStyles } from "./DonationStyles";
import { BlogNavbar } from "./blogNavbar";
import axios from 'axios';
import { BlogSummary } from "./blog-post/Components/BlogSummary";
import { BaseNavBar } from "./components/BaseNavBar";
import { useEffect } from 'react';

class Blogpage extends React.Component {

    state = {
        blogs: []
    }
    Abcd() {
        document.body.style.backgroundImage = "none";

    };
    // useEffect(async () => {
    // 	Abcd();
    // });
    componentDidMount() {
        axios.get(`http://localhost:8001/blog-api/blog/all`)
            .then(res => {
                this.setState({ blogs: res.data });
            });
        this.Abcd();
    }



    render() {
        const classes = getUseStyles();
        const { history } = this.props;


        return (
            <div>


                <BlogNavbar classes={classes} onClick={() => {
                    history.push("/registration")
                }} onClick1={() => {
                    history.push("/login")
                }} />




                <div>
                    Blog Posts:
                    <div>

                        {this.state.blogs.map((blog, i) => {
                            console.log("Entered");
                            return (<BlogSummary blog={blog} history={this.props.history} />)
                        })}

                    </div>
                </div>


            </div>
        )
    }
}

export { Blogpage };