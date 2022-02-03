import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Pools() {
  const items = [
    {
      image: "Quick-buy",
      title: "CAKE",
      dex: "PancakeSwap",
      Apy: "64%",
      Tvl: "$257,613.12",
      Earning: "$12,356.33",
    },
    {
      image: "Quick-buy",
      title: "BSW",
      dex: "BiSwap",
      Apy: "64%",
      Tvl: "$534,613.12",
      Earning: "$12,356.33",
    },
    {
      image: "Quick-buy",
      title: "BABY",
      dex: "BabySwap",
      Apy: "64%",
      Tvl: "$257,613.12",
      Earning: "$12,356.33",
    },
    {
      image: "Quick-buy",
      title: "BANANA",
      dex: "ApeSwap",
      Apy: "64%",
      Tvl: "$257,613.12",
      Earning: "$12,356.33",
    },
  ];
  return (
    <div>
      <div className=" py-8 sm:px-40 rounded-md w-full">
        {/* <div className=" flex items-center justify-between pb-6"></div> */}
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className=" min-w-full  overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead className="">
                  <tr>
                    <th className="px-3 py-3  text-left text-md font-semibold text-gray-600 uppercase tracking-wider"></th>
                    <th className="px-3 py-3 flex  text-left text-md font-semibold text-gray-600 uppercase tracking-wider">
                      Pool
                      <RiArrowDropDownLine style={{ fontSize: "22px" }} />
                    </th>
                    <th className="px-3 py-3  text-left text-md font-semibold text-gray-600 uppercase tracking-wider">
                      APY
                    </th>
                    <th className="px-3 py-3  text-left text-md font-semibold text-gray-600 uppercase tracking-wider">
                      TVl
                    </th>
                    <th className="px-3 py-3  text-left text-md font-semibold text-gray-600 uppercase tracking-wider">
                      Your Earnings
                    </th>
                  </tr>
                </thead>
                {items.map((item, idx) => (
                  <tbody className="" key={idx}>
                    <tr
                      className=" font-semibold"
                      style={{ background: "#dfe6ed" }}
                    >
                      <td className="px-3 py-5 mx-0">
                        <div className="">
                          <div className="flex-shrink-0 border-2 w-20 h-20">
                            <img
                              className="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-5 ">
                        <p className="text-orange text-3xl whitespace-no-wrap">
                          {item.title}
                        </p>
                        <p className="text-orange whitespace-no-wrap">
                          {item.dex}
                        </p>
                      </td>
                      <td className="px-2 py-5 ">
                        <p className="text-orange text-xl whitespace-no-wrap">
                          {item.Apy}
                        </p>
                      </td>
                      <td className="px-2 py-5 ">
                        <p className="text-orange text-xl whitespace-no-wrap">
                          {item.Tvl}
                        </p>
                      </td>
                      <td className="px-2 py-5  text-lg">
                        <span className="relative">{item.Earning}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-5 bg-white"></td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
