import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import UseInputTest from "./pages/useInputTest";
import UseHoverTest from "./pages/useHoverTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink className="App-link" to="/useInput">useInput</NavLink>
        <NavLink className="App-link" to="/useHover">useHover</NavLink>
      </header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<h1>Select custom hook from left menu</h1>} />
          <Route path="/useInput" element={<UseInputTest />} />
          <Route path="/useHover" element={<UseHoverTest />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
