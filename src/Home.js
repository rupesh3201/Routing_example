import React from "react";
import Navbar from "./Navbar";
import AboutImg from "./Contact us-rafiki (1).png"
function Home()
{
    return (
        <div>
            {/*nav bar  */}
            <Navbar/>
            <h1>Home </h1>
            <img className="img" src= {AboutImg} />
        </div>
    )
}
export default Home