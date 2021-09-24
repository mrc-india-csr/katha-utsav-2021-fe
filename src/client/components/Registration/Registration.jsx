import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    background: {
        padding: '5rem',
        width: "100%",
        [theme.breakpoints.down("md")]: {
            padding: '2rem',
        },

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
        alignItems: 'center',
        "&:hover": {
            backgroundColor: "#FEC000"
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: "1.125rem"
        }
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
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    const onSchoolRegistration = () => {
        window.open('/school-registration','_blank')
    }

    const onStudentRegistration = () => {
        window.open('/individual-registration','_blank')
    }
    return (
        <Grid container className={classes.background} direction={ matchesXS?"column":"row"}>
            <Grid xl={6} lg={6} xl={6} md={6} item container direction="column" alignItems={matchesXS?"center":"flex-end"} style={{marginRight:"2rem"}}>

                <Grid item>
                    <Button onClick={onStudentRegistration} className={classes.button}>{matchesMd ? 'For Students' : 'For Individual Registration'}</Button>
                </Grid>
            </Grid>

            <Grid xl={6} lg={5} xl={5} md={5} item container direction="column" alignItems={matchesXS?"center":"flex-start"}  style={{marginLeft: matchesXS?"inherit":"1rem"}}>

                <Grid item>
                    <Button onClick={onSchoolRegistration} className={classes.button}>{matchesMd ? 'For School' : 'For School Registration'}</Button>
                </Grid>

            </Grid>

        </Grid>
    );
};

export default Registration;