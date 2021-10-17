import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar } from '@material-ui/core';
import { getUseStyles } from "./DonationStyles";
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import donationBack from '../images/donationback5.jpg'
import { BaseNavBar } from './components/BaseNavBar';



const useStyles = getUseStyles();


export default function Donation(props) {

	const handleRoute = (data) => {
		props.history.push({
			pathname: '/donationform',
			search: `${data}`,
			state: { treeID: data }

		});
	}

	const Abcd = () => {
		document.body.style.backgroundImage = donationBack;
		document.body.style.backgroundAttachment = "fixed";
		document.body.classList.add("no-sroll")

	};
	useEffect(async () => {
		Abcd();
	});


	const classes = useStyles();
	let history = useHistory();
	//document.body.style.overflow = "hidden";

	return (
		<div style={{
			backgroundImage: `url(${donationBack})`,
			backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', overflow: 'hidden'
		}}>
			<div className={classes.allcards}>

				{/* <AppBar className={classes.component_don}>
					<Toolbar >
						<div className={classes.back_btn}>
							<button onClick={() => history.goBack()}>Back</button>
						</div>
						<div className={classes.container_don}>
							<Typography variant="h4"> Donation </Typography>
						</div>
					</Toolbar>
				</AppBar> */}

				<div>
					<BaseNavBar />
				</div>




				<Card className={classes.root1}>
					<CardActionArea>
						<CardMedia className={classes.media1} />
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'cinzel' }}>
								Donation-1
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p" style={{ fontFamily: 'cinzel' }}>
								100 Taka
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary" className={classes.btn} onClick={() => { handleRoute(100) }}>
							Donate
						</Button>
					</CardActions>
				</Card>
				<br />



				<Card className={classes.root2}>
					<CardActionArea>
						<CardMedia className={classes.media2} />
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'cinzel' }}>
								Donation-2
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p" style={{ fontFamily: 'cinzel' }}>
								300 Taka
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary" className={classes.btn} onClick={() => { handleRoute(300) }}>
							Donate
						</Button>
					</CardActions>
				</Card>
				<br />

				<Card className={classes.root3}>
					<CardActionArea>
						<CardMedia className={classes.media3} />
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'cinzel' }}>
								Donation-3
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p" style={{ fontFamily: 'cinzel' }}>
								500 Taka
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary" className={classes.btn} onClick={() => { handleRoute(500) }}>
							Donate
						</Button>
					</CardActions>
				</Card>

			</div>
		</div>
	)
}

export { Donation };