import React from "react";
import {BlogNavbar} from "../blogNavbar";
import Markdown from 'react-markdown'
import {Card, Container, Row} from "react-bootstrap";


class Article extends React.Component {

     src = "# Load the markdown document"

    constructor(props){
        super(props)
        console.log(this.props);
        console.log(this.props.location.state.blog.content);

    }



    render() {



        return (
            <div>
                <div style={{marginTop:100}}>
                <BlogNavbar/>
                </div>

                <Container className="d-flex">
                    <Row className="m-auto align-self-center">
                        <Card style={{width: 1000}} border="success">

                            <Card.Title>
                                <h1 className="text-center">{this.props.location.state.blog.title}</h1>
                            </Card.Title>

                            <div className='container markdown'>
                                <div>
                                    <Markdown>
                                        {this.props.location.state.blog.content}
                                    </Markdown>

                                </div>

                            </div>


                        </Card>
                    </Row>
                </Container>


            </div>
        )
    }
}

export default Article;