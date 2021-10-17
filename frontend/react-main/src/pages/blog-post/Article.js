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
                        <Card style={{width: 1000, backgroundColor:'rgb(255,255,255,0)!important'}} className="border-0">

                            <Card.Title>
                                <h1 style={{backgroundColor:'rgba(255,255,255,.7)'}} className="text-center border border-primary rounded-pill ">{this.props.location.state.blog.title}</h1>
                            </Card.Title>

                            <div style={{backgroundColor:'rgba(255,255,255,.7)'}} className='container markdown border border-success rounded-lg'>
                                <div >
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