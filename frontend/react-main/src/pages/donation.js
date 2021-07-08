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
import Background2 from '../images/pexels-luis-dalvan-1770809.jpg';


const useStyles = makeStyles({
	root: {
	  maxWidth: 345,
	  
	},
	media1: {
		backgroundImage: `url(${Background1})`,	
		backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '30vh',
	},
	media2: {
		backgroundImage: `url(${Background2})`,	
		backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '30vh',
	},
	btn:{
		justifyContent: 'center'
	}
  });
  

  export default function Donation() {
	const classes = useStyles();
  
	return (
		<>
	  <Card className={classes.root}>
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

	  <Card className={classes.root}>
		<CardActionArea>
		  <CardMedia className={classes.media2}/>
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

	  </>
	)
  }

  export {Donation};