import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Background1 from '../images/pexels-felix-mittermeier-957024.jpg';
import Background2 from '../images/media2.jpg';
import Background3 from '../images/shobuj.jpg';
import { AppBar, Toolbar} from '@material-ui/core';


const handleRoute = () =>{ 
    this.props.history.push("/climate");
  }

const useStyles = makeStyles({
	component: {
        background: '#C6CAB1',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
		height: '80px'
    },

	root1: {
		backgroundColor: '#e4f4ef',
		maxWidth: 1000,
		marginRight: '80px'
	  
	},

	root2: {
		backgroundColor: '#dad6db',
		maxWidth: 1000,
		marginLeft: '70px',
		marginRight: '80px'
		
	},
	root3: {
		backgroundColor: '#E3EEAB',
		maxWidth: 1000,
		marginLeft: '70px'
		
	},
	media1: {
		backgroundImage: `url(${Background1})`,	
		backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '30vh',
	},
	media2: {
		backgroundImage: `url(${Background2})`,	
		backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
		backgroundPosition: '-30px 0px',
        width: '100vw',
        height: '30vh',
	},
	media3: {
		backgroundImage: `url(${Background3})`,	 
		backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
		backgroundPosition: '-30px 0px',
        width: '100vw',
        height: '30vh',
	},
	btn:{
		marginLeft: '20px'
	},
	allcards:{
		padding: '200px 100px 500px 70px',
		maxWidth: '2000px',
		display: 'flex',
		flexDirection: 'wrap',
	}

  });
  

  export default function Donation() {
	const classes = useStyles();
  
	return (
		<div className = {classes.allcards}>

			<AppBar className = {classes.component}>
                <Toolbar className = {classes.container}>
                    <Typography variant="h4"> Donation </Typography>
                </Toolbar>
            </AppBar>

			<Card className={classes.root1}>
				<CardActionArea>
				<CardMedia className={classes.media1}/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
					Donation-1
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
					100 taka
					</Typography>
				</CardContent>
				</CardActionArea>
				<CardActions>
				<Button size="small" color="primary" className={classes.btn}>
					Donate
				</Button>
				</CardActions>
			</Card>
	  <br/>

	  

	  <Card className={classes.root2}>
		<CardActionArea>
		  <CardMedia className={classes.media2}/>
		  <CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			  Donation-2
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
			  300 taka
			</Typography>
		  </CardContent>
		</CardActionArea>
		<CardActions>
		  <Button size="small" color="primary" className={classes.btn}>
			Donate
		  </Button>
		</CardActions>
	  </Card>
	  <br/>

	  <Card className={classes.root3}>
		<CardActionArea>
		  <CardMedia className={classes.media3}/>
		  <CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			  Donation-3
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
			  500 taka
			</Typography>
		  </CardContent>
		</CardActionArea>
		<CardActions>
		  <Button size="small" color="primary" className={classes.btn} onClick={handleRoute}>
			Donate
		  </Button>
		</CardActions>
	  </Card>

	  </div>
	)
  }

  export {Donation};