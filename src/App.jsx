import { Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";

function App() {
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/notes" element={<NotesPage />} />
  </Routes>;
}

export default App;
