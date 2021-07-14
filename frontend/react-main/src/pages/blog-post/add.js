import axios from 'axios';
import React from "react";
import "./add.css"
import {makeStyles } from "@material-ui/core";
import {DashboardNavBar} from "../components/DashboardNavBar";

const useStyles = makeStyles({
    design: {
        width: "400px",
        height: "500px"
    }
})

class Addpost extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            content: '',
            mail: '',
        }
        this.changeTitle = this.changeTitle.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeContent = this.changeContent.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    changeTitle(event){
        this.setState({
            title:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changeContent(event){
        this.setState({
            content:event.target.value
        })
    }


    // state ={
    //     blogs:[]
    // }

    componentDidMount() {
        axios.get(`http://localhost:8001/blog-api/verify`)
            .then(res => {
                this.setState({email:res.data.email});
            })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            title: this.state.title,
            email: this.state.email,
            content: this.state.content
        }

        axios.post('http://localhost:8001/blog-api/blog/add', registered)
        .then((response) => {
            console.log(this.state);
          this.setState({ redirect: true })
        });

        

        this.setState({
            title:'',
            email:'',
            content:''
        })
        this.props.history.push('/dashboard');
    }
    

    render(){
        
        return(
            <>
                <DashboardNavBar/>
            <div>
                <div className= 'container'>
                    <div className = 'form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text' placeholder='title' onChange = {this.changeTitle} value = {this.state.title} className = 'form-control from-group'/>

                            <input type = 'text' placeholder='content' onChange = {this.changeContent} value = {this.state.content} className = 'contentStyle'/>


                            <input type = 'submit'  className='btn btn-danger btn-block' value = 'Create Post' />

                        </form>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Addpost;