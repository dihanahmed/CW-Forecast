import React, { Component } from 'react';
import axios from 'axios';

class DonationForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            donorName: '',
            email: '',
            phone: '',
        }
        this.changeDonorName = this.changeDonorName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    changeDonorName(event){
        this.setState({
            donorName:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
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
            donorName: this.state.donorName,
            email: this.state.email,
            phone: this.state.phone,
            treeID: this.props.location.state.treeID
        }

        axios.post('http://localhost:8001/donation-api/donate', registered)
        .then((response) => {
            console.log(this.state);
          this.setState({ redirect: true })
        });

        

        this.setState({
            donorName:'',
            email:'',
            phone:''
        })
        this.props.history.push('/donation')
    }


    render(){
        return(
            <div>
                <div classname= 'container'>
                    <div classname = 'form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text' placeholder='donorName' onChange = {this.changeDonorName} value = {this.state.donorName} classname = 'form-control from-group'/>

                            <input type = 'text' placeholder='email' onChange = {this.changeEmail} value = {this.state.email} classname = 'form-control from-group'/>

                            <input type = 'text' placeholder='phone' onChange = {this.changePhone} value = {this.state.phone} classname = 'form-control from-group'/>

                            <input type = 'submit' classname='btn btn-danger btn-block' value = 'Submit' />

                        </form>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default DonationForm;