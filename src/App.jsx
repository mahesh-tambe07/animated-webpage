import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ModelViewerPage from "./components/ModelViewerPage"; // Make sure the filename case matches


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/ModelViewerPage" />} />
        <Route path="/ModelViewerPage" element={<ModelViewerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
