import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Inicio from "./components/inicio/Inicio";
import Programa from "./components/programa/Programa";
import Registro from "./components/registro/Registro";
import Patrocinio from "./components/patrocinio/Patrocinio";
import Tarifas from "./components/tarifas/Tarifas";
import Contacto from "./components/contacto/Contacto";
import Galeria from "./components/galeria/Galeria";
import Talleres from "./components/talleres/Talleres";
import CladitXela from "./components/cladit-xela/CladitXela";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          estrict
          path="/"
          element={<Navigate to="/xela" replace />}
        />
        <Route element={<Layout />}>
          <Route path="/gt" element={<Inicio />} />
          <Route path="/programa" element={<Programa />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/patrocinio" element={<Patrocinio />} />
          <Route path="/tarifas" element={<Tarifas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/xela" element={<CladitXela />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
