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
      <React.Fragment>
        <h3 style={{color: '#263238'}}>Stage - 1 registration has ended 🛑</h3>
        <h3 style={{color: '#263238'}}>Results will be announced soon. Watch out this space for more details.</h3>
      </React.Fragment>
    );
  };

  const publishResults = () => {
    return(
      <React.Fragment>
        <h3 style={{color: '#263238', marginTop: '5px'}}>Stage - 1 Results are out 🎉 Download the results now.</h3>
        <Button onClick={downloadClicked} className={classes.button}>Download Now</Button>
      </React.Fragment>
    );
  };

  return (
    <div className='timer'>
      {resultsAvailable? publishResults() : closeRegistration()}
    </div>
  );
};

export default EndRegistration;