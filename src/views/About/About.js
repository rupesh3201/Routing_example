import React from "react";
import Navbar from "./../../components/Navbar/Navbar";
import AboutImg  from "./About us page-pana (1).png"
import "./About.css"
function About()
{
    return (
        <div>
             <Navbar/>
            <h1 className="title" >About page </h1>
            <img className="img" src= {AboutImg} />
        </div>
    )
}
export default About
