import React, {Component} from 'react';
import axios from 'axios';
import {BaseNavBar} from "./components/BaseNavBar";
import BlogNavbar from "./blogNavbar";
import {Card, Row} from "react-bootstrap";
import {CardHeader, Container} from "@material-ui/core";


class Login extends Component {
    constructor(props) {
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

    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    registerBack(event) {
        event.preventDefault();
        this.props.history.push('/registration');

    }

    onSubmit(event) {
        event.preventDefault()

        const loggedIn = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:8001/blog-api/login', loggedIn)
            .then((response) => {
                console.log(response);
                if (response.data.loginSuccessful) {
                    this.setState({redirect: true})
                    this.props.history.push('/dashboard');
                }

            });


        this.setState({
            email: '',
            password: ''
        })
        //
    }


    render() {
        return (
            <div>
                <Container className="d-flex vh-100">
                    <Row className="m-auto align-self-center">
                        <BlogNavbar/>
                        <Card style={{width: 500}}>

                                 <Card.Title><div className="text-center">Log in</div></Card.Title>


                                    <div className='form-div'>


                                        <form onSubmit={this.onSubmit}>

                                            <input type='text' placeholder='email' onChange={this.changeEmail}
                                                   value={this.state.email} className='form-control from-group'/>

                                            <input type='password' placeholder='password' onChange={this.changePassword}
                                                   value={this.state.password} className='form-control from-group'/>

                                            <input type='submit' className='btn btn-success btn-block' value='Submit'/>

                                        </form>

                                    </div>

                                    <input onClick={this.registerBack} type='submit'
                                           className='btn btn-primary btn-block' value='Join!'/>




                        </Card>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;
//export {App};