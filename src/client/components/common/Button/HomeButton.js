import React from "react";
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import '../../../styles/main.scss';

const useStyles = makeStyles(theme => ({
    HomeButton: props => ({
        position: "absolute",
        // backgroundColor:"#98248D",
        // color: "#ffffff",
        width: "200px",
        height: "24px",
        top: "18px",
        left: "180px",
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

    return (
        
        <Button component={Link} to="/" className={classes.HomeButton}>Back to Home</Button>
    );
};

export default HomeButton