import React from "react";
import * as PropTypes from "prop-types";
import "./BlogSummary.scss";
import {ReaderGuide} from "./ReaderGuide";
import axios from "axios";

export class BlogWriterSummery extends React.Component {

    removeWithID(id){
        //TODO : PULL FROM JISAN
        axios.post("127.0.0.1:8001/blog-api/blog/post-remove",{blog_id:id});
    }

    render() {
        console.log(this.props.blog._id);
        return <>
            <div className="container mt-5">


                <div className="blog-card__info">
                    <ReaderGuide blog={this.props.blog}/>
                    <div
                        onClick={()=>{this.removeWithID(this.props.blog._id)}}
                        className="btn btn--with-icon">
                        <i className="btn-icon fa fa-long-arrow-right"> </i>
                        Remove
                    </div>
                </div>
            </div>


        </>;
    }
}

BlogWriterSummery.propTypes = {blog: PropTypes.any};