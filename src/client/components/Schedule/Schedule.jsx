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
        date: "30<sup>th</sup> Sep - 25<sup>th</sup> Oct",
        phase: "Stage 1 : Upload Story",
        text: "Registrations",
        singleDate: false
    },
    {
        date: "30<sup>th</sup> Oct",
        phase: "Stage 1 : Upload Story ",
        text: "Result",
        singleDate: true
    },
    {
        date: "31<sup>st</sup> Oct - 15<sup>th</sup> Nov",
        phase: "Stage 2 : Know your Story",
        text: "Registrations",
        singleDate: false
    },
    {
        date: "20<sup>th</sup> Nov - 21<sup>st</sup> Nov",
        phase: "Stage 2 : Know your Story",
        text: "Session 1 - Session 2",
        singleDate: false
    },
    {
        date: "27<sup>th</sup> Nov - 28<sup>th</sup> Nov",
        phase: "Stage 2 : Know your Story",
        text: "Session 3 - Session 4",
        singleDate: false
    },
    {
        date: "30<sup>th</sup> Nov",
        phase: "Stage 2 : Know your Story",
        text: "Story Results",
        singleDate: true
    },
    {
        date: "30<sup>th</sup> Nov - 9<sup>th</sup> Dec",
        phase: "Stage 3 : Be the Writer",
        text: "Registrations",
        singleDate: false
    },
    {
        date: "11<sup>th</sup> Dec - 12<sup>th</sup> Dec",
        phase: "Stage 3 : Be the Writer",
        text: "Session 1 - Session 2",
        singleDate: false
    },
    {
        date: "18<sup>th</sup> Dec - 19<sup>th</sup> Dec",
        phase: "Stage 3 : Be the Writer",
        text: "Session 3 - Session 4",
        singleDate: false
    },
    {
        date: "26<sup>th</sup> Dec - 27<sup>th</sup> Dec",
        phase: "Stage 3 : Be the Writer",
        text: "Session 5 - Session 6",
        singleDate: false
    },
    {
        date: "8<sup>th</sup> Jan",
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