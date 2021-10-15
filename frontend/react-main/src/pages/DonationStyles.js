import { makeStyles } from "@material-ui/core/styles";
import Background1 from "../images/pexels-felix-mittermeier-957024.jpg";
import Background2 from "../images/media2.jpg";
import Background3 from "../images/shobuj.jpg";

export function getUseStyles() {
    return makeStyles({
        component_don: {
            background: '#C6CAB1',
            color: 'black'
        },
        container_don: {
            justifyContent: 'center',
            display: 'flex',
            textAlign: 'center',
            flexGrow: '1'
            // height: '80px'
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
        },
        back_btn: {
            // float: "left",
            // marginLeft: "20px",
            // padding: "50px"
        }

    });
}