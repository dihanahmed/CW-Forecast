import React from "react";
import {BlogNavbar} from "../blogNavbar";
import Markdown from 'react-markdown'


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



                <h2 className="text-center">
                    {this.props.location.state.blog.title}
                </h2>
                <div>
                    <Markdown>
                        {this.props.location.state.blog.content}
                    </Markdown>

                </div>


            </div>
        )
    }
}

export default Article;