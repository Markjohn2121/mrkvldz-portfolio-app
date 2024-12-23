import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const specialties = [
  "Web Developer",
  "Front-end Dev",
  "UI/UX Designer",
  "JavaScript Enthusiast",
  "React Specialist",
];

const AnimatedSpecialties = () => {
  const [currentSpecialty, setCurrentSpecialty] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialty((prevSpecialty) =>
        prevSpecialty === specialties.length - 1 ? 0 : prevSpecialty + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="" style={{
     
      textAlign:'center',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      justifyItems:'center',
      padding:'6px'
    }}>
      <AnimatePresence mode="wait">
        <motion.h1 
          key={specialties[currentSpecialty]}
          initial={{ opacity: 0, y: 35, filter: 'blur(30px)' }}
          animate={{ opacity: 1, y: 9 ,filter: 'blur(0px)'}}
          exit={{ opacity: 0, y: -30,filter: 'blur(30px)' }}
          transition={{ duration: 0.8,ease:'easeInOut' }}
          className="text-4xl home-specialist"
          style={{
            
            fontWeight:'bold',
            letterSpacing:'5px'
          }}
        >
          {specialties[currentSpecialty]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedSpecialties;
