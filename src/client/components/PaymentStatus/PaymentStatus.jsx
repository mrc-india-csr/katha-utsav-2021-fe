import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import crossMark from "../../assets/images/crossmark.png"
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
import { Dialog, Slide } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  pageBackground: {
    backgroundColor: '#FEDB50',
    height: "600vh",
    padding: 0,
    width: "100%",
    backgroundRepeat: "no-repeat",

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
    width: "320px",
    height: "320px",
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
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "32px",
    display: "flex",
    letterSpacing: "-0.02em",
    color: "#66645E"
  },
  registrationDivBackground: {
    backgroundColor: '#FEDB50',
    height: "25vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
},
  StatusContentTag: {
    // position: "absolute",
    width: "555px",
    height: "67px",
    // left: "25px",
    top: "423px",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "26px",
    // display: "flex",
    letterSpacing: "-0.02em",
    color: "#18191F",
    
  },
  StatusPaymentCard: props => ({
    position: "relative",
    // width: "600px",
    height: props.registrationStatus === "SUCCESS" ? "600px" : "670px",
    // left: "420px",
    alignItems: "center",
    top: "20px",
    borderRadius: "8px",
    background: "#FFFFFF",
    boxShadow: theme.shadows[2],
    [theme.breakpoints.down("xs")]: {
      width: "85%",
      position: "relative",
      height: props.registrationStatus === "SUCCESS" ? "400px" : "470px",
    },
  }),
  homeButton: props => ({
    // position: "absolute",
    width: "551px",
    height: "60px",
    top: props.registrationStatus == "SUCCESS" ? "511px" : "587px",
    left: "32px",
    backgroundColor: props.registrationStatus === "SUCCESS" ? "#98248D" : "#FFFFFF",
    borderRadius: "4px",
    [theme.breakpoints.down("xs")]: {
      width: "85%",
      position: "relative",
    },
  }),
  cancelButton: {
    width: "551px",
    height: "60px",
    backgroundColor: "#98248D",
    borderRadius: "4px",
    [theme.breakpoints.down("xs")]: {
      width: "85%",
      position: "relative",
    },
  }

}));

const Transition = React.forwardRef((props, ref) => <Slide ref={ref} direction="up" {...props} />);

const PaymentStatus = (props) => {
  const classes = useStyles(props);
  const { displayResponsePopUp, registrationStatus, registrationComment } = props;

  console.log(registrationStatus + "  ====  " + registrationComment);
  
  const theme = useTheme();


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

  let statusMsg = "Payment Failed ⛔";
  let statusLogo = failMark;
  let statusContent = registrationComment;

  if (registrationStatus === 'SUCCESS') {
    statusMsg = "Payment Success 🎉";
    statusLogo = tickMark;
    // statusContent = props.stsContent;
  }

  const closePopUp = () => {
    props.showResponsePopUp(false);
    // props.showPopUp(false);
  }

  return ReactDOM.createPortal(
    <Dialog fullScreen TransitionComponent={Transition} open={displayResponsePopUp} onClose={closePopUp}>
      <Grid container direction="column" className={classes.pageBackground}>
        {/*---Cross Mark---*/}
        <Grid item container justifyContent="flex-end">
          <Grid item component={Button} onClick={closePopUp}>
            <img src={crossMark} alt="crossmark" width="28px" height="28px" />
          </Grid>
        </Grid>

        {/*---Title and subtitle---*/}
        <Grid item container direction="column" style={{ textAlign: "center" }}>
          <Grid item>
            <img src={kathautsav} alt="Katha Utsav logo" width={logoWidth} height={logoHeight} />
          </Grid>
        </Grid>

        <Grid item container alignItems="center" direction="column">
          <Card className={classes.StatusPaymentCard}>
            <CardContent>
              <Grid spacing={1} alignItems="center" container item direction="column" >

                <Grid item >
                  <Typography gutterBottom variant="body1" className={classes.StatusMsgTag}> {statusMsg} </Typography>
                </Grid>

                <Grid item>
                  <img src={statusLogo} alt="StatusLogo.png" className={classes.TickMarkLogo} />
                </Grid>

                <Grid item>
                  <Typography gutterBottom variant="body1" className={classes.StatusContentTag}>
                    {statusContent}
                  </Typography>
                </Grid>

                {(props.registrationStatus) === "SUCCESS" ?
                  <Grid item onClick={closePopUp}><HomeButton textColor="white" /></Grid>
                  :
                  <div>
                    <Grid item onClick={closePopUp}>
                      <ContactUsButton textColor="white" />
                    </Grid>
                    <Grid item onClick={closePopUp}>
                      <HomeButton textColor="purple" />
                    </Grid>
                  </div>
                }
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.registrationDivBackground} />
        </Grid>
      </Grid>
    </Dialog>,
    document.getElementById('registration-response')
  );
};

export default PaymentStatus;
