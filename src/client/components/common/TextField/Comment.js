import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import {
    makeStyles, useTheme, createStyles,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";


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
        height: 200,
        width: 400,
        lineHeight: "2rem",
        [theme.breakpoints.up("lg")]: {
            width:450,
            height:150,
            fontSize: "1.5rem",
            lineHeight: "2rem",
        },
        [theme.breakpoints.up("xl")]: {
            width:500,
            height: 35,
            height:150,
            fontSize: "1.75rem",
            lineHeight: "2rem",
        },
        [theme.breakpoints.down("sm")]: {
            width: 300,
            height:150,
            lineHeight: "1.5rem",
        },

        [theme.breakpoints.down("xs")]: {
            width: 230,
            lineHeight: "1.5rem",
        }
    }
}));

const Comment = (props) => {
    const classes = useStyles();
    const { fieldName,value, isError, errorMessage,eventValidation } = props;
    const theme = useTheme();
    const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));
    const matchesXL = useMediaQuery(theme.breakpoints.up('xl'));
    const labelName = matchesLG? <Typography variant="body1" style={{fontSize: matchesXL?"1.5rem":matchesLG?"1.25rem":"inherit"}}>{fieldName}</Typography> : fieldName;
    const helperText = matchesLG? <Typography variant="body1" style={{fontSize: matchesXL?"1.25rem":matchesLG?"1rem":"inherit"}}>{errorMessage}</Typography> : errorMessage;

    return (
        <TextField id={fieldName} variant="outlined" label={labelName}
            value={value}
            error={isError}
            multiline
            rows={10}
            helperText={isError ? helperText : ''}
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
export default Comment;