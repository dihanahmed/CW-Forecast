import React from "react";
import {getUseStyles} from "../DonationStyles";
import {BlogNavbar} from "../blogNavbar";
import axios from 'axios';

class Dashboard extends React.Component {

    renderRedirect = () => {
        this.props.history.push('/login');
    };

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
        return{
            
        }
    }
}

export default Dashboard;