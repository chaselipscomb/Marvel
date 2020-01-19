import React, { Fragment } from 'react';
import './Navbar.css'
import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Navbar() {
    return (
        <Fragment>
            <div className="navbar">
                <div className="navtitlediv"><a href="#"><h3 className="navtitle">SuperHero Booth</h3></a></div>
                <div className="navinputdiv">
                    <form>
                        <input className="navinput" type="text" placeholder="Search..." />
                        <button className="navbutton">Search</button>
                    </form>
                </div>
                <div className="navtab"><a className="tabcolor" href="#">Versus</a></div>
                <div className="navtab"><a className="tabcolor" href="#">Results</a></div>

                <div className="navtab"><a href="#"><span className="tabcolor">Login</span></a></div>
            </div>
            <div className="dropbtndiv">
                <div class="dropdown">
                    <button class="dropbtn">Menu</button>
                    <div class="dropdown-content">
                        <a href="#">Search</a>
                        <a href="#">Versus</a>
                        <a href="#">Results</a>
                        <Dropdown.Divider />
                        <a className="logindropdown" href="#">Logout</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar;