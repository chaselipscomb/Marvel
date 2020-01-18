import React, { Fragment } from 'react';
import './Navbar.css'
import { ButtonToolbar, Dropdown, DropdownButton, SplitButton} from 'react-bootstrap';

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
            <div className="fas fa-bars">&#xf0c9; ccc</div>
            <i class='fas fa-bars'>dd</i>
            <ButtonToolbar>
                {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                    <DropdownType
                        size="lg"
                        title="Drop small"
                        id={`dropdown-button-drop-${idx}`}
                        key={idx}
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownType>
                ))}
            </ButtonToolbar>
            <ButtonToolbar></ButtonToolbar>

        </Fragment>
    )
} IMPLEMENT SMALL DROPDOWN FOR MOBILE DEVICES

export default Navbar;