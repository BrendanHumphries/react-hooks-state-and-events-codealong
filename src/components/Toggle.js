import React from "react";
import { useState } from "react";

function Toggle() {
  const [buttonOn, setButtonOn] = useState(false)
  
  function handleButtonClick() {
    setButtonOn(buttonOn => !buttonOn);
  }
  
  return <button onClick={handleButtonClick} style={{background: buttonOn ? "red" : "white"}}>{buttonOn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
