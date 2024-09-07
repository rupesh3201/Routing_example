import React from "react";
import Navbar from "./../../components/Navbar/Navbar";
import AboutImg from "./Contact us-rafiki (1).png"
import "./Contact.css"
function Contact()
{
    return (
        <div>
            <Navbar/>
            <h1 className="title" >Contact page </h1>
            <img src={AboutImg} className="img"/>
        </div>
    )
}
export default Contact
