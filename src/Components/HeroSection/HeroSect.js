import React from "react";

export default function HeroSect() {
  return (
    <div className=" bg-pink-cust  ">
      <div className="container flex h-771 flex-row-3 gap-2 py-28  mx-auto items-center px-20 rounded-3xl">
        {/* Herro Kiri */}
        <div className=" col-span-1 items-center mx-auto justify-center">
          <h1 className="text-5xl text-white font-extrabold tracking-lebar ">
            FLEXIBLE
          </h1>
          <p className="text-white tracking-lebar2 mt-4 font-semibold">
            ANYWHERE ANYTIME
          </p>
          <div className="flex flex-row gap-4 justify-end mr-10 my-4 text-white ">
            <button className="bg-pink-tua rounded-xl px-5 py-1 duration-200 hover:shadow-lg
            font-[Yellowtail]
             ">
              Login
            </button>
            <button className=" text-gray-500 font-[Yantramanav] text-lg font-bold
            hover:border-2 border-pink-tua rounded-3xl px-4 duration-200
            ">Sign up</button>
          </div>
        </div>
        {/* END HERRO KIRI */}

        <div className="flex h-72 w-10/12 items-center bg-local col-span-2 overflow-hidden  rounded-br-full rounded-tl-full ">
          <img src="./assets/img/interior.jpg" alt="home" className="w-full " />
        </div>
      </div>
    </div>
  );
}
