import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    PaymentButton:{
        backgroundColor:"#98248D",
        color: "#ffffff",
        width: 400,
        height: 40,
        textTransform: "none",
        [theme.breakpoints.up("xl")]: {
            width: 520,
            fontSize: "1.25rem"
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
    }
}));

const PaymentButton = (props) => {
    const classes = useStyles();
    const {onButtonClick, name} = props;

    return (
        <Button className={classes.PaymentButton} onClick= {onButtonClick}>{name}</Button>
    );
};

export default PaymentButton