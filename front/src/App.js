import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Inicio from "./components/inicio/Inicio";
import Programa from "./components/programa/Programa";
import Registro from "./components/registro/Registro";
import Patrocinio from "./components/patrocinio/Patrocinio";
import Tarifas from "./components/tarifas/Tarifas";
import Contacto from "./components/contacto/Contacto";
import Galeria from "./components/galeria/Galeria";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/programa" element={<Programa />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/patrocinio" element={<Patrocinio />} />
          <Route path="/tarifas" element={<Tarifas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/galeria" element={<Galeria />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
