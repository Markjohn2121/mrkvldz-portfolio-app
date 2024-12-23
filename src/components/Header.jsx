import React, { useContext } from "react";
// import '../js/action.js';
import { NavContext } from "../context/NavContext";
// import { NavContext } from './../context/NavContext';
import { AnimatePresence, motion } from 'framer-motion';



const Header = ({ onToggleNav }) => {
  const { toggleNav, isNavActive } = useContext(NavContext);
  return (
    <header className="header">


      <div><h3>Header</h3></div>
      <div class="hamburger" id="menu" onClick={toggleNav}>

        <AnimatePresence>
          <motion.span
            initial={{
              y: 0,
              rotate: 0
            }}

            animate={isNavActive ? {
              y: 8,
              rotate: 45

            } : {}}

            transition={{

              duration: 0.1,
              type: 'spring'
            }}
          ></motion.span>
          {/*  */}
          <motion.span
            initial={{
              y: 0,
              rotate: 0
            }}

            animate={isNavActive ? {
              y: 0,
              rotate: -45

            } : {}}

            transition={{

              duration: 0.1,
              type: 'spring'
            }}
          ></motion.span>

          {/*  */}

          <motion.span
            initial={{
              y: 0,
              rotate: 0
            }}

            animate={isNavActive ? {
              y: -8,
              rotate: -45

            } : {}}

            transition={{

              duration: 0.1,
              type: 'spring'
            }}
          ></motion.span>


        </AnimatePresence>

      </div>


    </header>

  );




};



export default Header;