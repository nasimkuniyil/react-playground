import { useState } from "react";

export default function SimpleCalculator() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function handleChange(event){
    if(event.target.id == 'num1'){
        setNum1(parseInt(event.target.value))
    }else if(event.target.id == "num2"){
        setNum2(parseInt(event.target.value))
    }
  }

  function handleClick(operation) {
    switch (operation) {
      case "add":
        setResult(num1+num2);
        break;
      case "subtract":
        setResult(num1 - num2);
        break;
      case "multiply":
        setResult(num1 * num2);
        break;
      case "divide":
        setResult(num1 / num2);
        break;
      default:
        alert("invalide operation");
    }
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Simple Calculator</h1>
      </div>
      <div>
        <h1>{result}</h1>
      </div>
      <div className="parent-col">
        <input onChange={handleChange} id="num1" className="bg-gray-100 p-3 rounded-xl" type="number" />
        <input onChange={handleChange} id="num2" className="bg-gray-100 p-3 rounded-xl" type="number" />
      </div>
      <div className="parent-col">
        <button onClick={() => handleClick("add")}>+</button>
        <button onClick={() => handleClick("subtract")}>-</button>
        <button onClick={() => handleClick("multiply")}>x</button>
        <button onClick={() => handleClick("divide")}>/</button>
      </div>
    </div>
  );
}
