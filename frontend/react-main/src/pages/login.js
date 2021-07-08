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

	onSubmit(event){
        event.preventDefault()

        const registered = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:8001/api/blog-api/register', registered)
        .then((response) => {
          this.setState({ redirect: true })
        });

        

        this.setState({
            email:'',
            password:''
        })
		this.props.history.push('/dashboard');
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
                </div>
            </div>
        );
    }
}

export default Login;
//export {App};