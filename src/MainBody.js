import React from "react";
import styled from 'styled-components';
import theme from './theme/index.js';

function Body(props) {

    const {title, picOfTheDay, learnMoreParagraph, author} = props;
    const StyledAPOD = styled.div`
        display: flex;
        justify-content: space-around;
        align-items:center;
    `
    const StyledImageContainer = styled.div`
        
    `
    const StyledMainBody = styled.div`
        
    `
 
    const StyledImage = styled.img`
        width: 100%;
        height: 70vh;
        object-fit: cover;
    `

    return (
        <StyledMainBody>
            <StyledAPOD>
                <h1>Astronomy Picture Of The Day</h1>
            </StyledAPOD>
            <StyledImage theme={theme} src = {picOfTheDay} alt='image goes here'/>
            <div className = 'Learn More Container'>
                <h2>Photographed By: {author}</h2>
                <p>
                    <h4>A Brief Description:</h4> 
                    {learnMoreParagraph}
                    </p>
            </div>
        </StyledMainBody>    
    )};

export default Body;