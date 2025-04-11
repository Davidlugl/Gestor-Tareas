import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskPage from './pages/TaskPage';

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/tasks/:status" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}
