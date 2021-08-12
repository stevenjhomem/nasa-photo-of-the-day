import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import theme from './theme/index.js';

function Header(props) {

    const { date } = props;
    const StyledHeader = styled.div `
        background-color : ${props => props.theme.mediumColor};
        color : ${props => props.theme.lightColor};
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    `
    return (
        <StyledHeader theme = {theme}>
            <img className ='NASA Logo' src = 'https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg'/>
            <div className = 'Date'>{date}</div>
        </StyledHeader>
    )};


export default Header;