import logo from "./logo.svg";
import Weather from "./Weather.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kraków" />
    </div>
  );
}

export default App;
