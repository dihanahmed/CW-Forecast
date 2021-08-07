import React, { Component } from 'react';
//import { Switch, Route } from "react-router-dom";
//import { Redirect } from "react-router-dom";
import axios from 'axios';
import BlogNavbar from "./blogNavbar";
import {Card,Row} from "react-bootstrap";
import { Container} from "@material-ui/core";

//import {useHistory} from "react-router-dom";
//Home = require("./login");


class Registration extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            phone: '',
            confirm: ''
        }
        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.confirmPassword = this.confirmPassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.goToLogin = this.goToLogin.bind(this)

    }

    changeName(event){
        this.setState({
            name:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    confirmPassword(event){
      this.setState({
          confirm:event.target.value
      })
  }

    changePhone(event){
        this.setState({
            phone:event.target.value
        })
    }
    
    // login(){
    //   return <Redirect to='/login'/>;
    // }

    // state = {
    //   redirect: false
    // }
  
  //   render () {
  //     const { redirect } = this.state;
  
  //      if (redirect) {
  //        return <Redirect to='/somewhere'/>;
  //      }
  
  //      return <RenderYourForm/>;
  // }

  goToLogin(event){
    event.preventDefault();
    this.props.history.push('/login');

}

    onSubmit(event){
        event.preventDefault()

        const registered = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirm: this.state.confirm,
            phone: this.state.phone
        }

        axios.post('http://localhost:8001/blog-api/register', registered)
        .then((response) => {
          this.setState({ redirect: true })
        });

        

        this.setState({
            name:'',
            email:'',
            password:'',
            confirm:'',
            phone:''
        })
        this.props.history.push('/login')
    }

    

    render(){
        return(
            <div>
                <Container className="d-flex vh-100">
                    <Row className="m-auto align-self-center">
                        <BlogNavbar/>
                        <Card style={{width: 500}}>

                            <Card.Title><div className="text-center">Create Your Account</div></Card.Title>


                            <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text' placeholder='name' onChange = {this.changeName} value = {this.state.name} className = 'form-control from-group'/>

                            <input type = 'text' placeholder='phone' onChange = {this.changePhone} value = {this.state.phone} className = 'form-control from-group'/>

                            <input type = 'text' placeholder='email' onChange = {this.changeEmail} value = {this.state.email} className = 'form-control from-group'/>

                            <input type = 'password' placeholder='password' onChange = {this.changePassword} value = {this.state.password} className = 'form-control from-group'/>

                            <input type = 'password' placeholder='confirm' onChange = {this.confirmPassword} value = {this.state.confirm} className = 'form-control from-group'/>



                            <input type = 'submit' className='btn btn-success btn-block' value = 'Submit' />

                        </form>
                    </div>



                    <p>Already have an account?</p>
                    <input onClick={this.goToLogin} type = 'submit' className='btn btn-primary btn-block' value = 'Login' />

                        </Card>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Registration;
//export {App};