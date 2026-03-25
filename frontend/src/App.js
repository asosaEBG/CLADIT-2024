import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Patrocinio from "./components/patrocinio/Patrocinio";
import Tarifas from "./components/tarifas/Tarifas";
import Contacto from "./components/contacto/Contacto";
import Programa from "./components/programa/Programa";
function App() {
  return (
    <Router>
      <Routes>
        {//<Route estrict path="/" element={<Navigate to="/2026/gt" replace />} />
        }
        <Route element={<Layout />}>
          <Route estrict path="/" element={<Home />} />
          <Route path="/patrocinio" element={<Patrocinio />} />
          <Route path="/tarifas" element={<Tarifas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/programa" element={<Programa />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
