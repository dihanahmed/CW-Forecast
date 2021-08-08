import React from "react";
import * as PropTypes from "prop-types";
import "./BlogSummary.scss";
import {ReaderGuide} from "./ReaderGuide";
import axios from "axios";
import {Card, Container, Row} from "react-bootstrap";

export class BlogWriterSummery extends React.Component {

    removeWithID(id) {
        const sendData = {blog_id: id};
        axios.post("http://localhost:8001/blog-api/blog/post-remove", sendData);
        window.location.reload();



    }

    render() {
        console.log(this.props.blog._id);
        return <>
            <div className="container mt-5" id={this.props.blog._id}>


                <div>
                    <Container className="d-flex">
                        <Row className="m-auto align-self-center">
                            <Card style={{width: 1000}} border="success" className="rounded-3">
                                <ReaderGuide blog={this.props.blog} history={this.props.history}/>

                                <div
                                    onClick={() => {
                                        this.removeWithID(this.props.blog._id)
                                    }}
                                    className="d-flex flex-row justify-content-end ">
                                    <div className="btn img-fluid btn-outline-danger rounded-pill btn-lg img_container btn-sm">
                                        <img alt="Remove" src="https://cdn.iconscout.com/icon/free/png-32/bin-61-267454.png"/>
                                    </div>
                                </div>

                            </Card>
                        </Row>
                    </Container>
                </div>


            </div>


        </>;
    }
}

BlogWriterSummery.propTypes = {blog: PropTypes.any};