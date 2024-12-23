
import React from "react";
import { useParams } from "react-router-dom";


import Home from "./Home";
import Aboutme from "./Aboutme";    
import Projects from "./Projects";
import Social from "./Social";
import Resume from "./Resume";

const Main = () => {

    const { section } = useParams();
    
    return (

        <main className="main" key={"main1"}>
            

            {section && (
                <div style={{padding:"0",margin:"0"}} key={'main-div1'}>
                    {section === "" && <Home key={1}/> }
                    {section === "home" && <Home key={2}/> }
                    {section === "aboutme" && <Aboutme/>}
                    {section === "projects" && <Projects/>}
                    {section === "social" && <Social/>}
                    {section === "resume" && <Resume/>}
                </div>

            )}

{!section && <div  style={{padding:"0",margin:"0"}}><Home key={3}/></div> }
        </main>


    );





};



export default Main;