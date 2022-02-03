// import { useState, useEffect, useCallback } from "react";
import { Switch } from "react-router-dom";
// import axios from "./services/axios";
// import AOS from "aos";
import "./App.css";
// import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
// import "@material-tailwind/react/tailwind.css";

// import UserProvider from "./contexts/UserContext";

import "aos/dist/aos.css";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Switch>
          <Home />
        </Switch>
      </div>
      <div style={{ background: "#b987e1" }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
