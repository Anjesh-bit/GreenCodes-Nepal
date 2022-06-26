import React, { useRef, useEffect } from "react";
import { GreenTeams } from "../../common/datamodel";
import { makeStyles, Typography } from "@material-ui/core";
import cn from 'classnames';
import ToggleButton from "../../common/ToggleButton";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import "./Teams.css";
import { useState } from "react";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";
import { defaaultTransition } from "../../utils/Transition";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const useStyles = makeStyles({
    h1: {
        display: "block",
        fontSize: "0.65em",
        letterSpacing: "0.3em",
        fontWeight: 500,
        color: "#878a8f",
        paddingBottom: "1em",



    },


})

var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}
const item = {
    hidden: { opacity: 0, x: 200, transition: defaaultTransition },
    show: { opacity: 1, x: 0, transition: defaaultTransition },
    exit: { opacity: 0, x: -200, transition: defaaultTransition }
}
const containerList = {

    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemList = {
    hidden: { opacity: 0, y: "-100%", transition: defaaultTransition },
    show: { opacity: 1, y: 0, transition: defaaultTransition },
    exit: { opacity: 0, y: "100%", transition: defaaultTransition }
}

const Teams = () => {
    // const [position, positionSet] = useState(0);
    const [isGrid, setGrid] = useState(true);
    const classes = useStyles();
    const parallelxRef = useRef();
    const setOffsetY = useSelector((state) => state.parralx.scrollX)
    const handleToggle = (values) => {
        setGrid(values)

    }
    useEffect(() => {

    })

    return (
        <>

            <div className="main">
                <ToggleButton values={isGrid} handleToggle={handleToggle} />
                <div style={{ paddingLeft: "3em" }}>
                    <Typography variant="h6" className={cn(classes.h1)}>WHAT'S ON TEAM?</Typography>
                    <Typography variant="h3" style={{ fontWeight: 600, color: "#878a8f", background: "#042825", width: "fit-content",letterSpacing:"0.1em" }}>Enrolled Teams</Typography>
                </div>

                <div className="mainConatiner">
                    <div className="outerImageContainer">
                        <div className="innerContainer" >

                            {isGrid && (
                                <motion.div className="innerContainerImage"
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                >
                                    {GreenTeams.map((images, index) => (

                                        <motion.div className="imageWrapper"
                                            variants={item}
                                        >
                                            <img className="teamsImages" src={images} />
                                        </motion.div>


                                    ))}




                                </motion.div>)}
                        </div>

                    </div>


                    {
                        !isGrid && (<div className="listContainer">
                            <AnimatePresence>
                                <motion.div
                                    variants={containerList}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                >
                                    <Slider {...settings}>

                                        {GreenTeams.map((images, index) => (
                                            <motion.div className="imageContainer"
                                                key={`images+${index}`}
                                                variants={itemList}
                                            >
                                                <motion.img className="teamsList" src={images} transition={defaaultTransition} />
                                            </motion.div>
                                        ))}

                                    </Slider>
                                </motion.div>


                            </AnimatePresence>



                        </div>
                        )
                    }

                </div>

            </div >
        </>




    );
}
export default Teams;