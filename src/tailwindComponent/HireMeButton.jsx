import React from "react";
import '.././tailwind.css'
import { motion, AnimatePresence } from "framer-motion";
const HireMeButton = ({ onBtnclick, vref }) => {


    console.log("VREF: " + vref)
    return (


        <AnimatePresence>

            <motion.button class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-black font-bold py-2 px-4  rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                onClick={onBtnclick}
                initial={{

                   
                    y: 0,
                    x: 0,
                    opacity: 1
                }}
                animate={vref ? {
                    x: 90,
                    y: -100,

                    opacity: 0,
                    display: 'none'

                } : {}}
                transition={{

                    duration: 0.2,
                  ease:'easeInOut'
                }}

                exit={{

                    x: 0,
                    y: 0,

                    opacity: 1,
                   
                }}





            >
                Hire me
            </motion.button>


        </AnimatePresence>


    )




}


export default HireMeButton;