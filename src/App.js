import React, {useState} from "react";
import Button from './components/button/button';
import Display from "./components/display/display";

import './App.css';

function App() {

  const [data, setData] = useState("");

  let arrayOfOperators = ["-", "+", "/", "*"];

  const resetData = () => {
    setData("");
  }

  const calculateData = () => {
    // evaluate from string
    if (data && data !== "-" && data !== "+" && data !== "/" && data !== "*") {
      let result = eval(data);
      setData(result + "");
    } else {
      resetData();
    }

  }

  const handleClick = (evt) => {
    //alert(evt.target.name);
    let pressedValue = evt.target.name;
    let lastSymbol = data.slice(-1);

    if (pressedValue === "C") {
      resetData();
    } else if (pressedValue === "=") {
      calculateData();
    } else if (arrayOfOperators.includes(lastSymbol) && arrayOfOperators.includes(pressedValue)) {
      // don't change data
      setData(data);
    } else if (data === "0" || data === "-" || data === "+" || data === "/" || data === "*") {
      // should start from number
      setData(data.substring(1) + pressedValue);
    } else {
      // create a string to show on display
      setData(data.concat(pressedValue));
    }
  }

  return (
    <div className="App">
      <div className="main-container">
        <h1 className="hidden-title">Calculator</h1>
        <div className="container">
          <Display value={data !== "" ? data : "0"}/>
          <div className="buttons-wrap">
            <div className="buttons-wrap-top">
              <Button handleClick={handleClick} name={"+"} />
              <Button handleClick={handleClick} name={"-"} />
              <Button handleClick={handleClick} name={"*"} />
              <Button handleClick={handleClick} name={"/"} />
            </div>
            <div className="buttons-wrap-bottom">
              <Button handleClick={handleClick} name={"1"} />
              <Button handleClick={handleClick} name={"2"} />
              <Button handleClick={handleClick} name={"3"} />

              <Button handleClick={handleClick} name={"4"} />
              <Button handleClick={handleClick} name={"5"} />
              <Button handleClick={handleClick} name={"6"} />
              

              <Button handleClick={handleClick} name={"7"} />
              <Button handleClick={handleClick} name={"8"} />
              <Button handleClick={handleClick} name={"9"} />
              

              <Button handleClick={handleClick} name={"C"} classAdd={"green"}/>
              <Button handleClick={handleClick} name={"0"} />
              <Button handleClick={handleClick} name={"="} classAdd={"red"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
