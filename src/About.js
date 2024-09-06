import React from "react";
import Navbar from "./Navbar";
import AboutImg  from"./About us page-pana (1).png"
function About()
{
    return (
        <div>
             <Navbar/>
            <h1>About page </h1>
            <img className="img" src= {AboutImg} />
        </div>
    )
}
export default About
