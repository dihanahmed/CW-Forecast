import React from "react";
import {getUseStyles} from "../DonationStyles";
import {BlogNavbar} from "../blogNavbar";
import axios from 'axios';
import {BlogSummary} from "./Components/BlogSummary";

class Dashboard extends React.Component {

    state ={
        blogs:[]
    }

    renderRedirect = () => {
        this.props.history.push('/login');
    };

    loadUserBlogs = () =>{
        axios.get(`http://localhost:8001/blog-api/blog/user-get`)
            .then(res => {
                this.setState({ blogs: res.data });
                console.log(this.state.blogs);
            });

    }

    componentDidMount() {
        axios.get(`http://localhost:8001/blog-api/verify`)
            .then(res => {
                if(res.data.isAuthenticated === false){
                this.renderRedirect(res)}
                else {
                    this.loadUserBlogs();
                    }
            })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
        }

        axios.post('http://localhost:8001/blog-api/blog/add', registered)
        .then((response) => {
            console.log(this.state);
          this.setState({ redirect: true })
        });

        

        this.setState({
            
        })
        this.props.history.push('/d')
    }

    render() {
        return (
            <div>

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

export default Dashboard;