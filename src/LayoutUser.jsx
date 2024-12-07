import React from "react";
import { Route, Routes } from "react-router-dom";
import UserNavBar from "./components/user/UserNavBar";
import Landing from "./components/landing/Landing";

const LayoutUser = ({}) => {
  return (
    <div>
      <UserNavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default LayoutUser;
