import React from "react";
function Navbar()
{
    return (
        <div className="navnbar_con">
            <h1 className=""> Navbar</h1>
            Kuch Mithha Ho Jaye  
            <div className="navbarlinks_con"> 
            <a href="/"> Home </a>
            {/* added home */}
            <a href="/About"> About </a>
            {/* added about */}
            <a href="/Contact"> Contact </a>
            {/* added  Contact */}
            </div>
        </div>
    )
}
export default Navbar