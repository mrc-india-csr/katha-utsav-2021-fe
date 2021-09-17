import React from 'react';
import StepOne from './StepOne';
import { renderIf } from '../../Utils';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import close from "../../assets/images/close.png"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import StepTwo from "./StepTwo";


const useStyles = makeStyles(theme => ({
    background: {
        backgroundColor: '#FEDB50',
        height: "500vh",
        padding: 0,
        width: "100%",
        backgroundRepeat: "no-repeat",
    },
    RegistrationForm: {
        color: "#66645E",
        fontWeight: "400",
        fontSize: "1rem"
    },
    registrationCard: {

        [theme.breakpoints.down("xs")]: {
            width: "85%"
        },
    },
    registrationDivBackground: {
        backgroundColor: '#FEDB50',
        height: "25vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },

}));



const Transition = React.forwardRef((props, ref) => <Slide ref={ref} direction="up" {...props} />);



const SchoolRegistration = (props) => {

    const theme = useTheme();
    const classes = useStyles();

    const closePopUp = () => {
        props.showPopUp(false);
    }


    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));
    const matchesXL = useMediaQuery(theme.breakpoints.up('xl'));

    let logoWidth = "168";
    let logoHeight = "90";
    if (matchesLG) {
        logoWidth = "198";
        logoHeight = "120"
    }
    if (matchesXL) {
        logoWidth = "218";
        logoHeight = "140"
    }

    return (
        <Dialog fullScreen TransitionComponent={Transition} open={props.showPopUp} onClose={closePopUp} disableEnforceFocus={true}>
            <Grid container direction="column" className={classes.background}>
                {/*---Cross Mark---*/}
                <Grid item container justifyContent="flex-end">
                    <Grid item component={Button} onClick={closePopUp}>
                    <img alt src={close} alt="crossmark" width={matchesXL ? "50" : matchesLG ? "50" : "30"} height={matchesXL ? "50" : matchesLG ? "50" : "30"} />
                    </Grid>
                </Grid>
                    { renderIf
                        (() => props.step === 1,
                        () => ( <StepOne/> ),
                        () => ( <StepTwo/> )
                        )
                    }
            </Grid>
        </Dialog>
    );
};

export default SchoolRegistration;