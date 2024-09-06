import React from "react";
function Navbar()
{
    return (
        <div>
            <h1 className="navbar"> Navbar</h1>
            Kuch Mithha Ho Jaye  
            <div className="navbarlinks"> </div>
            <a href="/"> Home </a>
            {/* added home */}
            <a href="/About"> About </a>
            {/* added about */}
            <a href="/Contact"> Contact </a>
            {/* added  Contact */}

        </div>
    )
}
export default Navbar