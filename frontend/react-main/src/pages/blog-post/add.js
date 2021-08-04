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


    renderRedirect = () => {
        this.props.history.push('/login');
    };

    componentDidMount() {
        axios.get(`http://localhost:8001/blog-api/verify`)
            .then(res => {
                if(res.data.isAuthenticated === false){
                    this.renderRedirect()}
                else {
                    this.setState({email:res.data.email});
                }
            })
    }

    onSubmit(event){
        event.preventDefault()

        const article = {
            title: this.state.title,
            email: this.state.email,
            content: this.state.content
        }

         axios.post('http://localhost:8001/blog-api/blog/add', article)
         .then((response) => {
             console.log("axios",article,response);
          // this.setState({ redirect: true })
         });

        console.log("not axios: ",article.content);
        
        //
        // this.setState({
        //     title:'',
        //     email:'',
        //     content:''
        // })
        // this.props.history.push('/dashboard');
    }
    

    render(){
        
        return(
            <>
                <DashboardNavBar/>
            <div>
                <div className= 'container' style={{marginTop:200}}>
                    <div className = 'form-div'>
                        <form onSubmit={this.onSubmit}>
                            Write your mind
                            <input type = 'text' placeholder='title' onChange = {this.changeTitle} value = {this.state.title} className = 'form-control from-group'/>

                            <textarea  placeholder='content/markdown supported' onChange = {this.changeContent} value = {this.state.content} className = 'contentStyle'> </textarea>

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