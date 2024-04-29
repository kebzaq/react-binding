import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <header>
        <h2>R: Two way binding</h2>
        <h5>When you type on input field, result has to show on the browser</h5>
      </header>
      <hr />
      <div className="container">
        <input
          id="input"
          onChange={handleChange}
          type="text"
          className="form-control-lg"
          placeholder="Type your message here..."
        />
        <h4 id="output">{value}</h4>
      </div>
      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default App;
