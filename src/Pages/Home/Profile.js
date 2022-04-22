import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

export default function Profile() {
  return (
    <div className="container sm:overflow-hidden grid mt-36 mb-48 mx-auto overflow-hidden pt-8" id="profile">
      <div className="absolute -mt-20 lg:-mt-0 2xl:right-0 lg:right-0 w-48 ml-2 p-2 bg-pink-cust text-center 2xl:text-2xl lg:text-xl font-bold text-white rounded-tl-extra rounded-t-3xl rounded-b-3xl">
        <h1>Profile</h1>
      </div>

      <Slide triggerOnce={'true'}>
        <div className="absolute 2xl:mt-20 lg:mt-10 ml-4 md:ml-80 w-52 md:w-96 overflow-hidden rounded-tr-extra rounded-bl-extraLG rounded-3xl z-50">
          <img src="./assets/img/Korean Women.jpg" alt="profile" width="356px" />
        </div>
      </Slide>


      <div className=" bg-pink-cust w-6/12 h-96 p-2 md:w-2/4 mx-auto mr-56 justify-center 2xl:h-771 md:h-667 pt-20 lg:pt-28 ">
        <div className=" ml-24 md:ml-40 mr-40 w-40 md:w-96 text-right md:text-left ">
          <Slide triggerOnce={'true'} direction={'right'}>
            <h1 className="2xl:text-6xl lg:text-3xl font-bold text-white tracking-widest">
              THE PLATFORM
            </h1></Slide>
          <Slide triggerOnce={'true'} direction={'left'} >
            <p className="font-bold text-white text-3xl">newest in the world !</p>
          </Slide>
        </div>
        <div className="flex-col flex flex-wrap ml-0 text-right md:text-left mr-10 md:ml-40 font-[Yantramanav] 2xl:mt-8 lg:mt-2 p4">
          <Slide triggerOnce={'true'} direction={'down'}>
            <h3 className="font-bold text-gray-500 text-2xl md:text-4xl">
              with this platform
              <br /> allows you to{" "}
            </h3></Slide>
          <Fade triggerOnce={'true'} delay={1000} duration={1000}><h1 className="font-bold text-white text-4xl md:text-6xl">EXPRESSION ! </h1></Fade>
          <Slide triggerOnce={'true'} direction={'up'}><h3 className="font-bold text-gray-500 text-2xls md:text-4xl">
            without limits according to your wishes.
          </h3></Slide>
        </div>
      </div>
    </div>
  );
}
