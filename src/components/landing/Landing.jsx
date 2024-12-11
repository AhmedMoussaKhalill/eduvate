import React from "react";
import Hero from "./landing-children/Hero";
import TrustedBy from "./landing-children/TrustedBy";
import UserNavBar from "../user/UserNavBar";
const Landing = () => {
  return (
    <div>
      <UserNavBar />
      <div className="space-y-32">
        <Hero />
        <TrustedBy />
        {/* <StickyScrollRevealDemo /> */}
        {/* <JoinUs /> */}
        <div></div>
      </div>
    </div>
  );
};

export default Landing;
