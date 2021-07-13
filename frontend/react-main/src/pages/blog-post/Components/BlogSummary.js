import React from "react";
import * as PropTypes from "prop-types";
import "./BlogSummary.scss";
import {ReaderGuide} from "./ReaderGuide";

export class BlogSummary extends React.Component {
    render() {
        console.log(this.props.blog._id);
        return <>
            <div className="container mt-5">

                <div className="blog-card__info">
                    <ReaderGuide blog={this.props.blog}/>

                </div>
            </div>


        </>;
    }
}

BlogSummary.propTypes = {blog: PropTypes.any};