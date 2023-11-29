import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import UseInputTest from "./pages/useInputTest";
import UseHoverTest from "./pages/useHoverTest";
import UseDebounceTest from "./pages/useDebounceTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink className="App-link" to="/useInput">useInput</NavLink>
        <NavLink className="App-link" to="/useHover">useHover</NavLink>
        <NavLink className="App-link" to="/useDebounce">useDebounce</NavLink>
      </header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<h1>Select custom hook from left menu</h1>} />
          <Route path="/useInput" element={<UseInputTest />} />
          <Route path="/useHover" element={<UseHoverTest />} />
          <Route path="/useDebounce" element={<UseDebounceTest />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
