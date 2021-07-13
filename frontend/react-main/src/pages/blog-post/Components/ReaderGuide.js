import React from "react";
import * as PropTypes from "prop-types";

export class ReaderGuide extends React.Component {
    render() {
        return <>
            <h5>{this.props.blog.title}</h5>
            <p>
                <a href="#" className="icon-link mr-3">
                    <i className="fa fa-pencil-square-o">

                    </i>{this.props.blog.email}</a>
                <a href="#" className="icon-link">
                    <i className="fa fa-comments-o">

                    </i> 150</a>
            </p>
            <p>{
                this.props.blog.content.substring(0, 64)
            }...</p>
            <a href="#" className="btn btn--with-icon">
                <i className="btn-icon fa fa-long-arrow-right">

                </i>READ MORE</a>
        </>;
    }
}

ReaderGuide.propTypes = {blog: PropTypes.any};