import React, { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../customHooks/useIntersectionObserver";
import '../styles/components/Home/home-style.css';

import AnimatedSpecialties from "./AnimatedSpecialties";
import profile_Pic from '../assets/LEE_8030.jpg';
import { motion, AnimatePresence, inView, useInView } from 'framer-motion'
import '.././tailwind.css'
import ResumeDownloadButton from "../tailwindComponent/ResumeDownloadButton";
import HireMeButton from "../tailwindComponent/HireMeButton";
import ContactHireMe from "../tailwindComponent/ContactHireMe";

const Home = () => {
    const ref = useRef()
    const viewHireMeRef = useRef()
    const isView = useInView(ref)
    const hireMeBtnRef = useRef()
    const isViewHireMe = useInView(viewHireMeRef)
    const [isShowHireMe, setShowHireMe] = useState(false);
    const addElementRef = useIntersectionObserver({ threshold: 0.3 });



    const showhireMe = () => {
        setShowHireMe(!isShowHireMe)
        
       

    }
    return (

        <div className="home-wrap" style={{ padding: 0, overflow: "hidden" }} ref={ref}>
            <AnimatePresence>

                {/* Item 1 Image Profile*/}
                <div className="home-item" key={0}>


                    <motion.div className="mx-auto mt-0"
                    >
                        <div className="flex justify-center">

                            <motion.div className="w-full md:w-1/5 flex justify-center"
                                whileHover={{
                                    y: 10

                                }}
                                initial={{
                                    opacity: 0,
                                    y: 5,
                                    scale: 0.9,
                                    filter: 'blur(30px)'
                                }}
                                animate={isView ? {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    filter: 'blur(0px)'

                                } : {}}

                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 9,

                                    scale: 0.2
                                }}
                            >
                                <img
                                    src={profile_Pic}
                                    alt="Profile"
                                    className="w-full max-w-xs aspect-square object-cover rounded-full"
                                />
                            </motion.div>

                        </div>
                    </motion.div>

                </div>

                {/* Item 2 Name */}

                <div className="home-item" key={1}>




                    <motion.p className="home-name"
                        whileHover={{
                            scale: 1.1,
                            letterSpacing: '3px'
                        }}
                        initial={{
                            opacity: 0,
                            y: -20,
                            x: -20,
                            scale: 0.1,
                            filter: 'blur(20px)'
                        }}
                        animate={isView ? {
                            opacity: 1,
                            y: 0,
                            x: 0,
                            scale: 1,
                            filter: 'blur(0px)'

                        } : {}}

                        transition={{
                            duration: 1.3,
                            type: "spring"
                        }}
                        exit={{
                            opacity: 0,
                            y: 9,
                            scale: 0.2
                        }}
                    >Hi I'm Mark John Valdez</motion.p>
                </div>

                {/* Item # Quotes */}

                <div className="home-item" key={2} style={{
                    textAlign: "",
                    display: "flex",

                    justifyItems: "",
                    justifyContent: "center",
                    flexWrap: "wrap",


                    flexDirection: 'row'

                }}>

                    {/* Hire Me contacts */}

                    <AnimatePresence>
                        <motion.div className="home-hireMe-con"
                            ref={viewHireMeRef}
                            
                       
                            initial={{
                                display: 'none',
                                opacity: 0,
                                y: -30,
                                x:-80,
                                scale: 0.1,
                                width: '10%'

                            }}
                            animate={isShowHireMe ? {
                                display: '',
                                opacity: 1,
                                y: -200,
                                x:0,
                                scale: 1,
                                width: 'max-content'
                            } : {}}
                            transition={{
                                duration: 0.3,
                               type:'spring'

                            }}
                            exit={{

                                opacity: 0,
                                y: 25,
                                scale: 1.1,
                            }}
                        >

                      <ContactHireMe onBtnclick={showhireMe}/>
                        </motion.div>
                    </AnimatePresence>





                    <motion.div

                        style={{
                            width: 'max-content',

                        }}
                        initial={{
                            x: -30
                        }}
                        animate={isView ? {
                            x: 0
                        } : {}}

                        transition={{
                            duration: 2,
                            type: "spring"
                        }}
                    ><h1 className="home-quote">Aspiring</h1></motion.div>
                    <div style={{
                        width: "50%",
                        textAlign: 'center',

                        display: 'flex',
                    }}><AnimatedSpecialties /></div>

                </div>

                {/* item 4 buttons */}

                <div className="home-items" key={3} style={{

                    display: 'flex',
                    flexDirection: 'row',
                    textAlign: 'center',
                    justifyItems: 'center',
                    justifyContent: 'center',
                    width: "auto",
                    gap: '30px'

                }}>



                    <motion.div style={{
                        width: 'auto',

                    }}
                        initial={{
                            display: 'none',
                            opacity: 0,
                            x: 50
                        }}

                        animate={{
                            display: '',
                            opacity: 1,
                            x: 0

                        }}
                        transition={{
                            duration: 1.5,
                            type: 'spring'
                        }}
                    >

                     {/* Hire me */}
                        <HireMeButton  vref={isShowHireMe}  onBtnclick={showhireMe}/>

                    </motion.div>

                    <motion.div style={{
                        width: 'auto',

                    }}
                        initial={{
                            display: 'none',
                            opacity: 0,
                            x: -50
                        }}

                        animate={{
                            display: '',
                            opacity: 1,
                            x: 0

                        }}
                        transition={{
                            duration: 2.5,
                            type: 'spring'
                        }}>

                        <ResumeDownloadButton />
                    </motion.div>


                </div>
            </AnimatePresence >
        </div >



    )

}

export default Home;