import React, { useState } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import { animateScroll as scroll } from "react-scroll";

export default function Products() {

  return (
    <div className="flex flex-col w-full mb-60 mt-10 overflow-hidden " id="products" >
      <div className="absolute left-0 lg:left-1/4 gap-0">
        <h3 className="font-[Yantramanav] text-6xl text-gray-600 text-left md:text-right font-extralight">
          OUR
        </h3>
        <h1 className="font-[Yantramanav] font-extrabold text-6xl -mt-4 text-gray-600 tracking-tighter">
          PRODUCTS
        </h1>
      </div>

      <div className="self-end bg-pink-cust w-2/3 lg:w-fit mt-24 lg:mt-10 flex flex-col">

        <div className="flex self-end lg:self-start lg:items-center flex-col lg:flex-row m-2 gap-3">
          <Slide direction={"right"}>
            <h1 className=" bg-white py-3 px-8 font-extrabold md:text-3xl text-xl text-pink-cust hover:text-white duration-300 ">
              Sweater
            </h1>
            <h1 className="bg-white py-3 px-8  font-extrabold md:text-3xl text-xl text-pink-cust hover:text-white duration-300">
              Sneakers
            </h1>
            <h1 className="bg-white py-3 px-8 font-extrabold md:text-3xl text-xl text-pink-cust hover:text-white duration-300">
              Marchendise
            </h1>
          </Slide>
        </div>

        <div className="text-right lg:mt-8 m-4">
          <Slide className=" w-full flex flex-col justify-end items-end " cascade={true}>
            <h2 className="font-[Yantramanav] font-extrabold md:text-6xl text-4xl text-white">
              More than{" "}
            </h2>
            <h1 className="font-[Yantramanav] font-extrabold md:text-9xl text-6xl  text-red-900">
              1<br /> million{" "}
            </h1>
            <h2 className="font-[Yantramanav] font-extrabold md:text-6xl text-2xl text-white">
              products from{" "}
            </h2>
            <h2 className="font-[Yantramanav] font-extrabold md:text-6xl text-xl text-white">
              all over<br />in the world
            </h2>
          </Slide>
        </div>
      </div>

      <div className="lg:absolute mt-10 lg:mt-40 p-4 lg:p-0 bg-coklat-muda md:h-771 flex items-center ">
        <div className="flex flex-col lg:flex-row mx-auto justify-center items-center">
          <Slide direction={'left'} duration={1000}>
            <img style={{ transitionDuration: '1s' }}
              className=" rounded-3xl"
              src="./assets/img/Jordan 2.jpg"
              alt="jordan"
              width="440px"
            />
          </Slide>

          <div className="p-2 bg-white md:w-1/3 w-48 md:ml-96 absolute -mt-20">
            <Slide direction="top">
              <h1 className=" text-4xl md:text-6xl font-extrabold text-coklat-muda text-right">
                AIR JORDAN
              </h1>
            </Slide>
          </div>
          <div className="m-4 z-100 lg:z-0 p-8 lg:p-0 lg:bg-transparent text-center lg:mt-48 lg:text-white lg:text-justify md:text-left font-light tracking-wider font-[Yantramanav]">
            <p>
              Take flight. As soon as the Air Jordan line debuted in 1985,
              <br />
              it started shaping sneaker culture as we know it today.
              <br /> Find all the legendary models including the Air Jordan 1,
              <br />
              Air Jordan 3, Air Jordan 6, and Air Jordan 11 here.
            </p>
          </div>
        </div>
      </div>


      {/* <button onClick={() => scroll.scrollToTop()} className=" btn btn-md m-8 bg-coklat hover:text-gray-700 duration-200 p-8 self-end text-white font-bold  ">back to top </button> */}
    </div>
  );
}
