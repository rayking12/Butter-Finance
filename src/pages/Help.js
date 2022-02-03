import React from "react";
import { AiFillMail } from "react-icons/ai";
import { BsTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Help() {
  return (
    <div className="bg-white">
      <div className="container px-2 relative mx-auto mt-10 border-t-2 border-gray-100">
        <div
          className="mx-auto"
          style={{
            background: "#CF87BF",
            width: "80px",
            transform: "translateY(-2px)",
            height: "2px",
          }}
        ></div>
      </div>
      <div className="container mt-20 pb-10 mx-auto px-10">
        <div className="md:flex">
          <div className="pb-10" style={{ flexBasis: "50%" }}>
            <div>
              <h3 className="text-black mb-3 text-xl font-semibold">
                {" "}
                CONTACT
              </h3>
              <p className="text-sm text-gray-800 max-w-md leading-7">
                Our support team are available to respond to your 24/7. You can
                also chat with us easily through our chat channels.
              </p>
            </div>
            <div className="my-4">
              <div>
                <p
                  className="text-xl px-3 py-1 my-1 font-semibold "
                  style={{ borderLeft: "3px solid #D2A98E" }}
                >
                  Email Address
                </p>
                <p className="flex mx-4">
                  {" "}
                  <AiFillMail
                    className="text-2xl mr-2"
                    style={{ color: "#DB3545" }}
                  />
                  info@ciptopup.com
                </p>
              </div>
              <div>
                <p
                  className="text-xl px-3 py-1 my-1 font-semibold "
                  style={{ borderLeft: "3px solid #D2A98E" }}
                >
                  Phone Number
                </p>
                <div className="flex">
                  <p className="flex mx-4 border-r-2 pr-3">
                    {" "}
                    <BsTelephoneFill
                      className="text-xl mr-2"
                      style={{ color: "#DB3545" }}
                    />
                    09137574484
                  </p>
                  <p className="flex ">
                    {" "}
                    <BsWhatsapp
                      className="text-xl mr-2"
                      style={{ color: "#DB3545" }}
                    />
                    09137574484
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-black mb-3 text-xl font-semibold">
                SOCIAL MEDIA
              </h3>
              <p className="text-sm text-gray-800 max-w-md leading-7">
                Check out our social accounts and email @{" "}
                <Link
                  href="mailto:support@ciptopup.org"
                  style={{ color: "blue" }}
                >
                  support@ciptopup.org
                </Link>
              </p>
              <div className="flex pt-5">
                <a
                  href="https://instagram.com/cip.topup"
                  className="py-1 px-4 text-white  text-sm mr-5 block"
                  style={{ background: "#DC3545" }}
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <Link
                  //   href="#"
                  className="py-1 px-4 text-white bg-blue-500 text-sm mr-5 block"
                >
                  <i className="fa fa-twitter"></i>
                </Link>

                <Link
                  //   href="#"
                  className="py-1 px-4 text-white bg-blue-600 rounded text-sm block"
                >
                  <i className="fa fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
          <div style={{ flexBasis: "50%" }} className="">
            <form>
              <div className="flex mb-5">
                <div style={{ flexBasis: "50%" }} className="mr-5">
                  <input
                    style={{
                      background: "#F8F8F8",
                    }}
                    placeholder="Name*"
                    className="py-3  px-4 text-gray-500 rounded-sm w-full"
                    type="text"
                  />
                </div>
                <div style={{ flexBasis: "50%" }}>
                  <input
                    style={{
                      background: "#F8F8F8",
                    }}
                    placeholder="Email*"
                    className="py-3  px-4 text-gray-500 rounded-sm w-full"
                    type="email"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="mb-5">
                <input
                  style={{
                    background: "#F8F8F8",
                  }}
                  className="py-3  px-4 text-gray-500 rounded-sm w-full"
                  type="text"
                  placeholder="Subject*"
                />
              </div>
              <div className="mb-5">
                <textarea
                  style={{
                    background: "#F8F8F8",
                  }}
                  placeholder="Message*"
                  className="py-3  px-4 text-gray-500 rounded-sm w-full"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <button
                  //   style={{ background: "#CF87BF" }}
                  className="px-6 text-white py-3 bg-king font-semibold rounded"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
