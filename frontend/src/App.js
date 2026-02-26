import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
function App() {
  return (
    <Router>
      <Routes>
        {//<Route estrict path="/" element={<Navigate to="/2026/gt" replace />} />
        }
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
