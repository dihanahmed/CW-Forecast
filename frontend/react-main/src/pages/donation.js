import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {AppBar, Toolbar} from '@material-ui/core';
import {getUseStyles} from "./DonationStyles";


const handleRoute = () =>{
    this.props.history.push("/climate");
  }

const useStyles = getUseStyles();
  

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