import React from "react";
import {useHistory} from "react-router-dom";

let history = useHistory();

const Blogpost = () => {
   return( <>


        componentDidMount() {
        axios.get(`http://localhost:8001/blog-api/verify`)
            .then(res => {
                const blogs = res.data.data;
                console.log(blogs);
                this.setState({ blogs: res });
            })
    }

    </>)

};