import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout2024 from "./components/2024/layout/Layout";
import Inicio2024 from "./components/2024/inicio/Inicio";
import Contacto2024 from "./components/2024/contacto/Contacto";
import CladitXela2024 from "./components/2024/cladit-xela/CladitXela";
import Layout2025 from "./components/2025/layout/Layout";
import Inicio2025 from "./components/2025/inicio/Inicio";
import Contacto2025 from "./components/2025/contacto/Contacto";
import CladitXela2025 from "./components/2025/cladit-xela/CladitXela";
function App() {
  return (
    <Router>
      <Routes>
        <Route estrict path="/" element={<Navigate to="/2025/xela" replace />} />
        <Route element={<Layout2024 />}>
          <Route path="/2024/gt" element={<Inicio2024 />} />
          <Route path="/2024/contacto" element={<Contacto2024 />} />
          <Route path="/2024/xela" element={<CladitXela2024 />} />
        </Route>
        <Route element={<Layout2025 />}>
          <Route path="/2025/gt" element={<Inicio2025 />} />
          <Route path="/2025/contacto" element={<Contacto2025 />} />
          <Route path="/2025/xela" element={<CladitXela2025 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
