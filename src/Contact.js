import React from "react";
import Navbar from "./Navbar";
import AboutImg from "./Contact us.jpg"
function Contact()
{
    return (
        <div>
            <Navbar/>
            <h1>Contact page </h1>
            <img className="img" src= {AboutImg} />
        </div>
    )
}
export default Contact
