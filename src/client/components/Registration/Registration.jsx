import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    background: {
        padding: '5rem',
        width: "100%",
        [theme.breakpoints.down("md")]: {
            padding: '2rem',
        },
        [theme.breakpoints.down(theme.breakpoints.values.md - 192)]: {
            display: 'block',
        }
    },
    button: {
        fontFamily: "Fredoka One",
        height: '64px',
        width: '278px',
        borderRadius: '8px',
        padding: '20px, 24px, 20px, 24px',
        backgroundColor: '#FECB05',
        fontWeight: 400,
        textTransform: 'capitalize',
        alignItems: 'center'
    },
    header: {
        width: '378px',
        [theme.breakpoints.down("md")]: {
            textAlign: "inherit",
        }
    }
}));


const Registration = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    
    const onSchoolRegistration = () => {
        const { showSchoolPopUp } = props;
        showSchoolPopUp(true);
    }

    const onStudentRegistration = ()=> {
        const { showIndividualPopUp } = props;
        showIndividualPopUp(true);
    }
    return (
        <Grid container className={classes.background}>
            <Grid item xs={6}>
                    <h3 className={classes.header}>Student ?</h3>
                    <Button onClick={onStudentRegistration} className={classes.button}>{matchesMd ? 'For Students': 'For Individual Registration' }</Button>
            </Grid>
            <Grid item xs={6}>
                <h3 className={classes.header}>School ?</h3>
                <Button onClick={onSchoolRegistration} className={classes.button}>{matchesMd ? 'For School': 'For School Registration'}</Button>
            </Grid>
        </Grid>
    );
};

export default Registration;