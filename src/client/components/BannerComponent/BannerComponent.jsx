import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/images/hero-bg.png';
//import cians from '../../assets/images/cians.png';
import cians from '../../assets/images/cians.svg';
import DropDownButton from '../common/Button/DropDownButton';
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
    ContactUsGrid: {
        // [theme.breakpoints.up("lg")]: {
        //     marginBottom: "3rem"
        // },
        // [theme.breakpoints.up("xl")]: {
        //     marginBottom: "4rem"
        // }
    },
    contactUs: {
        fontFamily: 'Fredoka One',
        color: "#98248D",
        fontWeight: "normal",
        fontSize: "1.25rem",
        marginTop: "10px",
        textDecoration: "none",
        [theme.breakpoints.up("lg")]: {
            fontSize: "1.5rem",
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: "2rem",
        }
    },
    bannerWrap: {
        width: "100%",
        padding: "1rem 0rem",
        [theme.breakpoints.up("lg")]: {
            paddingLeft: "2rem",
            paddingRight: "2rem"
        },
        [theme.breakpoints.up("xl")]: {
            paddingLeft: "5rem",
            paddingRight: "5rem",
        },
    },
    leftBannerScreen: {
        [theme.breakpoints.up("lg")]: {
            paddingTop: "3rem"
        },
        [theme.breakpoints.up("xl")]: {
            paddingTop: "6rem"
        },
    },
    bannerImage: {
        textAlign: "center"
    },
    storyText: {
        color: " #000000",
        fontFamily: 'Fredoka One',
        fontSize: "2rem",
        [theme.breakpoints.up("lg")]: {
            fontSize: "2rem",
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: "2.5rem",
        }
    },
    bannerText: {
        marginTop: "2rem",
        color: "#98248D",
        fontSize: "2.9rem",
        fontFamily: 'Fredoka One',
        [theme.breakpoints.up("lg")]: {
            fontSize: "4rem",
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: "6rem",
        }
    },
    styleFormat: {
        color: "#66645E",
        fontSize: "1.5rem",
        fontFamily: "Poppins",
        [theme.breakpoints.up("xl")]: {
            fontSize: "3rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "1.5rem",
        },
    },
    registrationFee: {
        color: "#000000",
        fontSize: "1.15rem",
        fontFamily: "Poppins",
        [theme.breakpoints.up("xl")]: {
            fontSize: "1.75rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "1.5rem",
        },
    },
    coSponseredBy: {
        color: "#000000",
        fontSize: "1.15rem",
        fontFamily: "Poppins",
        fontWeight: "500",
        [theme.breakpoints.up("xl")]: {
            fontSize: "1.75rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "1.5rem",
        },
    }
}));

const BannerComponent = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const ContactUs = (
        <Typography component={Link} to="/contact" gutterBottom variant="subtitle1" className={classes.contactUs}>Contact us</Typography>
    )
    const matchesLGUp = useMediaQuery(theme.breakpoints.up('lg'));
    const matchesXL = useMediaQuery(theme.breakpoints.up('xl'));
    let width = "500px";
    let height = "500px"
    if (matchesLGUp) {
        width = "600px";
        height = "600px"
    }
    if (matchesXL) {
        width = "1000px";
        height = "1000px"
    }

    return (
        <React.Fragment>
            <Grid container direction="row" className={classes.bannerWrap}>
                <Grid item container className={classes.leftBannerScreen} direction="column" lg={5} md={5} xl={5}>
                    <Grid item>
                        <Typography variant="h1" className={classes.bannerText}>Katha Utsav 2021</Typography>
                    </Grid>
                    <Typography gutterBottom variant="h4" className={classes.storyText}>Celebrating Story!</Typography>
                    <Typography gutterBottom variant="h6" className={classes.styleFormat}>Search for Excellence in Creative <br /> Writing is here...</Typography>

                    <Grid item container direction="row" alignItems="center">
                        <Grid item style={{ marginRight: "2rem" }}>
                            <DropDownButton menuServiceProperties={props.menuServiceProperties} />
                        </Grid>
                        <Grid item className={classes.ContactUsGrid}>
                            {ContactUs}
                        </Grid>
                    </Grid>

                    <Grid item style={{marginTop: "1rem"}}>
                        <Typography gutterBottom variant="body1" className={classes.registrationFee}>NOTE : Rs 150/- per registration</Typography>
                    </Grid>
                    <Grid item style={{marginTop: "2rem"}}>
                        <Typography gutterBottom variant="body1" className={classes.coSponseredBy}>Co-sponsored by
                        </Typography>
                    </Grid>

                    <a href='https://ciansanalytics.com/' target='_blank'>
                        <Grid item>
                            <img src={cians} alt="hero" width="180" height="30" />
                        </Grid>
                    </a>
                </Grid>
                <Grid item container direction="row" xl={7} lg={7} md={7} justifyContent="center">
                    <img src={HeroImg} alt="hero" width={width} height={height} />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default BannerComponent;


