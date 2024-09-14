// App.js
import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <center>
        <h1>Calculator</h1>
        <h3>This is My First React Project</h3>
        <div className={styles.calculator}>
          <Display displayValue={calVal}></Display>
          <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
        </div>
        <h4>Created By <span> Durgesh Wagh</span></h4>
    </center>
    
  );
}

export default App;
