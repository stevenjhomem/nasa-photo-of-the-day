import React from "react";

function Body(props) {

    const {title, picOfTheDay, learnMoreParagraph} = props;

    return (
        <div className= 'main body'>
            <div className = 'APOD Container'>Astronomy Picture Of The Day</div>
            <div className='Image Container'>
                <img src = {picOfTheDay} />
            </div>
            <div className = 'Learn More Container'>Learn More
                <p>{learnMoreParagraph}</p>
            </div>
        </div>    
    )};

export default Body;