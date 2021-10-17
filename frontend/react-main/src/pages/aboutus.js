import React, {Component} from 'react';
import {BaseNavBar} from "./components/BaseNavBar";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {AppBar, Toolbar} from '@material-ui/core';
import {getUseStyles} from "./AboutusStyles";
import {useHistory} from "react-router-dom";

const useStyles = getUseStyles();

export default function Aboutus() {

    const classes = useStyles();
    let history = useHistory();

    return (
        <>
            <div style={{overflow: 'hidden'}}>
                <div className={classes.full}>


                    <div style={{marginTop: 65, textAlign: "center"}}>
                        <h2>CW Forecast</h2>

                        <h6> A project on Climate Simulation, Weather Forecasting and Weather Related Blogs </h6>
                        <h6>Target audience: Climatologists, Students, Researchers</h6>
                        <h6>All codes are open sourced. This project can be located in following repositories. </h6>
                        <p><a href="https://github.com/Machine-Learning-Project-LJSD/CW-Forecast.git"> Website </a><a
                            href="https://github.com/Machine-Learning-Project-LJSD/Terrain-Generator.git"> CW-Island </a><a
                            href="https://github.com/Machine-Learning-Project-LJSD/CW-bot.git"> Bot </a></p>
                    </div>
                    <div className={classes.allcards}>

                        {/* <AppBar className={classes.component}>
                        <Toolbar >
                            <div className={classes.back_btn_about}>
                                <button onClick={() => history.goBack()}>Back</button>
                            </div>
                            <div className={classes.container}>
                                <Typography variant="h4"> About </Typography>
                            </div>
                        </Toolbar>
                    </AppBar> */}

                        <div>
                            <BaseNavBar/>
                        </div>

                        <Card className={classes.root1}>
                            <CardActionArea>
                                <CardMedia className={classes.media1}/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Sadman Saadat
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Email: sadmansaadat26@iut-dhaka.edu
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" className={classes.btn} onClick={() => {
                                    window.location.href = "https://github.com/Sadman-Saadat"
                                }}>
                                    Github Profile
                                </Button>
                            </CardActions>
                        </Card>
                        <br/>


                        <Card className={classes.root2}>
                            <CardActionArea>
                                <CardMedia className={classes.media2}/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Khalid Masum
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Email: khalidmasum@iut-dhaka.edu
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" className={classes.btn} onClick={() => {
                                    window.location.href = "https://github.com/Labnann"
                                }}>
                                    Github Profile
                                </Button>
                            </CardActions>
                        </Card>
                        <br/>

                        <Card className={classes.root3}>
                            <CardActionArea>
                                <CardMedia className={classes.media3}/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Jisan Anam
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Email: jishananam@iut-dhaka.edu
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" className={classes.btn} onClick={() => {
                                    window.location.href = "https://github.com/Jisan129"
                                }}>
                                    Github Profile
                                </Button>
                            </CardActions>
                        </Card>

                        <Card className={classes.root4}>
                            <CardActionArea>
                                <CardMedia className={classes.media4}/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Hasnaine Ahmed Dihan
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Email: hasnainedihan@iut-dhaka.edu
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" className={classes.btn} onClick={() => {
                                    window.location.href = "https://github.com/dihanahmed"
                                }}>
                                    Github Profile
                                </Button>
                            </CardActions>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )

}

export {Aboutus};