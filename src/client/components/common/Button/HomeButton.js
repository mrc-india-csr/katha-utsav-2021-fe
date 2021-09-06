import React from "react";
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import '../../../styles/main.scss';

const useStyles = makeStyles(theme => ({
    HomeButton: props => ({
        position: "absolute",
        width: "540px",
        height: "60px",
        top: "0px",
        left: "0px",
        fontFamily: "Fredoka One",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "24px",
        textAlign: "center",
        color: props.textColor
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