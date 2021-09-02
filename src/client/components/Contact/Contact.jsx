import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';


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
        lineHeight: '24px',
        fontWeight: 'bold',
        fontSize: "0.65rem",
        textTransform: "none",
        [theme.breakpoints.down("sm")]: {
            width: 320
        },
        [theme.breakpoints.down("xs")]: {
            width: 260
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

    const Validate = () => {
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
        if (!errorObject.isError) {
            console.log('entered');
        }
    }

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


    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    return (

        <Grid container direction="column" className={classes.background}>
            {/*---Cross Mark---*/}
            <Grid item container justifyContent="flex-end">
                <Grid item component={Link} to="/">
                    <img alt src={close} alt="crossmark" width="20" height="20" />
                </Grid>
            </Grid>

            {/*---Title and subtitle---*/}
            <Grid item container alignItems="center" direction="column">
                <Grid item>
                    <img alt src={Logo} alt="title" width="168" height="90" />
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="subtitle2" className={classes.RegistrationForm}>Registration Form for Students</Typography>
                </Grid>
            </Grid>

            {/**Contact Form*/}
            {true && <Grid item container alignItems={matchesXS ? "center" : "center"} direction="column" >
                <Card className={classes.registrationCard}>
                    <CardContent>
                        <Grid spacing={1} container alignItems="center" direction="column" style={{ textAlign: "center", width: matchesXS ? 240 : matchesSM ? 350 : "inherit" }}>
                            <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit" }}>
                                <Typography gutterBottom variant="body1" style={{ fontSize: "1rem" }} className={classes.RegistrationForm}>Contact Us</Typography>
                            </Grid>

                            <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit", marginBottom: "0.75rem" }}>
                                <InputField errorMessage={nameMessage} isError={nameMessage.length > 0} fieldName={"Name"} onChangeFunc={setName} eventValidation={ContactValidation} value={name} />
                            </Grid>

                            <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit", marginBottom: "0.75rem" }}>
                                <InputField errorMessage={phoneNumberMessage} isError={phoneNumberMessage.length > 0} fieldName={"Phone Number"} onChangeFunc={setPhoneNumber} eventValidation={ContactValidation} value={phoneNumber} />
                            </Grid>

                            <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit", marginBottom: "0.75rem" }}>
                                <InputField errorMessage={emailIdMessage} isError={emailIdMessage.length > 0} fieldName={"Email ID"} onChangeFunc={setEmailId} eventValidation={ContactValidation} value={emailId} />
                            </Grid>

                            <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 320 : "inherit", marginBottom: "0.75rem" }}>
                                <Comment errorMessage={commentMessage} isError={commentMessage.length > 0} fieldName={"Message"} eventValidation={ContactValidation} />
                            </Grid>

                            <Grid item style={{ width: matchesXS ? 220 : matchesSM ? 350 : "inherit" }}>
                                <PaymentButton onButtonClick={Validate} name={"Submit"} />
                            </Grid>

                            <Grid item component={Button} onClick={onReset} style={{ width: matchesXS ? 220 : "inherit" }}>
                                <Typography gutterBottom style={{ "textAlign": "center" }} variant="body2" className={classes.Reset}>Reset</Typography>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
                <div className={classes.registrationDivBackground} />
            </Grid>}
        </Grid>

    );
};

export default Contact;