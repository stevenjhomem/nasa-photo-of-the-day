import React, { useState, useEffect } from "react";

function Header(props) {

    const { date } = props;
    return (
        <div className = 'Header Container'>
            <img className ='NASA Logo' src = 'https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg'/>
            <div className = 'Date'>{date}</div>
        </div>
    )};


export default Header;