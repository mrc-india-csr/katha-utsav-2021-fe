import React from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import '../../../styles/main.scss';

const useStyles = makeStyles(theme => ({
    ContactButton: props => ({
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

const ContactUsButton = (props) => {
    const classes = useStyles(props);

    return (
        <Button component={Link} to="/contact" className={classes.ContactButton}>Contact Us</Button>
    );
};

export default ContactUsButton;