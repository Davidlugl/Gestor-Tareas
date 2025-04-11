import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <div className="container">
      <h1>Gestor de Tareas</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/create">Crear Tarea</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </div>
  );
}

export default App;

