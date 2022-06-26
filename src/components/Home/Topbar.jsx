import React from "react";
import { makeStyles, Paper, Box, useMediaQuery, useTheme } from "@material-ui/core";
import { motion } from "framer-motion";
import MenuIcon from '@material-ui/icons/Menu';
import cn from 'classnames';
import { useSelector, useDispatch } from "react-redux";
import CommonModal from "../../common/Modal";
import { ModalOpen } from "../../actions/ModalActions";
import { ModalClose } from "../../actions/ModalActions";
const useStyles = makeStyles((theme) => ({
    topbarWrapper: {
        display: "flex",
        justifyContent: "flex-end",
    },
    topbarMenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100px",
        marginTop: "3em",
        marginRight: "3em",
        background: "#113628 "
    },
    topbarLogo:
    {
        marginRight: "auto",
        marginTop: "4em",
        marginLeft: "3em"
    },


}));



const menuh1 = {
    fontSize: "15px", letterSpacing: "0.5px", color: "#878a8f"

}
const Topbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matchessm = useMediaQuery(theme.breakpoints.down('sm'));
    const modalState = useSelector((state) =>
        state.modals
    )
    const handleModalOpen = () => {
        dispatch(ModalOpen())
    }
    const handelModalClose = () => {
        dispatch((ModalClose()))
    }

    const setOffsetY = useSelector((state) => state.parralx.scrollX)
    return (
        <div className={cn(classes.topbarWrapper)}>
            {/* <Paper className={cn(classes.topbarLogo)} elevation={0}>
                <MetaMask />
            </Paper> */}

            <Paper className={cn(classes.topbarMenu)} elevation={0}>
                <Box>
                    <h1 style={menuh1}>Menu</h1>
                </Box>
                <motion.div className="linesmenu"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "100%", opacity: 1 }}
                    transition={{ repeat: Infinity, repeatDelay: 1, duration: 1 }}
                    style={!matchessm ? { display: "none" } : {}}
                >

                </motion.div>
                <MenuIcon fontSize="large" style={{ color: "#ddd" }} onClick={handleModalOpen} />
                <CommonModal
                    AreaLabelby="transition-modal-title"
                    AreaDescribedBy="transition-modal-description"
                    ClassName={cn(classes.modalmenu)}
                    open={modalState.open}
                    HandlOpen={handleModalOpen}
                    HandleOnClose={handelModalClose}

                />

            </Paper>

        </div>

    )
}
export default Topbar;