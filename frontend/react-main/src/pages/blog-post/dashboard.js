import React from "react";
import {getUseStyles} from "../DonationStyles";
import {BlogNavbar} from "../blogNavbar";
import axios from 'axios';

class Dashboard extends React.Component {

    state ={
        blogs:[]
    }

    componentDidMount() {
        axios.get(`http://localhost:8001/blog-api/verify`)
            .then(res => {
                const blogs = res.data.data;
                console.log(blogs);
                this.setState({ blogs: res });
            })
    }

    render() {
        const useStyles = getUseStyles();
        const classes = useStyles;
        const { history } = this.props;

        console.log(this.state.blogs);
        return (
            <div>

                <BlogNavbar classes={classes} onClick={() => {
                    history.push("/registration")
                }} onClick1={() => {
                    history.push("/login")
                }}/>

                <div>Blog Posts:
                    <div>

                   </div>
                </div>





            </div>
        )
    }
}

export default Dashboard;