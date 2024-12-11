import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import EduChat from "./components/user/Edu-Chat";

const LayoutUser = ({}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="https://eduvate-iota.vercel.app/edu-chat" element={<EduChat />} />
      </Routes>
    </div>
  );
};

export default LayoutUser;
