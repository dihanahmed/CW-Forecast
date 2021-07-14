import React from "react";
import * as PropTypes from "prop-types";
import "./BlogSummary.scss";
import {ReaderGuide} from "./ReaderGuide";
import axios from "axios";

export class BlogWriterSummery extends React.Component {

    removeWithID(id){
        const sendData = {blog_id:id};
        console.log(sendData);
        axios.post("http://localhost:8001/blog-api/blog/post-remove",sendData);
      //  window.location.reload();

    }

    render() {
        console.log(this.props.blog._id);
        return <>
            <div className="container mt-5">


                <div className="blog-card__info">
                    <ReaderGuide blog={this.props.blog} history = {this.props.history}/>
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