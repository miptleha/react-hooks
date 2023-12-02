import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import { UseInputTest, UseHoverTest, UseDebounceTest, UseRequestTest } from './pages';

function App() {

  const links = [
    { name: "", component: (<h1 className="center">Select custom hook from left menu</h1>)},
    { name: "useInput", component: (<UseInputTest />) },
    { name: "useHover", component: (<UseHoverTest />) },
    { name: "useDebounce", component: (<UseDebounceTest />) },
    { name: "useRequest", component: (<UseRequestTest />) },
  ]

  return (
    <div className="App">
      <header className="App-header">
        {links.filter(l => l.name).map(l => (
          <NavLink key={l.name} className="App-link" to={`/${l.name}`}>{l.name}</NavLink>
        ))}
      </header>
      <main className="App-main">
        <Routes>
          {links.map(l => (
            <Route key={l.name} path={`/${l.name}`} element={l.component} />  
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
