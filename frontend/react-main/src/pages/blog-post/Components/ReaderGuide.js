import React from "react";
import * as PropTypes from "prop-types";

export function ReaderGuide(props) {

    const openBlog = () =>{
            props.history.push({
            pathname: '/view',
            state:{blog: props.blog}
        });
    }
    return <>
        <h5>{props.blog.title}</h5>
        <p>
            <div className="icon-link mr-3">
                <i className="fa fa-pencil-square-o">

                </i>{props.blog._id}</div>
            <div className="icon-link">
                <i className="fa fa-comments-o">

                </i> 150
            </div>
        </p>
        <p>{
            props.blog.content.substring(0, 64)
        }...</p>
        <div className="btn btn--with-icon" onClick={() => {
            openBlog()
        }}>
            <i className="btn-icon fa fa-long-arrow-right">

            </i>READ MORE
        </div>
    </>;
}

ReaderGuide.propTypes = {blog: PropTypes.any};