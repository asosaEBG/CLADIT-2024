import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Inicio from "./components/inicio/Inicio";
import Contacto from "./components/contacto/Contacto";
import CladitXela from "./components/cladit-xela/CladitXela";
function App() {
  return (
    <Router>
      <Routes>
        <Route estrict path="/" element={<Navigate to="/xela" replace />} />
        <Route element={<Layout />}>
          <Route path="/gt" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/xela" element={<CladitXela />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
