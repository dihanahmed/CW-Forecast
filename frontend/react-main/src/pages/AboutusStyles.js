import { makeStyles } from "@material-ui/core/styles";
import Sadman from "../images/Sadman2.jpg";
import Labnan from "../images/Labnan.jpg";
import Jisan from "../images/Jisan.jpg";
import Dihan from "../images/Dihan2.jpg";

//E5D2AC



export function getUseStyles() {
    return makeStyles({

        full: {
            backgroundColor: '#FFF2D9',
            fontFamily: 'cinzel'
        },
        component: {
            background: '#C6CAB1',
            color: 'black'
        },
        container: {
            justifyContent: 'center',
            display: 'flex',
            textAlign: 'center',
            flexGrow: '1'
        },

        pidea: {
            marginTop: '100px',
            padding: '8px 10px 50px 60px',
        },

        root1: {
            backgroundColor: '#e4f4ef',
            maxWidth: 1000,
            marginRight: '60px'

        },

        root2: {
            backgroundColor: '#dad6db',
            maxWidth: 1000,
            marginLeft: '60px',
            marginRight: '60px'

        },
        root3: {
            backgroundColor: '#E3EEAB',
            maxWidth: 1000,
            marginLeft: '60px',
            marginRight: '60px'

        },
        root4: {
            backgroundColor: '#E3EEAB',
            maxWidth: 1000,
            marginLeft: '60px'

        },
        media1: {
            backgroundImage: `url(${Sadman})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '30vh',
        },
        media2: {
            backgroundImage: `url(${Labnan})`,
            backgroundSize: '170px 200px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-30px px',
            width: '100vw',
            height: '30vh',
        },
        media3: {
            backgroundImage: `url(${Jisan})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-30px 0px',
            width: '100vw',
            height: '30vh',
        },

        media4: {
            backgroundImage: `url(${Dihan})`,
            backgroundSize: '180px 200px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-30px 0px',
            width: '100vw',
            height: '30vh',
        },
        btn: {
            marginLeft: '20px'
        },
        allcards: {
            padding: '80px 100px 500px 70px',
            maxWidth: '2000px',
            display: 'flex',
            flexDirection: 'wrap',
        }

    });
}