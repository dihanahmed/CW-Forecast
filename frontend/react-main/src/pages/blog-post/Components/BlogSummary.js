import React from "react";
import * as PropTypes from "prop-types";
import "./BlogSummary.scss";
import {ReaderGuide} from "./ReaderGuide";

export class BlogSummary extends React.Component {
    render() {
        return <>
            <div className="container mt-5">

                <div className="blog-card__info">
                    <ReaderGuide blog={this.props.blog} history = {this.props.history} />

                </div>
            </div>


        </>;
    }
}

BlogSummary.propTypes = {blog: PropTypes.any};