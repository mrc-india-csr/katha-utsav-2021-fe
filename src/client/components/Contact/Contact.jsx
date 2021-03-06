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
import PaymentButton from '../common/Button/PayButton';
import Comment from '../common/TextField/Comment';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundColor: '#FEDB50',
        padding: 0,
        width: "100%",
        backgroundRepeat: "no-repeat",
    },
    RegistrationForm: {
        color: "#66645E",
        fontWeight: "400",
        fontSize: "1rem",
        [theme.breakpoints.up("lg")]: {
            fontSize: "1.5rem"
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: "2rem"
        },
    },
    registrationCard: {

        [theme.breakpoints.down("xs")]: {
            width: "85%"
        },
    },
    registrationDivBackground: {
        backgroundColor: '#FEDB50',
        height: "62px",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    UploadFile: {
        width: 360,
        height: 200,
        textTransform: "none",
        backgroundColor: "#FDF6D8",
        "&:hover": {
            backgroundColor: "#FDF6D8"
        },
        [theme.breakpoints.down("sm")]: {
            width: 320
        },
        [theme.breakpoints.down("xs")]: {
            width: 260
        },

    },
    Reset: {
        fontFamily: 'Fredoka One',
        lineHeight: '24px',
        fontWeight: 'bold',
        fontSize: "0.65rem",
        textTransform: "none",
        [theme.breakpoints.up("lg")]: {
            width: 470,
            fontSize: "1rem"
        },
        [theme.breakpoints.up("xl")]: {
            width: 520,
            fontSize: "1.25rem"
        },
        [theme.breakpoints.down("sm")]: {

        },
        [theme.breakpoints.down("xs")]: {

        },
    },
    supportedDocument: {
        fontWeight: 400,
        color: "#000000",
        lineHeight: "1.25rem",
    },
    errorMessage: {
        color: "#f44336",
        fontWeight: 400,
        lineHeight: "1rem",
    }
}));

const Contact = (props) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [nameMessage, setNameMessage] = useState('');

    const [emailId, setEmailId] = useState('');
    const [emailIdMessage, setEmailIdMessage] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberMessage, setPhoneNumberMessage] = useState('');

    const [comment, setComment] = useState('');
    const [commentMessage, setCommentMessage] = useState('');

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: "", backgroundColor: "" });

    const Validate = async () => {
        let errorObject = { isError: false }
        let emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailId);
        let phoneNumberValid = /^\d+$/.test(phoneNumber);

        if (_.isNull(emailId) || _.isEmpty(emailId) || !emailValid) {
            setEmailIdMessage("Please enter a valid email")
            errorObject.isError = true;
        }
        if (_.isEmpty(name) || _.isNull(name)) {
            setNameMessage("Please enter a valid name");
            errorObject.isError = true;
        }
        if (_.isNull(phoneNumber) || _.isEmpty(phoneNumber) || !phoneNumberValid) {
            setPhoneNumberMessage("Please enter a valid phoneNumber");
            errorObject.isError = true;
        }
        if (_.isEmpty(comment) || _.isNull(comment)) {
            setCommentMessage("Please enter a valid message");
            errorObject.isError = true;
        }
        if (!errorObject.isError && !loading) {
            setLoading(true);
            props.UploadDetails(name, emailId, phoneNumber, comment);
            setLoading(false);
            setName("");
            setNameMessage("");
            setComment("");
            setCommentMessage("");
            setEmailId("");
            setEmailIdMessage("");
            setPhoneNumber("");
            setPhoneNumberMessage("");
            await props.showLoader(true);

            if (props.showSnackBar && !_.isNil(props.isError) && !props.isError) {
                await props.showLoader(false);

                // props.showResponsePopUp(true);
                // props.setRegistrationData("success", "Query Submitted Successfully!");
                const info = <Typography variant="h6" style={{ fontFamily: "Poppins" }}>Query Submitted Successfully! Our team will reply to your query / reach out to you ASAP</Typography>
                setAlert({ open: true, message: info, backgroundColor: "#4BB543" })
            } else if (props.showSnackBar && props.isError) {
                await props.showLoader(false);

                //props.showResponsePopUp(true);
                const info = <Typography variant="h6" style={{ fontFamily: "Poppins" }}>Something went wrong, please try again!</Typography>

                setAlert({ open: true, message: info, backgroundColor: "#FF3232" })
            }
        }
    }

    useEffect(async() => {
        console.log('showsnackbar', props.showSnackBar);
        if (props.showSnackBar && !_.isNil(props.isError) && !props.isError) {
            // props.showResponsePopUp(true);
            // props.setRegistrationData("success", "Query Submitted Successfully!");
            await props.showLoader(false);
            const info = <Typography variant="h6" style={{ fontFamily: "Poppins" }}>Query Submitted Successfully! Our team will reply to your query / reach out to you ASAP</Typography>
            setAlert({ open: true, message: info, backgroundColor: "#4BB543" })
        } else if (props.showSnackBar && props.isError) {
            //props.showResponsePopUp(true);
            await props.showLoader(false);

            const info = <Typography variant="h6" style={{ fontFamily: "Poppins" }}>Something went wrong, please try again!</Typography>

            setAlert({ open: true, message: info, backgroundColor: "#FF3232" })
        }
    }, [props.isError]);


    const closePopUp = () => {
        props.showPopUp(false);
    }

    const onReset = () => {
        setName('');
        setNameMessage('');
        setEmailId('');
        setEmailIdMessage('');
        setComment('');
        setCommentMessage('');
        setPhoneNumber('');
        setPhoneNumberMessage('');
    }

    const ContactValidation = (event) => {
        if (_.includes(['Email ID', 'Name', 'Phone Number', 'Message'], event.target.id) && event.target.value[0] == ' ') return;

        switch (event.target.id) {
            case 'Email ID':
                let emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                if (_.isNull(event.target.value) || _.isEmpty(event.target.value) || !emailValid) {
                    setEmailIdMessage("Please enter a valid email")
                    setEmailId(event.target.value);
                }
                else {
                    setEmailId(event.target.value);
                    setEmailIdMessage("")
                }
                break;
            case 'Name':
                if (_.isEmpty(event.target.value) || _.isNull(event.target.value)) {
                    setNameMessage("Please enter a valid name");
                    setName(event.target.value);
                }
                else {
                    setName(event.target.value);
                    setNameMessage("");
                }
                break;
            case 'Message':
                if (_.isEmpty(event.target.value) || _.isNull(event.target.value)) {
                    setCommentMessage("Please enter a valid message");
                    setComment(event.target.value);
                }
                else {
                    setComment(event.target.value);
                    setCommentMessage("");
                }
                break;
            case 'Phone Number':
                let phoneNumberValid = /^\d+$/.test(event.target.value);
                if (_.isNull(event.target.value) || _.isEmpty(event.target.value) || !phoneNumberValid) {
                    setPhoneNumberMessage("Please enter a valid phoneNumber");
                    setPhoneNumber(event.target.value);
                }
                else {
                    setPhoneNumber(event.target.value);
                    setPhoneNumberMessage("");
                }
                break;
            default:
                break;
        }
    }

    const theme = useTheme();
    let history = useHistory()
    console.log('open', alert);

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

    const displayButton = loading ? <CircularProgress size={30} style={{ color: "#fff" }} /> : "Submit";

    return (

        <Grid container direction="column" className={classes.background}>
            {/*---Cross Mark---*/}
            <Grid item container justifyContent="flex-end">
                <Grid item component={Button} onClick={() => { props.showSnackBarFunc(false); history.goBack(); history.clear }} >
                    <img alt src={close} alt="crossmark" width={matchesXL ? "50" : matchesLG ? "50" : "30"} height={matchesXL ? "50" : matchesLG ? "50" : "30"} />
                </Grid>
            </Grid>

            {/*---Title and subtitle---*/}
            <Grid item container alignItems="center" direction="column">
                <Grid item>
                    <img alt src={Logo} alt="title" width={logoWidth} height={logoHeight} />
                </Grid>
            </Grid>

            {/**Contact Form*/}
            {true && <Grid item container alignItems={matchesXS ? "center" : "center"} direction="column" >
                <Card className={classes.registrationCard}>
                    <CardContent>
                        <Grid spacing={1} item container alignItems="center" direction="column" style={{ textAlign: "center", width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit" }}>
                            <Grid item style={{ width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit" }}>
                                <Typography gutterBottom variant="body1" className={classes.RegistrationForm}>Contact Us</Typography>
                            </Grid>


                            <Grid item style={{ width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit", marginBottom: "0.75rem" }}>
                                <InputField errorMessage={nameMessage} isError={nameMessage.length !== 0} fieldName={"Name"} onChangeFunc={setName} eventValidation={ContactValidation} value={name} />
                            </Grid>

                            <Grid item style={{ width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit", marginBottom: "0.75rem" }}>
                                <InputField errorMessage={phoneNumberMessage} isError={phoneNumberMessage.length !== 0} fieldName={"Phone Number"} onChangeFunc={setPhoneNumber} eventValidation={ContactValidation} value={phoneNumber} />
                            </Grid>

                            <Grid item style={{ width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit", marginBottom: "0.75rem" }}>
                                <InputField errorMessage={emailIdMessage} isError={emailIdMessage.length !== 0} fieldName={"Email ID"} onChangeFunc={setEmailId} eventValidation={ContactValidation} value={emailId} />
                            </Grid>

                            <Grid item style={{ width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit", marginBottom: "0.75rem" }}>
                                <Comment errorMessage={commentMessage} isError={commentMessage.length !== 0} fieldName={"Message"} eventValidation={ContactValidation} value={comment} />
                            </Grid>

                            <Grid item style={{ width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit", marginLeft: matchesXS ? "0rem" : 0 }} >
                                <Typography gutterBottom variant="h6" style={{ maxWidth: matchesLG ? "30rem" : "inherit", fontSize: matchesXL ? "1rem" : matchesLG ? "1rem" : "0.65rem", color: "#000" }} className={classes.supportedDocument}>Note : All fields are mandatory
                                </Typography>
                            </Grid>

                            <Grid item style={{ width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit" }}>
                                <PaymentButton onButtonClick={Validate} name={displayButton} />
                            </Grid>


                            <Grid item component={Button} onClick={onReset} style={{ width: matchesXS ? "100%" : "inherit" }}>
                                <Typography component={Button} onClick={onReset} gutterBottom variant="body2" className={classes.Reset}>Reset</Typography>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
                <div className={classes.registrationDivBackground} />
            </Grid>}
            <Snackbar
                autoHideDuration={10000}
                open={alert.open}
                message={alert.message}
                ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                onClose={() => setAlert({ ...alert, open: false })}></Snackbar>
        </Grid>

    );
};

export default Contact;