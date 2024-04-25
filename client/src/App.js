import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing.js";
import Login from "./components/Login/Login.js";
import SignUp from "./components/SignUp/SignUp.js";
import Skills from "./components/Skills/Skills.js";
import Settings from "./components/Settings/Settings.js";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
