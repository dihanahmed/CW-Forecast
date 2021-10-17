import axios from 'axios';
import React from "react";
import "./add.css"
import {makeStyles } from "@material-ui/core";
import {DashboardNavBar} from "../components/DashboardNavBar";

const useStyles = makeStyles({
    design: {
        width: "400px",
        height: "500px"
    }
})

class ArticleEdit extends React.Component{



    constructor(props){
        super(props);
        this.state={
            content: props.history.location.state.blog.content
        }

        this.changeTitle = this.changeTitle.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeContent = this.changeContent.bind(this)
        this.onSubmit = this.onSubmit.bind(this)


    }

    changeTitle(event){
        this.setState({
            description: ''
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changeContent(event){
        this.setState({
            content:event.target.value
        })
    }


    // state ={
    //     blogs:[]
    // }


    renderRedirect = () => {
        this.props.history.push('/login');
    };

    componentDidMount() {
        axios.get(`http://localhost:8001/blog-api/verify`)
            .then(res => {
                if(res.data.isAuthenticated === false){
                    this.renderRedirect()}
                else {
                    this.setState({email:res.data.email});
                }
            })
    }




    onSubmit(){


        const article = {
            _id: this.props.history.location.state.blog._id,
            title: window.document.getElementById("article_title").value,
            content: window.document.getElementById("article_content").value

        }

        axios.post('http://localhost:8001/blog-api/blog/update', article)
            .then((response) => {
                console.log("axios",article,response);
                this.setState({ redirect: true })
            });

        console.log("not axios: ",article.content);


        this.setState({
            title:'',
            email:'',
            content:''
        })
        this.props.history.push('/dashboard');
    }


    render(){

        const passedProps = this.props.history.location.state;
        return(

            <>
                <DashboardNavBar/>
                <div>
                    <div className= 'container' style={{marginTop:200}}>
                        <div className = 'form-div'>
                            <div style={{backgroundColor:'rgba(255,255,255,.9)'}}> <h3>What changes do u wanna make?</h3> </div>

                            <input type = 'text'  style={{backgroundColor:'rgba(255,255,255,.9)'}} id="article_title" placeholder='title'  defaultValue = {passedProps.blog.title} className = 'form-control from-group'/>

                                <textarea
                                    id="article_content"
                                    placeholder='content/markdown supported'
                                    className = 'contentStyle'
                                    value={this.state.content}
                                    onChange={this.changeContent}
                                    style={{backgroundColor:'rgba(255,255,255,.9)'}}
                                > </textarea>

                                <input type = 'submit'  onClick={()=>{this.onSubmit()}} className='btn btn-danger btn-block' defaultValue = 'Save changes' />


                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ArticleEdit;