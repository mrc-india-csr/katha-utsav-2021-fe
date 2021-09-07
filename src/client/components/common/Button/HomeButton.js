import React from "react";
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import '../../../styles/main.scss';

const useStyles = makeStyles(theme => ({
    HomeButton: props => ({
        
        color: props.textColor,
        width: 500,
        height: 60,
        fontFamily: 'Fredoka One',
        fontSize: "18px",
        textTransform: "none",
        [theme.breakpoints.up("lg")]: {
            width: 470,
            fontSize: "18px"
        },
        [theme.breakpoints.up("xl")]: {
            width: 520,
            fontSize: "18px"
        },
        [theme.breakpoints.down("sm")]: {
            width: 320
        },

        [theme.breakpoints.down("xs")]: {
            width: 260
        },
        "&:hover":{
            backgroundColor:"#9D4395"
        },
    })
}));

const HomeButton = (props) => {
    const classes = useStyles(props);

    const closePopUp = () => {
        props.showResponsePopUp(false);
        props.showPopUp(false);
    }

    return (

        <Button className={classes.HomeButton}>Back to Home</Button>
    );
};

export default HomeButton