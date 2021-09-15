import React from 'react';
import ReactDOM from 'react-dom';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import crossMark from '../../assets/images/close.png'
import kathautsav from "../../assets/images/kathautsav.png"
import tickMark from "../../assets/images/tickmark.gif"
import failMark from "../../assets/images/failmark.png"
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import HomeButton from '../common/Button/HomeButton';
import ContactUsButton from '../common/Button/ContactUsButton';
import '../../styles/main.scss';
import {Dialog, Slide} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  pageBackground: {
    height: "600vh",
    padding: 0,
    width: "100%",
  },
  KathaUtsavLogo: {
    top: "40px",
    left: "calc(50% - 100px)",
    width: "200px",
    height: "100px",
    position: "absolute",
    textAlign: "center",
    alignItems: "center"
  },
  TickMarkLogo: {
    marginTop: "20px",
    width: "280px",
    height: "280px",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: "140px",
      height: "140px"
    },
  },
  StatusMsgTag: {
    height: "45px",
    alignItems: "center",
    textAlign: "center",
    fontFamily: 'Fredoka One',
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "36px",
    lineHeight: "32px",
    display: "flex",
    color: "#1C1C1C",
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
    },
  },
  registrationDivBackground: {
    height: "80px",
    width: "100%",
  },
  StatusContentTag: {
    maxWidth: "522px",
    top: "423px",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "26px",
    letterSpacing: "-0.02em",
    color: "#18191F",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  StatusInfoTag: {
    maxWidth: "522px",
    marginTop: "12px",
    marginBottom: "24px",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "26px",
    color: "#808080",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  StatusPaymentCard: props => ({
    position: "relative",
    width: "600px",
    top: "50px",
    borderRadius: "22px",
    background: "#FFFFFF",
    boxShadow: theme.shadows[2],
    [theme.breakpoints.down("xs")]: {
      width: "85%",
      position: "relative",
      top: "20px",
    },
  }),
  HomeButton: {
    color: "purple",
    width: 500,
    height: 50,
    fontFamily: 'Fredoka One',
    fontSize: "18px",
    textTransform: "none",
    [theme.breakpoints.up("lg")]: {
      width: 470,
      fontSize: "18px"
    },
    [theme.breakpoints.up("xl")]: {
      width: 520,
      fontSize: "18px"
    },
    [theme.breakpoints.down("sm")]: {
      width: 320
    },

    [theme.breakpoints.down("xs")]: {
      width: 260
    },
  },
  secondaryAction: {
    textDecoration: "none",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "26px",
    color: "#404040"
  }
}));

const Transition = React.forwardRef((props, ref) => <Slide ref={ref} direction="up" {...props} />);

const SuccessHeader = () => {
  return <div>Payment <span style={{color: '#00AB88'}}>Successful!</span></div>;
};

const FailureHeader = () => {
  return <div>Oops, Payment <span style={{color: '#00AB88'}}>Failed.</span></div>;
};

const SuccessMessage = ({orderId}) => {
  return <div>Your transaction ID is <span style={{color: '#98248D'}}>{orderId}</span></div>;
};

const FailureMessage = ({orderId}) => {
  if(orderId === '') {
    return <div>Your registration failed, Please try again.</div>;
  }
  return <div>Your transaction ID is <span style={{color: '#98248D'}}>{orderId}</span></div>;
};

const PaymentStatus = (props) => {
  const classes = useStyles(props);
  const {displayResponsePopUp, registrationStatus, orderId} = props;
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesXL = useMediaQuery(theme.breakpoints.up('xl'));

  let logoWidth = "168";
  let logoHeight = "80";
  if (matchesLG) {
    logoWidth = "188";
    logoHeight = "100"
  }
  if (matchesXL) {
    logoWidth = "218";
    logoHeight = "130"
  }

  const closePopUp = () => {
    props.showResponsePopUp(false);
  }

  const closeAllPopUp = () => {
    props.showResponsePopUp(false);
    props.showPopUp(false);
  }

  const closeLoader = () => {
    props.showLoader(false);
    return true;
  }

  return ReactDOM.createPortal(
    <Dialog fullScreen TransitionComponent={Transition} open={displayResponsePopUp && closeLoader()}
            PaperProps={{style: {backgroundColor: '#FEDB50'}}} onClose={closePopUp}>
      <Grid container direction="column" className={classes.pageBackground}>
        {/*---Cross Mark---*/}
        <Grid item container justifyContent="flex-end">
          <Grid item component={Button} onClick={closePopUp}>
            <img src={crossMark} alt="crossmark" width={matchesXL ? "50" : matchesLG ? "50" : "30"}
                 height={matchesXL ? "50" : matchesLG ? "50" : "30"}/>
          </Grid>
        </Grid>

        {/*---Title and subtitle---*/}
        <Grid item container direction="column" style={{textAlign: "center"}}>
          <Grid item>
            <img src={kathautsav} alt="Katha Utsav logo" width={logoWidth} height={logoHeight}/>
          </Grid>
        </Grid>

        <Grid item container alignItems="center" direction="column">
          <Card className={classes.StatusPaymentCard}>
            <CardContent>
              <Grid spacing={1} alignItems="center" container item direction="column"
                    style={{textAlign: "center", width: matchesXS ? "100%" : matchesSM ? "100%" : "inherit"}}>

                <Grid item>
                  <img src={(registrationStatus === 'success') ? tickMark : failMark} alt="Status Logo"
                       className={classes.TickMarkLogo}/>
                </Grid>

                <Grid item>
                  <Typography gutterBottom variant="body1" className={classes.StatusMsgTag}>
                    {(registrationStatus === 'success') ? <SuccessHeader/> : <FailureHeader/>}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography gutterBottom variant="body1" className={classes.StatusContentTag}>
                    {(registrationStatus === 'success') ? <SuccessMessage orderId={orderId}/> :
                      <FailureMessage orderId={orderId}/>}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography gutterBottom variant="body1" className={classes.StatusInfoTag}>
                    {(registrationStatus === 'success') ? 'You’ll recevie an e-mail notification with registration details from our team within 24 hours. Incase you didn’t receive any e-mail please check SPAM folder.' : 'Please reach out to us with the transaction ID if any amount got deducted from your account. Else, Please try again later.'}
                  </Typography>
                </Grid>

                {(props.registrationStatus) === "success" ?
                  <div>
                    <Grid item onClick={closeAllPopUp}>
                      <HomeButton textColor="white" bgColor="purple"/>
                    </Grid>
                    <br/>
                    <Typography component={Link} to="/contact" onClick={closePopUp} gutterBottom className={classes.secondaryAction} variant="body2">In
                      case of any queries <span style={{
                        "textDecoration": "underline",
                        "color": "#98248D",
                        "cursor": "pointer",
                        "fontWeight": 400
                      }}>contact us</span></Typography>
                  </div>
                  :
                  <div>
                    <Grid item onClick={closeAllPopUp}>
                      <ContactUsButton textColor="white"/>
                    </Grid>
                    <br/>
                    <Typography onClick={closePopUp} gutterBottom className={classes.secondaryAction}
                                variant="body2"><span style={{
                      "textDecoration": "underline",
                      "color": "#98248D",
                      "cursor": "pointer",
                      "fontWeight": 400
                    }}>Take me back to registration form</span></Typography>
                  </div>
                }
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container alignItems="center" direction="column">
          <div className={classes.registrationDivBackground}/>
        </Grid>
      </Grid>
    </Dialog>,
    document.getElementById('registration-response')
  );
};

export default PaymentStatus;
