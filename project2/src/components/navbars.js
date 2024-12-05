import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "./images/logo.png"
import entreebtn from "./images/entreebtn.png"
import dessertbtn from "./images/dessertbtn.png"
import cocktailbtn from "./images/cocktailbtn.png";

const Navbar = ()=>{
    return(
        <>
        <nav>
            <section className="navbarhome">
                    <Link className="homebtn" to='/'>
                        <img src={logo} alt=""/>
                    </Link>
            </section>
            <section className="navbaritems">
                    <Link to='/entrees' className="navbtn">
                        <img src={entreebtn} alt=""/>
                    </Link>
                    <Link to='/desserts' className="navbtn">
                        <img src={dessertbtn} alt=""/>                        
                    </Link>
                    <Link to='/cocktails' className="navbtn">
                        <img src={cocktailbtn} alt=""/>
                    </Link>
            </section>
        </nav>
        <Outlet />
        </>
    )
}

export default Navbar;