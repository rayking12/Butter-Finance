import React from "react";
// import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div
      className="mx-10 max-w-full py-10 font md:flex justify-around"
      style={{ maxWidth: "100%" }}
    >
      <div className=" px-4 sm:w-3/5">
        <div className="lg:text-3xl font-bold m-0 text-orange text-4xl sm:text-3xl sm:w-5/5 wrapper ">
          ButterFinance Syrup Optimizer
        </div>
        <div className="mt-2   ">Maximised Single Token Staking</div>
      </div>
      <div
        className="text-orange w-76 h-48 p-10"
        style={{ background: "#f3c19d" }}
      >
        <h2 className="text-4xl  font-bold">$751,952.06</h2>
        <div className="text-2xl ">Total TVL</div>
      </div>
    </div>
  );
}
