import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { BaseNavBar } from './components/BaseNavBar';
import donationBack from '../images/donationback5.jpg'

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

    Abcd() {
        document.body.style.backgroundImage = donationBack;
        document.body.style.backgroundAttachment = "fixed";
        document.body.classList.add("no-sroll")
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

                {/* <AppBar style={{ background: '#C6CAB1' }} className="dFormBar">
                    <Toolbar >
                        <div className="headingForm">
                            <Typography style={{ textColor: 'black' }} variant="h4"> Donation Form</Typography>
                        </div>
                    </Toolbar>
                </AppBar> */}

                <div>
                    <BaseNavBar />
                </div>


                <div className="wholeForm" style={{
                    backgroundImage: `url(${donationBack})`,
                    backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', overflow: 'hidden'
                }}>
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
                            <div className="bothbtn">
                                <div className="submitbtn">
                                    <input className="submit_donor" type='submit' value='Submit' />
                                </div>

                                <div className="backbutton">
                                    <input onClick={() => this.props.history.goBack()} className="back_donor" type='submit' value='Back' />
                                </div>
                            </div>


                        </div>

                    </form>
                </div>
            </div>
        );
    }

}

export default DonationForm;