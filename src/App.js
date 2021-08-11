import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './header.js';
import Body from './MainBody.js';
import "./App.css";

function App() {

  const [picOfTheDayObject, setPicOfTheDayObject] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=mraGUz3hQOi2ODXYXbWdcBO85ahB3fnhc80XCVo1')
      .then(response => {
        console.log(response.data);
        setPicOfTheDayObject(response.data);
      })
      .catch(error => console.error('No Object Received From Source'))
    },[]);

  return (
    <div className="App">
      <Header date = {picOfTheDayObject.date} />
      <Body title = {picOfTheDayObject.title} picOfTheDay = {picOfTheDayObject.hdurl} learnMoreParagraph = {picOfTheDayObject.explanation} />
    </div>
  );
}

export default App;
