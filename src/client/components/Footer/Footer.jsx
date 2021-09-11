import React, { useState, useEffect, useRef } from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Logo from '../../assets/images/katha-logo.png';
import close from '../../assets/images/close.png';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputField from '../common/TextField/InputField';
import DropDown from '../common/Select/DropDown';
import PaymentButton from '../common/Button/PayButton';
import FileUploader from '../common/FileUploader';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import _ from 'lodash';
import footerkatha from '../../assets/images/footerkatha.png';
import Message from '../../assets/images/Message.png';
import Mobile from '../../assets/images/Mobile.png'
import youtube from '../../assets/images/youtube.png';
import twitter from '../../assets/images/twitter.png';
import instagram from '../../assets/images/instagram.png';
import football from '../../assets/images/football.png';



const useStyles = makeStyles(theme => ({
    background: {
        padding: '2rem',
        backgroundColor: "#F3F0EA",
        width: "100%",
    },
    details: {
        marginLeft: "4rem",
        [theme.breakpoints.up("xs")]: {
            marginLeft:"2rem",
            marginBottom: "1rem"
        }
    },
    address: {
        fontSize: "0.8rem",
        fontFamily: "Poppins",
    },
    copyRights: {
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
        fontFamily: "Poppins",
        fontSize: "0.85rem",
    },
    ReachUs: {
        marginTop: "1rem",
        fontSize: "1.25rem",
        fontFamily: 'Inter',
    },
    socialMedia: {
        fontFamily: 'Inter',
        fontSize: "0.5rem",
        [theme.breakpoints.up("xs")]: {
            marginLeft:"2rem",
            marginBottom: "1rem"
        }

    },
    IconMessage: {
        marginLeft: "1rem",
        marginTop: "0.25rem",
        [theme.breakpoints.up("xs")]: {
            marginLeft:"0rem",
            marginBottom: "1rem"
        }
    },
    MessageDetails: {
        marginLeft: "0.5rem",
        fontWeight: "400"
    },
    icon: {
        marginLeft: "0.5rem"
    },
    groupIcons: {
        marginTop: "1rem",
    }

}));



const Footer = () => {
    const theme = useTheme();
    const classes = useStyles();

    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));
    const matchesXL = useMediaQuery(theme.breakpoints.up('xl'));

    const groupIcons = (
        <Grid item container direction="row" className={classes.groupIcons}>
            <Grid item component={"a"} href="#">
                <img alt="Instagram" width={20} height={20} src={instagram} />
            </Grid>
            <Grid item component={"a"} href="#">
                <img alt="football" width={20} height={20} src={football} className={classes.icon} />
            </Grid>
            <Grid item component={"a"} href="#">
                <img alt="twitter" width={20} height={20} src={twitter} className={classes.icon} />
            </Grid>
            <Grid item component={"a"} href="#">
                <img alt="youtube" width={20} height={20} src={youtube} className={classes.icon} />
            </Grid>
        </Grid>
    );

    const copyRights = (
        <Grid item >
            <Typography gutterBottom variant="body1" className={classes.copyRights}>© 2021 Katha.org. All rights reserved</Typography>
        </Grid>
    );

    return (
        <Grid container direction="row" className={classes.background}>
            <Grid item container className={classes.details} direction="column" xl lg md sm>
                <Grid item>
                    <img src={footerkatha} width={50} height={50} />
                </Grid>

                <Grid item >
                    <Typography gutterBottom variant="body1" className={classes.address}>KATHA A-3, <br />
                        Sarvodaya Enclave Sri Aurobindo Marg, <br />
                        New Delhi – 110017</Typography>
                </Grid>

                {matchesXS? groupIcons : copyRights}
            </Grid>
            <Grid item container direction="column" className={classes.socialMedia} xl lg md sm>
                <Grid item >
                    <Typography gutterBottom variant="body1" className={classes.ReachUs}>Reach us</Typography>
                </Grid>
                <Grid item direction="column" className={classes.IconMessage}>
                    <Grid container>
                        <Grid item container direction="row" alignItems="center">
                            <Grid item>
                                <img src={Message} width={15} height={15} />
                            </Grid>
                            <Grid item >
                                <Typography gutterBottom variant="body1" className={classes.MessageDetails}>event@katha.org</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="row" alignItems="center">
                            <Grid item>
                                <img src={Mobile} width={15} height={15} />
                            </Grid>
                            <Grid item >
                                <Typography gutterBottom variant="body1" className={classes.MessageDetails}>Will be updated soon</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {matchesXS? copyRights:  groupIcons}

            </Grid>
        </Grid>
    )
};


export default Footer;