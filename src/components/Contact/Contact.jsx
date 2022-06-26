import React from "react";
import GreenTextFields from "../../common/TextFields";
import cn from 'classnames';
import { makeStyles, TextareaAutosize, Card, CardContent, Grid, Typography, withStyles, Button } from "@material-ui/core";
import { contactModel } from "../../common/datamodel";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const useStyles = makeStyles((theme) => ({
    root: {
        
        "& .MuiFormControl-root": {
            margin: theme.spacing(1),
        },

        "& .MuiOutlinedInput-input": {
            color: "#878a8f",

        },
        "& .MuiInputLabel-root": {
            color: "#878a8f",
            fontSize: "0.9em"
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#878a8f",
            border: "2px solid #878a8f"
        },

        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#878a8f",
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#878a8f",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#878a8f",
        },
    },
    h1: {
        fontSize: "0.65em",
        letterSpacing: "0.3em",
        fontWeight: 500,
        color: "#878a8f",
        paddingBottom: "1em",

    }
}));
const StyledButton = withStyles({
    root: {
        background: "transparent",
        border: "none",

        borderRadius: "59px",
        boxSizing: "border-box",
        color: "#042825",
        padding: "2px 10px",
        fontSize: "0.9em",
        fontWeight: 600,

    },
    label: {
        textTransform: "none",
        marginTop:"3px"
    },

})(Button);
const Contact = () => {
    const classes = useStyles();
    const onhandleChange = () => { }
    return (
        <form>
            <Grid container>
                <Grid container xs={6} className={cn(classes.root)} style={{ background: "#F5F5F5" }}>
                    <Card elevation={0} style={{ background: "#F5F5F5", marginLeft: "3em" }}>
                        <CardContent>
                            <Typography variant="h1" className={cn(classes.h1)}>{contactModel[0]}</Typography>
                            <Typography variant="h3" style={{ fontWeight: 600, color: "#042825" }} component="div" gutterBottom>
                                {contactModel[1]}
                            </Typography>

                            <Typography variant="h1" className={cn(classes.h1)}>{contactModel[2]}</Typography>

                            <Typography variant="h6" ><small>{contactModel[3]}</small></Typography>
                            <Typography variant="h6"><small>{contactModel[4]}</small></Typography>
                            <Typography variant="h6"><small>{contactModel[5]}</small></Typography>
                            <Typography variant="h6"><small>{contactModel[6]}</small></Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container xs={6} className={cn(classes.root)} style={{ background: "#F5F5F5" }}>
                    <Card style={{ width: "100%", background: "#F5F5F5", marginRight: "4em" }} elevation={0}>
                        <CardContent >
                            <Grid items xs={12}>
                                <GreenTextFields
                                    helperText=""
                                    variant="outlined"
                                    label="What's your first name?"
                                    type="text"
                                    name=""
                                    value=""
                                    onChange={onhandleChange}

                                />

                            </Grid>
                            <Grid items xs={12}>
                                <GreenTextFields
                                    helperText=""
                                    variant="outlined"
                                    label="What's your last name?"
                                    type="text"
                                    name=""
                                    value=""
                                    onChange={onhandleChange}

                                />

                            </Grid>
                            <Grid items xs={12}>
                                <GreenTextFields
                                    helperText=""
                                    variant="outlined"
                                    label="What's your email?"
                                    type="text"
                                    name=""
                                    value=""
                                    onChange={onhandleChange}
                                />
                            </Grid>
                            <Grid items xs={12}>
                                <GreenTextFields
                                    helperText=""
                                    variant="outlined"
                                    label="What's your number?"
                                    type="number"
                                    name=""
                                    value=""
                                    onChange={onhandleChange}
                                />
                            </Grid>
                            <Grid items xs={12}>
                                <TextareaAutosize
                                    aria-label="empty textarea"
                                    style={{ width: "100%", paddingTop: "5em", paddingBottom: "5em", border: "2px solid #878a8f", borderRadius: "4px" }}

                                />
                            </Grid>
                            <Grid items xs={12}>
                                <StyledButton><MailOutlineIcon fontSize="small" style={{ marginRight: "4px" }} />Send message</StyledButton>
                            </Grid>
                        </CardContent>

                    </Card>



                </Grid>


            </Grid >
        </form >
    )

}
export default Contact;