import React from 'react';
import Grid from "@material-ui/core/Grid";
import Event from './Event'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    schedule: {
        fontFamily: 'Fredoka One',
        backgroundColor: "#F3F0EA",
        padding: "0 80px",
        [theme.breakpoints.down("xs")]: {
            padding: "0 18px",
        }
    },
    header: {
        paddingTop: "48px",
        marginBottom: "0",
    },
    description: {
        fontFamily: "Poppins",
        fontWeight: "normal",
        color: "#18191F",
        fontSize: "16px",
        lineHeight: "26px",
        marginTop: "89px",
        paddingBottom: "133px",
        [theme.breakpoints.down("xs")]: {
            marginTop: "28px",
            paddingBottom: "94px",
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: "1.125rem"
        }
    },
    events : {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
}));

const Events = [
    {
        date: "30<sup>th</sup> Sep - 14<sup>th</sup> Nov",
        phase: "Stage 1 : Upload Story",
        text: "Registrations",
        singleDate: false
    },
    {
        date: "16<sup>th</sup> Nov",
        phase: "Stage 1 : Upload Story ",
        text: "Result",
        singleDate: true
    },
    {
        date: "16<sup>th</sup> Nov - 4<sup>th</sup> Dec",
        phase: "Stage 2 : Be the writer",
        text: "Registrations",
        singleDate: false
    },
    {
        date: "10<sup>th</sup> Dec - 19<sup>th</sup> Dec",
        phase: "Stage 2 : Be the writer",
        text: "Sessions",
        singleDate: false
    },
    {
        date: "26<sup>th</sup> Dec",
        phase: "Celebrations!!",
        text: "Challenge Grounds Results & Valedictory Ceremony",
        singleDate: true
    }
]

const Schedule = () => {

    const classes = useStyles();


    return (
        <React.Fragment>
            <div id="schedule" className={classes.schedule}>
                <h3 className={classes.header}>Schedule</h3>
                <div className={classes.events}>
                    {Events.map((event)=>{
                        return(
                            <Event data={event} />
                        )
                    })}
                </div>
                <div className={classes.description}>
                </div>
            </div>
        </React.Fragment>
  );
};

export default Schedule;