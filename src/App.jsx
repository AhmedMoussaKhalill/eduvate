import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutUser from "./LayoutUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<LayoutUser />} />
      </Routes>
    </div>
  );
};

export default App;
