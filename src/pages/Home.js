import React from "react";
import Hero from "../components/Home/Hero";
import Pools from "../components/Home/Pools";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="shadow-t-lg" style={{ background: "#8dd7cf" }}>
          <Hero />
        </div>
        <div>
          <Pools />
        </div>
      </div>
    </>
  );
}
