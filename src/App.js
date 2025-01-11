import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useContext, useEffect } from "react";
import { HelloPage } from "./pages/HelloPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { FAQPage } from "./pages/FAQPage";
import { UserContext } from "./UserContext";

function App() {
  const { saveCurrentPath } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    if (saveCurrentPath) {
      saveCurrentPath(location.pathname);
    }
  }, [location, saveCurrentPath]);

  return (
    <div className="meet-hub">
      <Routes>
        <Route path="/" element={<HelloPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </div>
  );
}

export default App;
