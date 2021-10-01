import "./index.css";
import { Label } from "./components/label/Label";
import { OperatorPanel } from "./components/operatorPanel/OperatorPanel";
import { DigitsPanel } from "./components/digitsPanel/DigitsPanel";
import { Header } from "./components/menu/Header";
import React, { useState } from "react";
import { Button } from "./components/button/Button";
import { ResultBox } from "./components/resultbox/ResultBox";

function App() {
  const [preResult, setPreResult] = useState("");
  const [result, setResult] = useState("");
  const operators_list = ["/", "*", "+", "-", ".", "**"];
  const preResultCalculation = (value) => {
    if (
      operators_list.includes(value) &&
      (preResult === "" || operators_list.includes(value)) &&
      operators_list.includes(preResult.slice(-1))
    ) {
      return;
    }

    setPreResult(preResult + value);
    if (!operators_list.includes(value)) {
      setResult(eval(preResult + value).toString());
    }
  };

  const getResult = () => {
    setPreResult(eval(preResult).toString());
  };
  const left_delete = () => {
    if (preResult === "") {
      setResult("");
      return;
    }
    const value = preResult.slice(0, -1);
    setPreResult(value);
  };

  //Return the App section
  return (
    <div className="App">
      <div className="calculator">
        <Header />
        <ResultBox result={result} cal={preResult}></ResultBox>
        <OperatorPanel>
          <Button
            onClick={() => preResultCalculation("/")}
            lab={Label("÷")}
          ></Button>
          <Button
            onClick={() => preResultCalculation("*")}
            lab={Label("x")}
          ></Button>
          <Button
            onClick={() => preResultCalculation("+")}
            lab={Label("+")}
          ></Button>
          <Button
            onClick={() => preResultCalculation("-")}
            lab={Label("-")}
          ></Button>
          <Button
            onClick={() => preResultCalculation("**")}
            lab={Label("^")}
          ></Button>
          <Button onClick={left_delete} lab={Label("C")}></Button>
        </OperatorPanel>
        <DigitsPanel>
          <Button
            onClick={() => preResultCalculation("1")}
            lab={Label("1")}
          ></Button>
          <Button
            onClick={() => preResultCalculation("2")}
            lab={Label("2")}
          ></Button>
          <Button
            onClick={() => preResultCalculation("3")}
            lab={Label("3")}
          ></Button>
          <Button
            onClick={() => preResultCalculation("4")}
            lab={Label("4")}
          ></Button>
          <Button
            onClick={() => preResultCalculation("5")}
            lab={Label("5")}
          ></Button>
          <Button
            onClick={() => preResultCalculation("6")}
            lab={Label("6")}
          ></Button>
          <Button
            onClick={() => preResultCalculation("7")}
            lab={Label("7")}
          ></Button>
          <Button
            onClick={() => preResultCalculation("8")}
            lab={Label("8")}
          ></Button>
          <Button
            onClick={() => preResultCalculation("9")}
            lab={Label("9")}
          ></Button>
          <Button
            onClick={() => preResultCalculation("0")}
            lab={Label("0")}
          ></Button>
          <Button
            onClick={() => preResultCalculation(".")}
            lab={Label(".")}
          ></Button>
          <Button onClick={getResult} lab={Label("=")}></Button>
        </DigitsPanel>
      </div>
    </div>
  );
}

export default App;
