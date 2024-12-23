import React, { useRef } from "react";
// import $ from "jquery"

import useIntersectionObserver from "../customHooks/useIntersectionObserver";
const Aboutme = () => {

    const fadeRef = useRef()
    console.log("Show About me");

    useIntersectionObserver([fadeRef]);

    return (

        <div>

        </div>
    )
}


export default Aboutme;