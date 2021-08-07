import React from "react";
import * as PropTypes from "prop-types";
import "./BlogSummary.scss";
import {ReaderGuide} from "./ReaderGuide";
import {Card, Container, Row} from "react-bootstrap";

export class BlogSummary extends React.Component {
    render() {
        return <>
            <div className="container mt-5">

                <div className="blog-card__info">
                    <Container className="d-flex">
                        <Row className="m-auto align-self-center">
                            <Card style={{width: 1000}} border="success" >
                                <ReaderGuide blog={this.props.blog} history = {this.props.history}/>
                            </Card>
                        </Row>
                    </Container>

                </div>
            </div>








        </>;
    }
}

BlogSummary.propTypes = {blog: PropTypes.any};