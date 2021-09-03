import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import {
    makeStyles, useTheme, createStyles,
} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    cssLabel: {
        color: "#000",
        "&.Mui-focused": {
            color: "#98248D"
        }
    },
    cssOutlinedInput: {
        display: "flex",
        flexWrap: "wrap",
        "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline": {
            borderColor: "#000" //default
        },
        "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
            borderColor: "#000" //hovered #DCDCDC
        },
        "&$cssFocused $notchedOutline": {
            borderColor: "#98248D" //focused
        }
    },
    notchedOutline: {},
    cssFocused: {},
    error: {},
    disabled: {},
    widthAndHeight: {
        height: 15,
        width: 400,
        [theme.breakpoints.up("xl")]: {
            width:500,
        },
        [theme.breakpoints.down("sm")]: {
            width: 300
        },

        [theme.breakpoints.down("xs")]: {
            width: 230
        }
    }
}));

const InputField = (props) => {
    const classes = useStyles();
    const { fieldName,value, isError, errorMessage,eventValidation } = props;

    return (
        <TextField id={fieldName} variant="outlined" label={fieldName}
            value={value}
            error={isError}
            helperText={isError ? errorMessage : ''}
            onChange={event => { eventValidation(event) }}
             InputLabelProps={{
                classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused
                }
            }}
            InputProps={{
                classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                    input: classes.widthAndHeight
                }
            }} />

    );
}
export default InputField;