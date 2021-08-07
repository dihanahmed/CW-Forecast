import React from "react";
import * as PropTypes from "prop-types";
import "./BlogSummary.scss";
import {ReaderGuide} from "./ReaderGuide";
import axios from "axios";
import {Card, Container, Row} from "react-bootstrap";

export class BlogWriterSummery extends React.Component {

    removeWithID(id) {
        const sendData = {blog_id: id};
        console.log(sendData);
        axios.post("http://localhost:8001/blog-api/blog/post-remove", sendData);
        //  window.location.reload();

    }

    render() {
        console.log(this.props.blog._id);
        return <>
            <div className="container mt-5">


                <div>
                    <Container className="d-flex">
                        <Row className="m-auto align-self-center">
                            <Card style={{width: 1000}} border="success" className="rounded-3">
                                <ReaderGuide blog={this.props.blog} history={this.props.history}/>

                                <div
                                    onClick={() => {
                                        this.removeWithID(this.props.blog._id)
                                    }}
                                    className="d-flex justify-content-center flex-row">
                                    <div className="btn btn-outline-danger rounded-pill btn-lg">
                                        Remove
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