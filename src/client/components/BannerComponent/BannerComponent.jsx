import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/images/hero-bg.png';
import DropDownButton from '../common/Button/DropDownButton';
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    contactUs: {
        fontFamily: 'Fredoka One',
        color: "#98248D",
        fontWeight: "normal",
        fontSize: "18px",
        marginTop: "10px"
    }
}));

const BannerComponent = (props) => {
    const classes = useStyles();

    const ContactUs = (
        <Typography component={Link} to="/contact" gutterBottom variant="subtitle1" className={classes.contactUs}>Contact us</Typography>
    )


    return (
        <React.Fragment>
            <div className='banner-wrap'>
                <div className='banner-text'>
                    <h1>Katha Utsav 2021</h1>
                    <p className='story-text'>Celebrating Story!</p>
                    <p className='style-format'>Search for Excellence in Creative <br />
                        Writing is here...</p>
                    <Grid container direction="row" justifyContent="space-between">
                        <Grid item>
                            <DropDownButton menuServiceProperties={props.menuServiceProperties} />
                        </Grid>
                        <Grid item>
                            {ContactUs}
                        </Grid>
                    </Grid>
                </div>
                <div className='banner-image'>
                    <img src={HeroImg} alt="hero" width="600px" />;
                </div>
            </div>
        </React.Fragment>
    )
}

export default BannerComponent;


