import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    event: {
        fontFamily: "Poppins",
        backgroundColor: "#F3F0EA",
        marginTop: "68px",
        padding: "0 40px",
        [theme.breakpoints.down("xs")]: {
            marginTop: "52px",
        }
    },
    date: {
        display: "flex",
        flexDirection: "row",
        color: "#FECB05",
        alignItems: "baseline"
    },
    number: {
        marginRight: "18px",
        fontSize: "72px"
    },
    month :{
        fontSize: "36px"
    },
    phase: {
        color: "#18191F",
        fontStyle: "normal",
        lineHeight: "28px",
        textAlign: "center",
        fontWeight: "500",
        fontSize: "18px"
    },
    description :{
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "26px",
        textAlign: "center",
        color: "#18191F"
    }
}));

const Event = ({data}) => {

    const classes = useStyles()

    return (
        <React.Fragment>
            <div className={classes.event}>
                <div className={classes.date}>
                    <div className={classes.number}>
                        {data.date}
                    </div>
                    <div  className={classes.month}>
                        {data.month}
                    </div>
                </div>
                <div className={classes.phase}>Phase #{data.phase}</div>

                <div className={classes.description}>{data.text}</div>
            </div>
        </React.Fragment>
  );
};

export default Event;