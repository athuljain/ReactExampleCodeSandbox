import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function State() {
  const [color, setColor] = useState("orange");
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("gray");

  function greenBtn() {
    console.log("green Btn Clicked");
    setColor("green");
  }
  function redBtn() {
    setColor("red");
  }

  function Increment() {
    setCount(count + 1);
    setBackgroundColor("green");
  }
  function Decrement() {
    if (count > 0) setCount(count - 1);
    setBackgroundColor("red");
  }
  function Reset() {
    setCount(0);
    setBackgroundColor("gray");
  }

  const navigate = useNavigate();
  function inputPage() {
    navigate("/input");
  }

  return (
    <div>
      <div style={{ backgroundColor: color }}>
        <h3>Color : {color}</h3>
        <button onClick={greenBtn}>chge to Green </button>
        <button onClick={redBtn}>chge to Red </button>
      </div>
      <div style={{ backgroundColor, color: "white" }}>
        <h2>count : {count} </h2>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
      </div>

      <div>
        <button onClick={inputPage}>next</button>
      </div>
    </div>
  );
}
