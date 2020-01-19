import React, { Fragment } from 'react';
import Jumbotron from '../Components/Jumbotron';
import BSJumbotron from '../Components/BSJumbotron';
import Navbar from '../Components/Navbar';

function Home() {
    return(
        <Fragment>
            <Navbar />
            <Jumbotron />
            <BSJumbotron />
        </Fragment>
    )
}

export default Home;