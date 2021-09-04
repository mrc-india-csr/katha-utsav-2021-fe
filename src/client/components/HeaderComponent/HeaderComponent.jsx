import React, { useState } from 'react';
import BannerComponent from '../BannerComponent/BannerComponent';
import Logo from '../../assets/images/katha-logo.png';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '../../assets/images/MenuIcon.png';
import Grid from "@material-ui/core/Grid";
import HeroImg from '../../assets/images/hero-bg.png';
import DropDownButton from '../common/Button/DropDownButton';
import { Link } from 'react-scroll';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    menu: {
        backgroundColor: "#FECB05",
        color: "white",

        borderRadius: "0"
    },
    menuRegistration: {
        backgroundColor: "#fff",
        color: "#98248D",

    },
    appBar: {
        zIndex: theme.zIndex.modal + 1
    },
    toolbar: {
        ...theme.mixins.toolbar,
        marginBottom: "2rem",
        [theme.breakpoints.down('md')]: {
            marginBottom: "1.5rem",
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: "1rem",
        },
    },
    selectedItem: {
        fontFamily: "Poppins-Medium",
        fontWeight: 700,
        fontSize: "1rem",
        textTransform: "none",
        opacity: 1
    },
    menuItem: {
        fontFamily: "Poppins-Medium",
        fontWeight: 700,
        fontSize: "1rem",
        textTransform: "none",
        opacity: 1,
        color: "#212832",
        "&:hover": {
            opacity: 0.85
        }
    },
    drawerIconContainer: {
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    headerContainerMobile: {
        backgroundColor: "#FECB05",
        padding: "0 1rem",
        width: "100%",

    },
    bannerText: {
        marginTop: "2rem",
        color: "#98248D",
        fontSize: "2.9rem",
        fontFamily: 'Fredoka One'
    },
    storyText: {
        color: '#000000',
        fontFamily: 'Fredoka One',
        fontSize: '24px',
        marginTop: "0.5rem"
    },
    bannerImage: {
        textAlign: "center",
        marginLeft: "1rem"
    },
    styleFormat: {
        color: "#66645E",
        fontFamily: "Poppins-Regular",
        fontSize: "1rem",
        marginLeft: "1rem",
    },
    buttonArrow: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: "1em",
        marginBottom: "2em",
        color: "#98248D",
        fontFamily: 'Fredoka One',

    },
    contactUs: {
        fontFamily: 'Fredoka One',
        color: "#98248D",
        fontWeight: "normal",
        fontSize: "18px"
    },
    cta: {
        marginBottom: "10rem"
    },
    container: {
        paddingRight: "2rem",
        paddingLeft: "2rem",
        paddingBottom: "10rem"
    },
    tabsContainer: {
    },
    tab: {
        minWidth: 10,
        fontFamily: "Poppins",
        fontSize: "0.75rem",
        color: "#000",
        fontWeight:"500",
        [theme.breakpoints.up("lg")]: {
            fontSize: "1.5rem",
            minWidth: 15
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: "1.5rem",
            minWidth: 20
        }
    }
}));

const HeaderComponent = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setValue] = useState(0);
    let imageWidth = "inherit";
    let imageHeight = "inherit";
    const matchesXL = useMediaQuery(theme.breakpoints.up('xl'));
    const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));


    if(matchesXL)
    {
        imageWidth ="250px";
        imageHeight = "133px";
    }
    if(matchesLG)
    {
        imageWidth ="250px";
        imageHeight = "133px";
    }


    const tabProperties = [
        { name: "Why Katha", url: "whykatha" },
        { name: "Process", url: "process" },
        { name: "About Katha 21", url: "about-us" },
        { name: "Schedule", url: "schedule" },
        { name: "Gallery", url: "katha-history" },
        { name: "Mentors", url: "mentors" },

    ]

    const menuServiceProperties = [
        { name: 'For Individuals', showPopUpFun: props.showIndividualPopUp },
        { name: 'For Schools', showPopUpFun: props.showSchoolPopUp },
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabs = (
        <React.Fragment>
            <div className='header-container'>
                <Grid container direction="column" className={classes.container}>
                    <Grid item container direction="row" justifyContent="space-between" alignItems="center" style={{ width: "100%", paddingTop: "1rem", paddingBottom: "1rem" }}>
                        <Grid item style={{marginLeft: "40px"}}>
                            <img src={Logo} alt="logo" width={imageWidth} height={imageHeight} />
                        </Grid>
                        <Grid item >
                            <Tabs indicatorColor="primary" className={classes.tabsContainer}>
                                {
                                    tabProperties.map((option, index) => (
                                        <Grid item>
                                            <Link to={option.url} spy={true} smooth={true}>
                                                <Tab key={option.name} label={option.name} className={classes.tab} />
                                            </Link>
                                        </Grid>
                                    ))
                                }
                            </Tabs>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <BannerComponent menuServiceProperties={menuServiceProperties} />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );

    const ContactUs = (
        <Typography gutterBottom variant="subtitle1" className={classes.contactUs}>Contact us</Typography>
    )


    const drawer = (
        <React.Fragment>

            <SwipeableDrawer classes={{ paper: classes.menu }} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
                <List disablePadding>
                    {
                        tabProperties.map((option, index) => (
                            <Link to={option.url} spy={true} smooth={true}>
                                <ListItem key={option.name} selected={value === index}
                                    onClick={(e) => { handleChange(e, index); setOpenDrawer(false) }} divider button>
                                    <ListItemText classes={{ root: value !== index ? classes.menuItem : classes.selectedItem }} disableTypography>{option.name}</ListItemText>
                                </ListItem>
                            </Link>
                        ))
                    }
                </List>

            </SwipeableDrawer>

            <Grid container direction="column" className={classes.headerContainerMobile}>
                <Grid item container className={classes.headerContainerMobile} direction="row" justifyContent="flex-start" alignItems="center">
                    <Grid item>
                        <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                            <img src={MenuIcon} alt="menu Icon" />
                        </IconButton>
                    </Grid>

                    <Grid item style={{ margin: "0 auto" }}>
                        <img alt src={Logo} alt="title" width="168" height="90" />
                    </Grid>



                </Grid>

                <Grid item>
                    <Typography gutterBottom variant="h1" className={classes.bannerText}>Katha Utsav 2021</Typography>
                </Grid>

                <Grid item>
                    <Typography gutterBottom variant="h4" className={classes.storyText}>Celebrating Story!</Typography>
                </Grid>
                <Grid item container alignItems="center" direction="column">
                    <Grid item>
                        <img src={HeroImg} width="250" height="200" alt="heroimg" className={classes.bannerImage} />
                    </Grid>
                </Grid>

                <Grid item>
                    <Typography gutterBottom variant="body2" className={classes.styleFormat}>Search for Excellence in Creative <br /> Writing is here...</Typography>
                </Grid>

                <Grid item container className={classes.cta} alignItems="center" direction="column">
                    <Grid item>
                        {<DropDownButton menuServiceProperties={menuServiceProperties} />}
                    </Grid>
                    <Grid item>
                        {ContactUs}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>

    );




    return (
        <React.Fragment>
            <ElevationScroll>
                {matchesSM ? drawer : tabs}
            </ElevationScroll>

        </React.Fragment>
    )
}

export default HeaderComponent;


