import { useState } from "react";
import { Link } from "react-router-dom";

export default function State2() {
  const [name, setName] = useState([]);
  const [inputName, setInputName] = useState("");
  function AddName() {
    setName([...name, inputName]);
  }
  console.log(name);

  return (
    <div>
      <input
        type="text"
        value={inputName}
        placeholder="enter a name"
        onChange={(e) => setInputName(e.target.value)}
      />
      <button onClick={AddName}>Add Name</button>

      <ul>
        {name.map((data, index) => (
          <li>{data}</li>
        ))}
      </ul>

      <div>
        <p>
          <Link to="/">Contact</Link>
        </p>
      </div>
    </div>
  );
}
