import React from "react";
import {getUseStyles} from "../DonationStyles";
import {BlogNavbar} from "../blogNavbar";
import axios from 'axios';

class Dashboard extends React.Component {

    renderRedirect = () => {
        this.props.history.push('/login');
    };

    constructor(props){
        super(props)
        this.state = {
            title: '',
            content: '',
            mail: '',
        }
        this.changeTitle = this.changeTitle.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeContent = this.changeContent.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    changeTitle(event){
        this.setState({
            title:event.target.value
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

    componentDidMount() {
        axios.get(`http://localhost:8001/blog-api/verify`)
            .then(res => {
                if(res.data.isAuthenticated === false){
                this.renderRedirect(res);
                }
            })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
        }

        axios.post('http://localhost:8001/blog-api/blog/add', registered)
        .then((response) => {
            console.log(this.state);
          this.setState({ redirect: true })
        });

        

        this.setState({
            
        })
        this.props.history.push('/d')
    }

    render() {
        const useStyles = getUseStyles();
        const classes = useStyles;
        const { history } = this.props;

        console.log(this.state.blogs);
        return (
            <div>

                <BlogNavbar classes={classes} onClick={() => {
                    history.push("/registration")
                }} onClick1={() => {
                    history.push("/login")
                }}/>

                <div>Blog Posts:
                    <div>

                   </div>
                </div>





            </div>
        )
    }
}

export default Dashboard;