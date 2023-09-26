import State from "./Components/State";
import State2 from "./Components/State2";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<State />} />
          <Route path="/input" element={<State2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
