import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
export const serverUrl = "http://localhost:3000";
import Auth from "./pages/Auth";
import { getCurrentUser } from "./services/api";

const App = () => {
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  );
};

export default App;
