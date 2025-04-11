import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskPage from "./pages/TaskPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/tasks/:status" element={<TaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;