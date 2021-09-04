import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import _ from 'lodash';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiOutlinedInput-input": {
      color: "#000",
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.25rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.5rem"
      }
    },
    "& .MuiInputLabel-root": {
      color: "#000",
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.25rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.5rem"
      }
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#000",
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.25rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.5rem"
      }
    },
    "&:hover .MuiInputLabel-root": {
      color: "#98248D",
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.25rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.5rem"
      }
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#98248D"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#000",
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.25rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.5rem"
      }
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "purple",
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.25rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.5rem"
      }
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple"
    },

  },
  error: {
    "&.MuiFormHelperText-root.Mui-error": {
      color: theme.palette.common.red,

    }
  },

  widthAndHeight: {
    height: 15,
    width: 380,
    [theme.breakpoints.up("lg")]: {
      width: 430,
      height: 30,
    },
    [theme.breakpoints.up("xl")]: {
      width: 480,
      height: 35,
    },
    [theme.breakpoints.down("sm")]: {
      width: 280
    },

    [theme.breakpoints.down("xs")]: {
      width: 210
    }
  }
}));

const useErrorStyles = makeStyles(theme => ({
  root: {
    "& .MuiOutlinedInput-input": {
      color: "#000",
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.5rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.75rem"
      }
    },
    "& .MuiInputLabel-root": {
      color: "red",
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.5rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.75rem"
      }
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#000",
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.5rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.75rem"
      }
    },
    "&:hover .MuiInputLabel-root": {
      color: "#98248D",
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.5rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.75rem"
      }
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#98248D"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#000",
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.5rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.75rem"
      }
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "purple",
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.5rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.75rem"
      }
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple"
    },

  },
  error: {
    "&.MuiFormHelperText-root.Mui-error": {
      color: theme.palette.common.red,
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.25rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.5rem"
      }
    }
  },

  widthAndHeight: {
    height: 15,
    width: 380,
    [theme.breakpoints.up("lg")]: {
      width: 430,
      height: 30,
    },
    [theme.breakpoints.up("xl")]: {
      width: 480,
      height: 35,
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

  const { options, fieldName, onChangeFunc, value, isError, errorMessage, eventValidation } = props;
  const classes = isError ? useErrorStyles() : useStyles();
  const helperTestClasses = helperTextStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesXL = useMediaQuery(theme.breakpoints.up('xl'));
  const labelName = matchesLG? <Typography variant="body1" style={{fontSize: matchesXL?"1.5rem":matchesLG?"1.25rem":"inherit"}}>{fieldName}</Typography> : fieldName;
  const helperText = matchesLG? <Typography variant="body1" style={{fontSize: matchesXL?"1.25rem":matchesLG?"1rem":"inherit"}}>{errorMessage}</Typography> : errorMessage;

  return (

    <React.Fragment>

      <TextField
        id={fieldName}
        className={classes.root}
        error={isError}
        helperText={isError ? helperText : ''}
        value={value}
        onChange={(e) => {
          eventValidation(fieldName, e)
        }}
        err
        variant="outlined"
        label={labelName}
        InputProps={{
          classes: {
            input: classes.widthAndHeight,
          },
        }}
        FormHelperTextProps={{ style: styles.helper }}
        select
      >
        {_.map(options, (option) => <MenuItem style={{ fontSize: matchesXL ? "1.75rem" : matchesLG ? "1.5rem" : "inherit" }} key={option} value={option}>{option}</MenuItem>
        )}
      </TextField>
    </React.Fragment>

  );
}

export default DropDown;