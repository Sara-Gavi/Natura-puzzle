import "../scss/App.scss";
import LandingPage from "./LandingPage";
import PuzzlePage from "./PuzzlePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/puzzle" element={<PuzzlePage />} />
    </Routes>
  );
}

export default App;
