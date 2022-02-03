import React from "react";
import { Link } from "react-router-dom";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { RiDashboardLine } from "react-icons/ri";
// import { BiLogOut } from "react-icons/bi";

export default function Navbar({ userInfo }) {
  return (
    <>
      {/* <div
        className="text-center text-xl font-semibold py-3 text-white"
        style={{ background: "#0A335C" }}
      >
        {" "} */}
      {/* <marquee>Hello CIP users, Welcome back</marquee> */}
      {/* </div> */}
      <nav className="sm:mx-10 py-3" role="navigation">
        <div className="my-2  md:flex-1 flex md:w-auto w-full justify-between items-center">
          <Link to="/">
            <div className="text-3xl font-bold" style={{ color: "#293845" }}>
              Butter Finance
            </div>
          </Link>

          <div className=" hidden md:block">
            <div className=" flex justify-center items-baseline space-x-10">
              <Link
                to="/dashboard"
                className="focus: text-orange border-b-2 py-1  text-md font-medium"
              >
                Vaults
              </Link>

              <Link
                to="/dashboard"
                className="text-orange px-1 mx-6  py-1 border-b-2 bg-pink-light text-md font-medium"
              >
                Docs
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            {userInfo?.isAuthenticated === false ? (
              <>
                <div className=" flex items-baseline space-x-4">
                  <Link
                    to="/login"
                    className="text-black px-3 py-2 rounded-md text-md font-medium"
                  >
                    Sign in
                  </Link>

                  <Link
                    to="/register"
                    className="text-white px-4 py-2 rounded bg-pink-light text-md font-medium"
                    style={{ background: "#0A335C" }}
                  >
                    Sign up
                  </Link>
                </div>
              </>
            ) : (
              <div
                className=" flex justify-between capitalize bg-pink-light text-md font-medium"
                // style={{ color: "#0A335C" }}
              >
                <div
                  className="px-3  "
                  style={{
                    color: "#f7c325",
                    border: "2px solid #f7c325",
                    borderRadius: "30px",
                  }}
                >
                  BSC
                </div>
                <div>
                  <button
                    className="text-white px-3 font-semibold mx-3 py-1"
                    style={{ background: "#1aae9f", borderRadius: "30px" }}
                  >
                    Connect
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className=" inline-flex items-center justify-center p-2 rounded-md text-blue hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div> */}

          {/* <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        > */}
          {/* {console.log(userInfo.isAuthenticated)} */}
          {userInfo?.isAuthenticated === false ? (
            <div className="md:hidden inline-flex" id="mobile-menu">
              <div className="px-4 inline-flex pt-2 pb-3 space-x-1 sm:px-3">
                <Link
                  to="/login"
                  className=" text-blue block sm:px-0 px-3  py-2  text-base font-medium"
                >
                  Log In
                </Link>
                {/* <Link
                to="/help"
                className=" text-blue  sm:px-0 px-3 border-b  py-2  text-base font-medium"
                >
                Need Help
                </Link>
                
                <Link
                to="/register"
                className="text-blue hover:bg-gray-700 sm:px-0 px-3 hover:text-white block  py-2  text-base font-medium"
              >
                Sign up
              </Link> */}
              </div>
            </div>
          ) : (
            <div className="md:hidden " id="mobile-menu">
              <div className="pb-3    space-y-1 px-3 sm:px-3">
                <Link
                  to="/dashboard"
                  className=" text-blue flex  block border-b px-3 py-2  text-base font-medium"
                >
                  {/* <RiDashboardLine className="mx-1  text-2xl text-blue-400" />{" "} */}
                  Dashboard
                </Link>
                {/* <Link
                  to="/help"
                  className=" text-blue border-b block px-3 py-2  text-base font-medium"
                >
                  Need Help
                </Link>

                <Link
                  to="/logout"
                  className="text-blue flex border-b hover:bg-gray-700 hover:text-white block sm:px-3 py-2  text-base font-medium"
                >
                  <BiLogOut className="mx-1  text-2xl text-red" /> Log Out
                </Link> */}
              </div>
            </div>
          )}
          {/* </Transition> */}
        </div>
      </nav>
    </>
  );
}
