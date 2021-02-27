import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false); //set show initially to be false

    useEffect(() => {
        window.addEventListener("scroll", () => {
            //if we scroll more than 100px then we make the nav bar black
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll"); //this prevents from having too many listeners. 
        };
    }, []);



    return (
        <div className={`nav ${show && "nav__black"}`}> {/*if show is true we make the navbar black */}
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img
                className="nav__avatar"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="Avatar"
            />
        </div>
    );
}

export default Nav;
