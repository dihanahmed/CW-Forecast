import React from "react";
import * as PropTypes from "prop-types";

export class ReaderGuide extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.openBlog=this.openBlog.bind(this);
    }

    openBlog(){
        this.props.history.push({
            pathname: '/view',
            state:{blog: this.props.blog}

        });

    }


    render() {
        return <>
            <h5>{this.props.blog.title}</h5>
            <p>
                <div className="icon-link mr-3">
                    <i className="fa fa-pencil-square-o">

                    </i>{this.props.blog._id}</div>
                <div className="icon-link">
                    <i className="fa fa-comments-o">

                    </i> 150</div>
            </p>
            <p>{
                this.props.blog.content.substring(0, 64)
            }...</p>
            <div className="btn btn--with-icon" onClick={()=>{this.openBlog()}}>
                <i className="btn-icon fa fa-long-arrow-right">

                </i>READ MORE</div>
        </>;
    }
}

ReaderGuide.propTypes = {blog: PropTypes.any};