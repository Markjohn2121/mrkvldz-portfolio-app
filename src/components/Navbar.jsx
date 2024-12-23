import React, { useContext, useRef } from "react";
import { Link } from 'react-router-dom';
import { NavContext } from "../context/NavContext";
import { motion, AnimatePresence, useInView, MotionConfig } from "framer-motion";
import useIntersectionObserver from "../customHooks/useIntersectionObserver";
import '../styles/components/Nav/nav-style.css'


const Navbar = () => {
    const { isNavActive, toggleNav } = useContext(NavContext);
    // const addElement = useIntersectionObserver();
    const navRef = useRef();
    const navView = useInView(navRef);

    const navItems = ['home', 'aboutme', 'skills', 'projects', 'social', 'resume']
    return (
        <AnimatePresence>
            <motion.nav className={isNavActive ? 'nav nav-active' : 'nav'} id="nav" onClick={toggleNav}
                ref={navRef}

            >

                {/* <h3>nav bar </h3> */}


                <motion.div className="nav-wrap"

                    initial={{
                        opacity: 0,
                        x: -700
                    }}

                    animate={navView ? {
                        opacity: 1,
                        x: 0

                    } : {}}

                    transition={{

                        duration: 0.5,

                        type: 'spring'
                    }}
                >
                    <div className="verticalNav"
                        style={{

                        }}
                    ></div>


                    <MotionConfig
                    whileHover={{
                        x:9,
                        rotate:5
                    }}

                    

                        initial={{
                            x: 0
                        }}
                        animate={{

                        }}
                        transition={{
                            duration: 0.4,
                            ease: 'easeInOut'
                        }}
                    >
                        {

                            navItems.map((label, index) => (
                                <motion.div className="nav-item" key={index}><Link key={index+1} to={"/me/"+ label} replace="true">{label}</Link></motion.div>


                            ))






                        }


                   

                    </MotionConfig>
                </motion.div>


            </motion.nav>
        </AnimatePresence >

    );






}




export default Navbar;