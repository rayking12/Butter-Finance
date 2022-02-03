import React from "react";
// import {
//   FaPhoneAlt,
//   FaTwitterSquare,
//   FaInstagramSquare,
//   FaFacebookSquare,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { ImLocation2 } from "react-icons/im";
// import { IoMdMail } from "react-icons/io";
// import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Footer() {
  return (
    <div className=" font pt-20 ">
      <div className="flex flex-col items-center  justify-center">
        <img src="images/footers.png" alt="" />
        <img src="images/discord.png" className="w-10 my-5" alt="" />
        <p className="text-white text-xs sm:text-lg text-center">
          Copyright 2022 ButterFinance, All Rights Reserved
        </p>
      </div>
    </div>
  );
}
