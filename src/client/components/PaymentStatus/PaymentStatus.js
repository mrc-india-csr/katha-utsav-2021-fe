
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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

const useStyles = makeStyles(theme => ({
    pageBackground: {
        backgroundColor: '#FECB50',
        position: "relative",
        height: "calc(100vh + 100px)",

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
        top: "89px",
        left: "140px",
        width: "320px",
        height: "320px",
        position: "absolute"
    },
    StatusMsgTag: {
        position: "absolute",
        width: "600px",
        height: "45px",
        left: "calc(400px/2)",
        top: "31px",
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
    StatusContentTag: {
        position: "absolute",
        width: "555px",
        height: "67px",
        left: "25px",
        top: "423px",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "26px",
        // display: "flex",
        letterSpacing: "-0.02em",
        color: "#18191F"
    },
    StatusPaymentCard: props => ({
        position: "absolute",
        width: "600px",
        height: props.payStatus === "SUCCESS" ? "600px" : "670px",
        // left: "420px",
        alignItems: "center",
        top: "178px",
        borderRadius: "8px",
        background: "#FFFFFF",
        boxShadow: theme.shadows[2],
        
    }),
    homeButton: props=> ({
            position: "absolute",
            width: "551px",
            height: "60px",
            top: props.payStatus=="SUCCESS" ? "511px" : "587px",
            left: "32px",
            backgroundColor: props.payStatus ==="SUCCESS" ? "#98248D" : "#FFFFFF",
            borderRadius: "4px",
    }),
    cancelButton: {
        position: "absolute",
        width: "551px",
        height: "60px",
        top: "511px",
        left: "32px",
        backgroundColor: "#98248D",
        borderRadius: "4px",
    }

}));

const PaymentStatus = (props) => {
    const classes = useStyles(props);
    
    var statusMsg = "Payment Failed ⛔";
    var statusLogo = failMark;
    var statusContent = props.stsContent;

    const status = '' + props.payStatus
    console.log(props.payStatus);
    if(status === 'SUCCESS'){
        statusMsg = "Payment Success 🎉";
        statusLogo = tickMark;
        statusContent = props.stsContent;
    }
    // "CONTENT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.";
    
 
    return (
        <div className={classes.pageBackground} >
        <Grid container direction="column" >
            {/*---Cross Mark---*/}
            <Grid item container justifyContent="flex-end">
                <Grid item component={Button} >
                    <img alt src={crossMark} alt="crossmark" width="28px" height="28px" />
                </Grid>
            </Grid>

            {/*---Title and subtitle---*/}
            <Grid item container  direction="column" style={{ textAlign: "center" }}>
                <Grid item >
                    <img alt src={kathautsav} alt="Katha Utsav logo" className={classes.KathaUtsavLogo} />
                </Grid>
            </Grid>
            
            <Grid item container alignItems="center" direction="column">
                <Card className={classes.StatusPaymentCard}>
                    <CardContent>
                        <Grid spacing={1} container item direction="column" style={{ textAlign: "center" }}>
                            <Grid item>
                                <Typography gutterBottom variant="body1" className={classes.StatusMsgTag}> {statusMsg} </Typography>
                            </Grid>
                            
                            
                            <Grid item>
                                <img alt src={statusLogo} alt="StatusLogo.png" className={classes.TickMarkLogo} />
                            </Grid>

                            <Grid item>
                                <Typography gutterBottom variant="body1" className={classes.StatusContentTag}>
                                   {statusContent}
                                </Typography>
                            </Grid>
                            { ('' + props.payStatus) === "SUCCESS" ? 
                                    <Grid item className={classes.homeButton}><HomeButton textColor="white"/></Grid> 
                                :
                                <div>
                                    <Grid item className={classes.cancelButton}>
                                        <ContactUsButton textColor="white" />
                                    </Grid>
                                     <Grid item className={classes.homeButton}>
                                         <HomeButton textColor="purple" />
                                     </Grid> 
                                 </div>
                            }
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </div>

    );
};

export default PaymentStatus;
