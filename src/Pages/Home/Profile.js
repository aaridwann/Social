import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

export default function Profile() {
  return (
    <div className="container relative py-20 sm:overflow-hidden flex flex-col w-full items-center mt-20 mx-auto overflow-hidden pt-8" id="profile">
      <Slide className="bg-pink-cust p-4 mb-10 w-2/3 lg:w-1/3 text-4xl font-bold text-right self-end text-white ">
        {/* <div className=" bg-pink-cust p-4 mb-10 w-1/3 text-4xl font-bold text-right self-end text-white "> */}
          <h1>Profile</h1>
        {/* </div> */}
      </Slide>

      <Slide className="absolute w-60 lg:w-1/3 lg:h-3/4 hover:scale-105 duration-300 left-0 lg:left-40 lg:mt-10 mt-20 shadow-2xl overflow-hidden " triggerOnce={true} direction={'left'}>
          <img src="./assets/img/Korean Women.jpg" alt="profile" className=" h-full w-full object-cover "/>
      </Slide>


      <div className=" bg-pink-cust w-3/4 flex flex-col p-2 py-20 md:w-2/4 self-end lg:self-center justify-center 2xl:h-771 md:h-667  lg:pt-28 ">
        <div className=" ml-24 md:ml-40 mr-40 w-40 md:w-96 text-right md:text-left ">
          <Slide triggerOnce={true} direction={'right'}>
            <h1 className="2xl:text-6xl lg:text-3xl font-bold text-white tracking-widest">
              THE PLATFORM
            </h1></Slide>
          <Slide triggerOnce={true} direction={'left'} >
            <p className="font-bold text-white text-3xl">newest in the world !</p>
          </Slide>
        </div>
        <div className="flex-col flex flex-wrap ml-0 text-right md:text-left mr-10 md:ml-40 font-[Yantramanav] 2xl:mt-8 lg:mt-2 p4">
          <Slide triggerOnce={true} direction={'down'}>
            <h3 className="font-bold text-gray-500 text-2xl md:text-4xl">
              with this platform
              <br /> allows you to{" "}
            </h3></Slide>
          <Fade triggerOnce={true} delay={1000} duration={1000}><h1 className="font-bold text-white text-4xl md:text-6xl">EXPRESSION ! </h1></Fade>
          <Slide triggerOnce={true} direction={'up'}><h3 className="font-bold text-gray-500 text-2xls md:text-4xl">
            without limits according to your wishes.
          </h3></Slide>
        </div>
      </div>
    </div>
  );
}
