import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Icons } from "../global/icons/icons";

const UserNavBar = () => {
  return (
    <header className="mx-auto max-w-7xl px-6 py-7">
      <div className="flex items-center justify-between">
        <Link to="/" className=" logo relative text-4xl font-bold">
          Edu
          <span className="logo bg-gradient-to-tr from-blue-700 via-blue-600 to-blue-500 bg-clip-text pr-1.5 text-transparent">
            vate
          </span>
          <Icons.cap className="absolute -left-0.5 -top-1 size-[20px] -rotate-[30deg]" />
        </Link>

        <div className="fixed inset-x-0 top-0 z-50">
          <div className="mx-auto flex max-w-md items-center justify-center rounded-b-xl bg-white/95 px-5 py-5 shadow-md">
            <div>
              <nav>
                <ul className="flex space-x-6 text-neutral-700">
                  <li className="hover:underline hover:underline-offset-8">
                    Community
                  </li>
                  <li className="hover:underline hover:underline-offset-4">
                    Solutions
                  </li>
                  <li className="hover:underline hover:underline-offset-4">
                    How it works
                  </li>
                  <li className="hover:underline hover:underline-offset-4">
                    About Us
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="z-50 flex items-center space-x-4 text-sm font-medium">
          <Link
            to="/login"
            className="transition-all duration-300 hover:-translate-y-0.5"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="transition-all duration-300 hover:-translate-y-0.5"
          >
            <Button
              size="lg"
              variant="default"
              className="rounded-full bg-gradient-to-tr from-blue-700 via-blue-600 to-blue-500"
            >
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default UserNavBar;
