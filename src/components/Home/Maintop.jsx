
import React from "react";
import cn from 'classnames';
import { makeStyles, Box, Grid, Button, withStyles, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { GreentopSection } from "../../common/datamodel";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { GreenHeadSection } from "../../common/datamodel";
import './MainTop.css'
const useStyles = makeStyles({

    GreenParas: {
        alignSelf: "center",
        marginLeft: "auto",
        marginRight: "2em",
        fontSize: "1.5em",
        color: "#ddd"
    },
    styledButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2em",
        padding: "6px 23px",


    }
})

const GreenHeadings = {
    fontSize: "5em",
    display: "block",
    color: "#ddd",

}

export const StyledButton = withStyles({

    root: {
        boxSizing: "border-box",
        padding: "10px 48px",
        fontSize: "1.4em",
        border: "2px solid #ddd",
        background: "transparent",
    },

    label: {
        textTransform: "capitalize",
    },
})(Button);

const Maintop = () => {
    const classes = useStyles();
    const setOffsetY = useSelector((state) => state.parralx.scrollX)
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matchessm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className="maintopWrapper">
            <div className="shapesRight" style={!matches ? { position: "absolute", left: `-${setOffsetY * 0.4}px`, transition: "all 0.8s linear" } : { position: "relative", left: `-${setOffsetY * 0.4}px`, marginLeft: "-3em", marginTop: "-5.5em", padding: 0, transition: "all 0.8s linear" }} >

            </div>
            <Grid container >
                <Grid item md={6} xs={12} sm={12}>
                    <Box style={{ position: "relative", left: `-${setOffsetY * 0.4}px`, transition: "all 0.8s linear" }} className="box">
                        {
                            GreentopSection?.map((data, index) => (
                                <h1 key={index} style={GreenHeadings} className="GreenHeadings">
                                    {data.greenHead}
                                </h1>
                            ))}
                        <StyledButton style={{ color: "#ddd" }} className="GreenConnected">Stay connected<ArrowForwardIcon fontSize="large" /></StyledButton>
                    </Box>
                </Grid>
                <Grid item>
                    <motion.div className="lines"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100%", opacity: 1 }}
                        transition={{ repeat: Infinity, repeatDelay: 5, duration: 5 }}
                        style={matchessm ? { display: "none" } : {}}
                    >

                    </motion.div>
                    <div className="lines" style={matchessm ? { display: "none" } : {}}>

                    </div>

                </Grid>
            </Grid>

            <div className="shapesLeft"
                style={!matches ? { position: "absolute", right: `-${setOffsetY * 0.4}px`, transition: "all 0.8s linear" } : { position: "relative", left: "-3em", right: `-${setOffsetY * 0.4}px`, transition: "all 0.8s linear" }}

            >

            </div>


            <div className="shapesText">
                Innovation
            </div>


        </div >
    )
}
export default Maintop;