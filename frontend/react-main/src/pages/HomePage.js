import React from "react";
import {makeStyles} from "@material-ui/core";
import Background from "./../images/green2.jpg";
import "./HomePage.css";
import {BaseNavBar} from "./components/BaseNavBar";

const useStyles = makeStyles({
  component: {
    background: "#FFFFFF",
    color: "black",
  },
  container: {
    justifyContent: "center",
  },
  design: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  },
});

// const Header = () => {
// 	return (

// 	)
// };

const Homepage = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.design}>
        <div>
          <BaseNavBar/>
        </div>


        <div className='t1'>
          {/* <Typography variant='h3' color='#ffffff'> CW Forecast</Typography> */}
          <p className="text"> CW Forecast </p>
        </div>
      </div>
    </div>
  );
};

export { Homepage };
