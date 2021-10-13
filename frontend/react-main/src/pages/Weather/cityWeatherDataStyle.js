import { makeStyles } from "@material-ui/core/styles";
// import Background1 from "../images/pexels-felix-mittermeier-957024.jpg";
// import Background2 from "../images/media2.jpg";
// import Background3 from "../images/shobuj.jpg";
import Night from "../../images/night.jpg";

export function getWeatherStyles() {
    return makeStyles({
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
        btn: {
            marginLeft: '20px'
        },
        allcards: {
            padding: '200px 100px 500px 70px',
            maxWidth: '2000px',
            display: 'flex',
            flexDirection: 'wrap',
        }

    });
}