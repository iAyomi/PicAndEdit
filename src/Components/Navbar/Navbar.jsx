import React from 'react';
import "./Navbar.css";
import HeroImg from '../HeroImg/HeroImg';
import { Link } from "react-router-dom";


const myNavs = {
    Home: { link: "/", className: "btn0" },
    Create: { link: "/create", className: "btn1" },
    "Brand ur Biz": { link: "/brandurbiz", className: "btn2" }
};


const Navbar = () => {
  return (
    <nav>
        
        <HeroImg />

        <div className="myNavBtns">
            {
                Object.entries(myNavs).map(([nav, { link, className }]) => (
                    <Link key={link} to={link} className="myLink">
                        <button className={className}>{nav}</button>
                    </Link>
                ))
            }
        </div>
    </nav>
  );
};


export default Navbar;