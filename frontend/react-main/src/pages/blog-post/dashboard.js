import React from "react";
import {getUseStyles} from "../DonationStyles";
import {BlogNavbar} from "../blogNavbar";
import axios from 'axios';
import {BlogWriterSummery} from "./Components/BlogWritersSummery";
import {BaseNavBar} from "../components/BaseNavBar";
import {DashboardNavBar} from "../components/DashboardNavBar";

class Dashboard extends React.Component {

    state ={
        blogs:[]
    }

    renderRedirect = () => {
        this.props.history.push('/login');
    };

    loadUserBlogs = (email) =>{
        axios.post(`http://localhost:8001/blog-api/blog/user-get`,{email:email})
            .then(res => {
                this.setState({ blogs: res.data });
                console.log(this.state.blogs);
            });

    }

    componentDidMount() {
        axios.get(`http://localhost:8001/blog-api/verify`)
            .then(res => {
                if(res.data.isAuthenticated === false){
                this.renderRedirect()
                }
                else {
                    console.log(res.data);
                    this.loadUserBlogs(res.data.email);
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
                    <DashboardNavBar/>
                </div>
                <div>
                    Blog Posts:
                    <div>

                        {this.state.blogs.map((blog, i) => {
                            console.log("Entered");
                            return (<BlogWriterSummery blog={blog} history = {this.props.history}/>)
                        })}
                    </div>
                </div>


            </div>
        )


    }
}

export default Dashboard;