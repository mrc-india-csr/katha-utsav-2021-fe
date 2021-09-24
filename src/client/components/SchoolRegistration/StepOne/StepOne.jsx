import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import close from "../../../assets/images/close.png"
import Logo from '../../../assets/images/katha-logo.png';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputField from '../../common/TextField/InputField';
import PaymentButton from '../../common/Button/PayButton';

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
        fontSize: "1rem"
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
        lineHeight: '24px',
        fontWeight: 'bold',
        fontSize: "0.65rem",
        textTransform: "none",
        fontFamily: 'Fredoka One',
        [theme.breakpoints.up("lg")]: {
            width: 470,
            fontSize: "1rem"
        },
        [theme.breakpoints.up("xl")]: {
            width: 520,
            fontSize: "1.25rem"
        },
        [theme.breakpoints.down("sm")]: {
            width: 320
        },
        [theme.breakpoints.down("xs")]: {
            width: 260
        },
    }
}));


const StepOne = (props) => {
    const classes = useStyles();


    const [schoolName, setSchoolName] = useState('');
    const [schoolNameMessage, setSchoolNameMessage] = useState(props.schoolNameMessage);
    const [city, setCity] = useState('');
    const [cityMessage, setCityMessage] = useState(props.cityMessage);
    const [schoolCoordinatorName, setSchoolCoordinatorName] = useState('');
    const [schoolCoordinatorNameMessage, setSchoolCoordinatorNameMessage] = useState(props.schoolCoordinatorNameMessage);
    const [schoolEmailId, setSchoolEmailId] = useState('');
    const [emailIdMessage, setEmailIdMessage] = useState(props.emailIdMessage);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberMessage, setPhoneNumberMessage] = useState(props.phoneNumberMessage);


    const validate = () => {
        let isError = false
        let emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(schoolEmailId);
        let phoneNumberValid = /^\d+$/.test(phoneNumber);
        let cityValid = /^[a-zA-Z ]*$/.test(city)

        if (_.isNull(schoolEmailId) || _.isEmpty(schoolEmailId) || !emailValid) {
          setEmailIdMessage("Please enter a valid email")
          isError = true;
        }
        if (_.isNull(schoolName) || _.isEmpty(schoolName)) {
          setSchoolNameMessage("Please enter a valid school name")
          isError = true;
        }
        if (_.isEmpty(schoolCoordinatorName) || _.isNull(schoolCoordinatorName)) {
          setSchoolCoordinatorNameMessage("Please enter a valid school Coordinator name")
          isError = true;
        }
        if (_.isNull(phoneNumber) || _.isEmpty(phoneNumber) || !phoneNumberValid) {
          setPhoneNumberMessage("Please enter a valid phoneNumber")
          isError = true;
        }

        if (_.isEmpty(city) || _.isNull(city) || !cityValid) {
          setCityMessage ("Please Provide a valid city")
          isError = true;
        }

        if(!isError) {
            props.validateDetails(schoolName,schoolEmailId,phoneNumber,schoolCoordinatorName,city)
        }
    }



    const onReset = () => {
        setSchoolName('');
        setSchoolNameMessage('')
        setSchoolEmailId('');
        setEmailIdMessage('')
        setSchoolCoordinatorName('');
        setSchoolCoordinatorNameMessage('')
        setPhoneNumber('');
        setPhoneNumberMessage('')
        setCity('');
        setCityMessage('')
    }


    const SchoolRegistrationStepOneValidation = (event) => {

        const id = event.target.id
        let value = event.target.value
        if(value[0] == ' ') return

        switch (id) {
            case 'Email Id':
                let emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
                if (_.isNull(value) || _.isEmpty(value) || !emailValid) {
                    setEmailIdMessage("Please enter a valid email")
                    setSchoolEmailId(value);
                }
                else {
                    setSchoolEmailId(value);
                    setEmailIdMessage("")
                }
                break;
            case 'School Coordinator Name':
                if (_.isEmpty(value) || _.isNull(value)) {
                    setSchoolCoordinatorNameMessage("Please enter a valid name");
                    setSchoolCoordinatorName(value);
                }
                else {
                    setSchoolCoordinatorName(value);
                    setSchoolCoordinatorNameMessage("");
                }
                break;
            case 'School Name':
                if (_.isEmpty(value) || _.isNull(value)) {
                    setSchoolNameMessage("Please enter a valid school");
                    setSchoolName(value)
                }
                else {
                    setSchoolName(value);
                    setSchoolNameMessage("");
                }
                break;
            case 'Phone Number':
                let phoneNumberValid = /^\d+$/.test(value);
                if (_.isNull(value) || _.isEmpty(value) || !phoneNumberValid) {
                    setPhoneNumberMessage("Please enter a valid phoneNumber");
                    setPhoneNumber(value);
                }
                else {
                    setPhoneNumber(value);
                    setPhoneNumberMessage("");
                }
                break;
            case 'City':
                let cityValid = /^[a-zA-Z ]*$/.test(value)
                if (_.isEmpty(value) || _.isNull(value) || !cityValid) {
                    setCityMessage("Please Provide a valid city");
                    setCity(value)
                }
                else {
                    setCity(value);
                    setCityMessage("");
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
        <>
            {/*---Title and subtitle---*/}
            <Grid item container alignItems="center" direction="column">
                <Grid item>
                    <img alt src={Logo} alt="title" width="168" height="90" />
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="subtitle2" className={classes.RegistrationForm}>Registration Form for Schools</Typography>
                </Grid>
            </Grid>

                {/**Registration Form*/}
                <Grid item container alignItems= {matchesXS?"center":"center"} direction="column" >
                    <Card className={classes.registrationCard}>
                        <CardContent>
                            <Grid spacing={1} container alignItems="center"  direction="column" style={{ textAlign: "center", width: matchesXS? "100%" : matchesSM? 350 : "inherit" }}>
                                <Grid item style={{ width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit" }}>
                                    <Typography gutterBottom variant="body1" style={{ fontSize: "1rem" }} className={classes.RegistrationForm}>School Details</Typography>
                                </Grid>
                                <Grid item style={{ width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit" }}>
                                    <InputField errorMessage={schoolNameMessage}  isError={schoolNameMessage.length > 0} fieldName={"School Name"} onChangeFunc={setSchoolName} eventValidation={SchoolRegistrationStepOneValidation} value={schoolName}  />
                                </Grid>
                                <Grid item style={{ width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit" }}>
                                    <InputField errorMessage={cityMessage} isError={cityMessage.length > 0} fieldName={"City"} onChangeFunc={setCity} eventValidation={SchoolRegistrationStepOneValidation} value={city} />
                                </Grid>
                                <Grid item style={{ width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit" }}>
                                    <InputField errorMessage={schoolCoordinatorNameMessage} isError={ schoolCoordinatorNameMessage.length > 0} fieldName={"School Coordinator Name"} onChangeFunc={setSchoolCoordinatorName} eventValidation={SchoolRegistrationStepOneValidation} value={schoolCoordinatorName} />
                                </Grid>
                                <Grid item style={{ width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit" }}>
                                    <InputField errorMessage={phoneNumberMessage} isError={phoneNumberMessage.length > 0} fieldName={"Phone Number"} onChangeFunc={setPhoneNumber} eventValidation={SchoolRegistrationStepOneValidation} value={phoneNumber} />
                                </Grid>
                                <Grid item style={{ width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit" }}>
                                    <InputField errorMessage={emailIdMessage} isError={emailIdMessage.length > 0} fieldName={"Email Id"} onChangeFunc={setSchoolEmailId} eventValidation={SchoolRegistrationStepOneValidation} value={schoolEmailId} />
                                </Grid>
                                <Grid item style={{ width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit" }}>
                                    <PaymentButton onButtonClick = {validate} name="Continue" />
                                </Grid>
                                <Grid item component={Button} onClick={onReset} style={{ width: matchesXS ? "100%" : "inherit" }}>
                                    <Typography gutterBottom style={{ "textAlign": "center" }} variant="body2" className={classes.Reset}>Reset</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.registrationDivBackground} />
                </Grid>
        </>
    );
};

export default StepOne;