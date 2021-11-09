import React from "react";
import {useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  button: {
    fontFamily: "Fredoka One",
    height: '64px',
    width: '278px',
    borderRadius: '8px',
    padding: '20px, 24px, 20px, 24px',
    backgroundColor: '#98248D',
    fontSize: '18px',
    color: '#FFF',
    fontWeight: 400,
    textTransform: 'capitalize',
    alignItems: 'center',
    "&:hover": {
      backgroundColor: "#98248D"
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.125rem"
    }
  }
}));

const EndRegistration = () => {
  const classes = useStyles();
  const {resultsAvailable} = useSelector(state => state.RegistrationStatusReducer);

  const downloadClicked = async() => {
    await axios.get('/api/story/download_result').then((res) => {
      console.log(res.data);
      window.open(res.data, '_blank')
    }).catch((err) => {
      console.log(err);
    })
  };

  const closeRegistration = () => {
    return(
      <div className='close-registration-section'>
        <h3>Thank you for your participation at Katha Utsav 2021 - Phase 1.</h3>
        <h3>The results should be out soon</h3>
      </div>
    );
  };

  const publishResults = () => {
    return(
      <div className='close-registration-section'>
        <h3>Thank you for sending us your amazing stories and submissions! We had a lot of fun reading them and look forward to reading more of these gems from you! Check out the list of our winners here! You made it through to the next stage!</h3>
        <Button onClick={downloadClicked} className={classes.button}>Check Results</Button>
      </div>
    );
  };

  return (
    <div className='timer timer-flex'>
      {resultsAvailable? publishResults() : closeRegistration()}
    </div>
  );
};

export default EndRegistration;