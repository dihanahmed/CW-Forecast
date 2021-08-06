import React from "react";
import * as PropTypes from "prop-types";
import {Card, Container, Row} from "react-bootstrap";

export function ReaderGuide(props) {

    const openBlog = () =>{
            props.history.push({
            pathname: '/view',
            state:{blog: props.blog}
        });
    }
    return <>



                    <Card.Title>
                        <div className="text-center">{props.blog.title}</div>
                    </Card.Title>
                    <Card.Subtitle>

                    </Card.Subtitle>

                    <div className='container'>
                        <div>
                            {props.blog.content.substring(0, 256)}...
                        </div>
                        <br/>

                        <div className="d-flex justify-content-center flex-row">
                            <div className="btn btn-outline-warning rounded-pill btn-xs" style={{cursor:"pointer"}} onClick={() => {
                                openBlog()
                            }}>
                                READ MORE
                            </div>

                        </div>


                    </div>






    </>;
}

ReaderGuide.propTypes = {blog: PropTypes.any};