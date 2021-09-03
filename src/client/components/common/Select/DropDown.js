import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiOutlinedInput-input": {
      color: "#000"
    },
    "& .MuiInputLabel-root": {
      color: "#000"
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#000"
    },
    "&:hover .MuiInputLabel-root": {
      color: "#98248D"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#98248D"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#000"
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "purple"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple"
    },

  },
  error: {
    "&.MuiFormHelperText-root.Mui-error": {
      color: theme.palette.common.red
    }
  },

  widthAndHeight: {
    height: 15,
    width: 380,
    [theme.breakpoints.up("lg")]: {
      width: 430,
    },
    [theme.breakpoints.up("xl")]: {
      width: 480,
    },
    [theme.breakpoints.down("sm")]: {
      width: 280
    },

    [theme.breakpoints.down("xs")]: {
      width: 210
    }
  }
}));


const helperTextStyles = makeStyles(theme => ({
  root: {
    margin: 4,
    '&$error': {
      color: '#f44336'
    }
  },
  error: {
    color: "#f44336"
  } //<--this is required to make it work
}));

const styles = {
  helper: {
    color: 'red',
    fontSize: '.8em',
  }
}

const DropDown = (props) => {
  const classes = useStyles();
  const helperTestClasses = helperTextStyles();
  const { options, fieldName, onChangeFunc, value, isError, errorMessage, eventValidation } = props;
  return (
    <TextField
      id={fieldName}
      className={classes.root}
      error={false}
      helperText={isError ? errorMessage : ''}
      value={value}
      onChange={(e) => {
        eventValidation(fieldName, e)
      }}
      variant="outlined"
      label={fieldName}
      InputProps={{
        classes: {
          input: classes.widthAndHeight
        }
      }}
      FormHelperTextProps={{ style: styles.helper }}

      select
    >
      {_.map(options, (option) => <MenuItem key={option} value={option}>{option}</MenuItem>
      )}
    </TextField>
  );
}

export default DropDown;