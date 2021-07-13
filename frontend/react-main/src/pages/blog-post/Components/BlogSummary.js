import React from "react";
import * as PropTypes from "prop-types";

export class BlogSummary extends React.Component {
    render() {
        console.log(this.props.blog._id);
        return <>
            <h4> {this.props.blog.title}</h4>
            {

            }

        </>;
    }
}

BlogSummary.propTypes = {blog: PropTypes.any};