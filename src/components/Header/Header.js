import React from "react";
import "./Header.css";

const Header = () =>{
    const budget = 120;
    return(
        <div className="pt-2 text-center rounded header">
            <div className="mb-4" style={{lineHeight:'25px'}}>
                <h2 className="fw-bold">FestiVista International Concert</h2>
                <p>Love Song! Love The Creatures!! Spread Happiness Around The World!!!</p>
            </div>
            
            <div>
                <h4 className="fw-bold">Total Budget: {budget} Million</h4>
            </div>

            <nav className="navbar py-1 mt-3 rounded-bottom">
                <a href="/singers">Singers</a>
                <a href="/cart">Cart Review</a>
                <a href="/about">About US</a>
            </nav>
        </div>
    );
}

export default Header;