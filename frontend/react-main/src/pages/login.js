import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.registerBack = this.registerBack.bind(this)

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

    registerBack(event){
        event.preventDefault();
        this.props.history.push('/registration');

    }

	onSubmit(event){
        event.preventDefault()

        const loggedIn = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:8001/blog-api/login', loggedIn)
        .then((response) => {
           console.log(response);
            if(response.data.loginSuccessful){
                 this.setState({ redirect: true })
                this.props.history.push('/dashboard');
            }

        });

        

        this.setState({
            email:'',
            password:''
        })
	//
    }

    

    render(){
        return(
            <div>
                <div classname= 'container'>
                    <div classname = 'form-div'>
                        <form onSubmit={this.onSubmit}>

                            <input type = 'text' placeholder='email' onChange = {this.changeEmail} value = {this.state.email} classname = 'form-control from-group'/>

                            <input type = 'password' placeholder='password' onChange = {this.changePassword} value = {this.state.password} classname = 'form-control from-group'/>

                            <input type = 'submit' classname='btn btn-danger btn-block' value = 'Submit' />

                        </form>

                    </div>

                    <p>Forget password?</p>
                    <input onClick={this.registerBack} type = 'submit' classname='btn btn-danger btn-block' value = 'Register' />
                </div>
            </div>
        );
    }
}

export default Login;
//export {App};