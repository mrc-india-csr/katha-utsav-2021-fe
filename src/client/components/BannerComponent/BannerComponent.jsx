import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/images/hero-bg.png';
import DropDownButton from '../common/Button/DropDownButton';
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
    contactUs: {
        fontFamily: 'Fredoka One',
        color: "#98248D",
        fontWeight: "normal",
        fontSize: "18px",
        marginTop: "10px"
    },
    bannerWrap: {
        width: "100%",
        padding: "1rem 0rem",
    },
    bannerImage: {
        textAlign: "center"
    },
    storyText: {
        color: " #000000",
        fontFamily: 'Fredoka One',
        fontSize: "24px",
        margin: "0.5rem 0"
    },
    bannerText: {
        marginTop: "2rem",
        color: "#98248D",
        fontSize: "2.9rem",
        fontFamily: 'Fredoka One'
    },
    styleFormat: {
        color: "#66645E",
        fontSize: "24px",
        fontFamily: "Poppins-Regular"
      }
}));

const BannerComponent = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const ContactUs = (
        <Typography component={Link} to="/contact" gutterBottom variant="subtitle1" className={classes.contactUs}>Contact us</Typography>
    )
    const matchesLGUp = useMediaQuery(theme.breakpoints.up('lg'));
    let width ="500px";
    let height = "500px"
   if(matchesLGUp){
     width ="600px";
     height = "600px"
   }

    return (
        <React.Fragment>
            <Grid container direction="row" className={classes.bannerWrap}>
                <Grid item container direction="column" lg={3} md={5} xl={2}>
                    <Grid item>
                        <Typography gutterBottom variant="h1" className={classes.bannerText}>Katha Utsav 2021</Typography>
                    </Grid>
                    <Typography gutterBottom variant="h4" className={classes.storyText}>Celebrating Story!</Typography>
                    <Typography gutterBottom variant="h6" className={classes.styleFormat}>Search for Excellence in Creative <br /> Writing is here...</Typography>

                    <Grid item container direction="row">
                        <Grid item style={{ marginRight: "3rem" }}>
                            <DropDownButton menuServiceProperties={props.menuServiceProperties} />
                        </Grid>
                        <Grid item style={{ marginTop: "0.5rem" }}>
                            {ContactUs}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction="row" xl={10} lg={9} md={7} justifyContent="center">
                    <img src={HeroImg} alt="hero" width={width} height={height} />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default BannerComponent;


