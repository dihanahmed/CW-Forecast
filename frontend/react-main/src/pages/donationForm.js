import React, { Component } from 'react';

import axios from 'axios';

import "./donationForm.css"

class DonationForm extends Component {
    constructor(props) {
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

    changeDonorName(event) {
        this.setState({
            donorName: event.target.value
        })
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    changePhone(event) {
        this.setState({
            phone: event.target.value
        })
    }


    onSubmit(event) {
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
                axios.post('http://localhost:8001/payment', { total_amount: this.props.location.state.treeID }).then((response) => {
                    const url = response.data.redirectURL;
                    window.location.href = url;
                })
                this.setState({ redirect: true })
            });

    }


    render() {

        return (
            <div>
                <legend className='head_donor'>Donation Form</legend>
                <form onSubmit={this.onSubmit}>
                    <div className="container_donor">

                        <div className='text_donor'>

                            <div className="row">

                                <div class="col-25">
                                    <label for="dname">Donor Name</label>
                                </div>

                                <div class="col-75">
                                    <input className="donorname" type='text' onChange={this.changeDonorName} value={this.state.donorName} />
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-25">
                                    <label for="demail">Email</label>
                                </div>
                                <div class="col-75">
                                    <input className="email" type='text' onChange={this.changeEmail} value={this.state.email} />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="dphone">Phone</label>
                                </div>
                                <div class="col-75">
                                    <input className="phone" type='text' onChange={this.changePhone} value={this.state.phone} />

                                </div>
                            </div>

                        </div>

                        <div className="submitbtn">
                            <input className="submit_donor" type='submit' value='Submit' />
                        </div>


                    </div>

                </form>
            </div>
        );
    }

}

export default DonationForm;