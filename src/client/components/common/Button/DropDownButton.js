import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import downarrow from "../../../assets/images/downarrow.png";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles(theme => ({
    buttonArrow: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: "1em",
        marginBottom: "2em",
        color: "#98248D",
        textTransform: "none",
        fontFamily: 'Fredoka One',
        fontSize: "1.15rem",
        [theme.breakpoints.up("lg")]: {
            padding: "1rem",
            fontSize: "1.5rem"
        },
        [theme.breakpoints.up("xl")]: {
            padding: "1.5rem",
            fontSize: "2rem"
        }
    },
    menuRegistration: {
        backgroundColor: "#fff",
        color: "#000",
    },
    root: {
        fontSize: "3rem"
    }

}));


export default function DropDownButton(props) {
    const {menuServiceProperties} =props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const matchesXL = useMediaQuery(theme.breakpoints.up('xl'));
    const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
            <Button className={classes.buttonArrow}    
            ref={anchorRef} 
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle} variant="contained"><span style={{ marginRight: "10px" }}>Register Now </span><img src={downarrow} alt="down arrow" /> </Button>

                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu">
                                        {props.menuServiceProperties.map((option, index) => (
                                            <MenuItem
                                                key={option.name}
                                                style={{fontSize: matchesXL?"2rem": matchesLG?"1.5rem":"inherit", paddingLeft: matchesXL?"1.5rem":matchesLG?"1.25rem":"1.8rem", paddingRight:matchesXL?"1.5rem":matchesLG?"1.25rem":"1.8rem"}}
                                                onClick={() => option.showPopUpFun(true)}
                                            >
                                                {option.name}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Grid>
        </Grid>
    );
}
