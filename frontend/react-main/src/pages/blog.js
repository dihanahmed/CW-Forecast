import React from "react";
import {getUseStyles} from "./DonationStyles";
import {BlogNavbar} from "./blogNavbar";
import axios from 'axios';
import {BlogSummary} from "./blog-post/Components/BlogSummary";

class Blogpage extends React.Component {

    state ={
        blogs:[]
    }

    componentDidMount() {
        axios.get(`http://localhost:8001/blog-api/blog/all`)
            .then(res => {
                this.setState({ blogs: res.data });
            });
    }


    render() {
        const useStyles = getUseStyles();
        const classes = useStyles;
        const {history} = this.props;
        console.log(this.state.blogs);

        return (
            <div>

                <BlogNavbar classes={classes} onClick={() => {
                    history.push("/registration")
                }} onClick1={() => {
                    history.push("/login")
                }}/>




                <div>
                    Blog Posts:
                    <div>

                        {this.state.blogs.map((blog, i) => {
                            console.log("Entered");
                            return (<BlogSummary blog={blog}/>)
                        })}

                    </div>
                </div>


            </div>
        )
    }
}

export {Blogpage};