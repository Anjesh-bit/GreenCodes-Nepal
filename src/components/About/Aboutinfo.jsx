import React from "react";
import { infoAbout } from "../../common/datamodel";
import cn from "classnames";
import { makeStyles, Grid, Card, CardContent, Typography } from "@material-ui/core";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: "10em",
        textAlign: "center"
    },
    h1: {
        fontSize: "0.875em",
        letterSpacing: "0.45em",
        fontWeight: 500,
        color: "#878a8f",
        paddingBottom: "1em"
    }
})
const Aboutinfo = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={cn(classes.root)}>
                <Grid items xs={6}>
                    <Card elevation={0}>
                        <Card Content elevation={0} style={{ background: "#F5F5F5" }}>
                            <Typography variant="h6" className={cn(classes.h1)}>{infoAbout[0]}</Typography>
                            <Typography variant="h4" style={{ paddingBottom: "1em", fontWeight: 600 }}>{infoAbout[1]}</Typography>
                            <Typography variant="body1" style={{ color: "#878a8f", paddingLeft: "2em", paddingRight: "2em" }}>{infoAbout[2]}</Typography>
                            <Typography variant="body1" style={{ color: "#878a8f", paddingLeft: "2em", paddingRight: "2em" }}>{infoAbout[3]}</Typography>
                        </Card>
                    </Card>
                </Grid>
                <Grid items>

                </Grid>
            </Grid>
        </div>

    )
}
export default Aboutinfo;