import React, { createContext, useState } from "react";


export const NavContext = createContext();

const NavProvider = ({ children }) => {

    const [isNavActive, setIsNavActive] = useState(false);


    const toggleNav = () => {

        setIsNavActive(!isNavActive);
    }


    return (
<NavContext.Provider value={{toggleNav,isNavActive}}>

{children}


</NavContext.Provider>



    );

}


export default NavProvider;