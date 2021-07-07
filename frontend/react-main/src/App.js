import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{
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

    onSubmit(event){
        event.preventDefault()

        const registered = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirm: this.state.confirm,
            phone: this.state.phone
        }

        axios.post('/blog-api/register', registered)
        .then((response) => {
          // window.location.assign("/blog-api/login");
          window.location.assign("/login");  
        });

        this.setState({
            name:'',
            email:'',
            password:'',
            confirm:'',
            phone:''
        })
    }

    render(){
        return(
            <div>
                <div classname= 'container'>
                    <div classname = 'form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text' placeholder='name' onChange = {this.changeName} value = {this.state.name} classname = 'form-control from-group'/>

                            <input type = 'text' placeholder='email' onChange = {this.changeEmail} value = {this.state.email} classname = 'form-control from-group'/>

                            <input type = 'password' placeholder='password' onChange = {this.changePassword} value = {this.state.password} classname = 'form-control from-group'/>

                            <input type = 'text' placeholder='phone' onChange = {this.changePhone} value = {this.state.phone} classname = 'form-control from-group'/>

                            <input type = 'password' placeholder='confirm' onChange = {this.confirmPassword} value = {this.state.confirm} classname = 'form-control from-group'/>

                            <input type = 'submit' classname='btn btn-danger btn-block' value = 'Submit' />

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;