import React from "react";

export default function Profile() {
  return (
    <div className="container sm:overflow-hidden grid mt-36 mb-48 mx-auto pt-8 " id="profile">
      <div className="absolute 2xl:right-0 lg:right-0 2xl:w-1/12 lg:w-2/12 p-2 bg-pink-cust text-center 2xl:text-2xl lg:text-xl font-bold text-white rounded-tl-extra rounded-t-3xl rounded-b-3xl ">
        <h1>Profile</h1>
      </div>


      <div className="absolute 2xl:mt-20 lg:mt-10 2xl:ml-72 lg:ml-4 overflow-hidden rounded-tr-extra rounded-bl-extraLG rounded-3xl z-50">
        <img src="./assets/img/Korean Women.jpg" alt="profile" width="356px" />
      </div>


      <div className=" bg-pink-cust w-7/12 2xl:mr-32 lg:mr-52 justify-self-end 2xl:h-771 lg:h-667 2xl:pt-60 lg:pt-28 ">
        <div className="ml-40 justify-end mr-40">
          <h1 className="2xl:text-6xl lg:text-3xl font-bold text-white tracking-widest">
            THE PLATFORM
          </h1>
          <p className="font-bold text-white text-3xl text-right 2xl:mr-16 lg:mr-2 2xl:pr-0 lg:pr-4 ">
            newest in the world !
          </p>
        </div>
        <div className="flex-col flex ml-40 font-[Yantramanav] 2xl:mt-8 lg:mt-2">
          <h3 className="font-bold text-gray-500 text-4xl ">
            with this platform
            <br /> allows you to{" "}
          </h3>
          <h1 className="font-bold text-white text-6xl">EXPRESSION ! </h1>
          <h3 className="font-bold text-gray-500 text-4xl">
            without limits according to your wishes.
          </h3>
        </div>
      </div>
    </div>
  );
}
