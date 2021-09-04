import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import downarrow from "../../../assets/images/downarrow.png"
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
    buttonArrow: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: "1em",
        marginBottom: "2em",
        color: "#98248D",
        fontFamily: 'Fredoka One',
        [theme.breakpoints.up("lg")]: {
            padding: "1.5rem",
            fontSize: "1.75rem"
        },
        [theme.breakpoints.up("xl")]: {
            padding: "2rem",
            fontSize: "1.75rem"
        }
    },
    menuRegistration: {
        backgroundColor: "#fff",
        color: "#000",
    },
    root:{
        fontSize: "3rem"
    }

}));

const DropDownButton = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [page, setPage] = useState('');
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const theme = useTheme();

    const handleClick = (event) => {
        event.persist();
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    };

    const onMenuClick = () => {
    }
    const handleClose = () => {
        setPage('');
        setOpenMenu(false);
        setAnchorEl(null);
    };

    const RegisterNow = (
        <Button className={classes.buttonArrow} aria-haspopup={anchorEl ? "true" : undefined} aria-owns={anchorEl ? "simple-menu" : undefined} variant="contained" onClick={handleClick}><span style={{ marginRight: "10px" }}>Register Now </span><img src={downarrow} alt="down arrow" /> </Button>
    );
    const matchesXL = useMediaQuery(theme.breakpoints.up('xl'));
    const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));


    return (
        <React.Fragment>
            {RegisterNow}
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={openMenu}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                getContentAnchorEl={null}

                classes={{ paper: classes.menuRegistration}}
                MenuListProps={{
                    onMouseLeave: handleClose,
                }}
                elevation={0}

            >
                {
                    props.menuServiceProperties.map((option, index) => {
                        return <MenuItem style={{fontSize: matchesXL?"2.75rem": matchesLG?"2.5rem":"inherit", paddingLeft: "1.8rem", paddingRight:"1.8rem"}} key={option.name + index} onClick={() => option.showPopUpFun(true)}>{option.name}</MenuItem>
                    })
                }
            </Menu>
        </React.Fragment>
    )

};


export default DropDownButton;
