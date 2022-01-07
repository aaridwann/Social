import React, { useState } from "react";
import { Slide,Fade } from "react-awesome-reveal";
import {animateScroll as scroll} from "react-scroll";

export default function Products() {

  const [img, setImg] = useState(false);
  return (
    <div className="flex flex-col mb-60 mt-10 overflow-hidden " id="products" >
      <div className="absolute left-1/4 gap-0">
        <h3 className="font-[Yantramanav] text-6xl text-gray-600 text-left md:text-right font-extralight">
          OUR
        </h3>
        <h1 className="font-[Yantramanav] font-extrabold text-6xl -mt-4 text-gray-600 tracking-tighter">
          PRODUCTS
        </h1>
      </div>



      <div className="self-end bg-pink-cust w-60 md:w-2/5 md:h-full md:pb-56 p-10 mt-28 md:mt-0 ">
        <div className="flex flex-col md:flex-row gap-3 2xl:mt-8 lg:mt-2 md:ml-8 ml-14">
      <Slide cascade={true} dumping={1} direction={"right"}>
          <div className="w-36 md:w-72 text-left md:text-right px-4 py-2 bg-white hover:bg-pink-cust duration-300 ">
            <h1 className="font-extrabold md:text-3xl text-xl text-pink-cust hover:text-white duration-300 ">
              Sweater
            </h1>
          </div>
          <div className="w-36 text-left md:text-right px-4 py-2 bg-white hover:bg-pink-cust duration-300">
            <h1 className="font-extrabold md:text-3xl text-xl text-pink-cust hover:text-white duration-300">
              Sneakers
            </h1>
          </div>
          <div className=" w-36 text-left md:text-right px-4 py-2 bg-white hover:bg-pink-cust duration-300">
            <h1 className="font-extrabold md:text-3xl text-xl text-pink-cust hover:text-white duration-300">
              Marchendise
            </h1>
          </div>
          </Slide>
        </div>
        <div className="text-right mt-4 md:mt-36 -mr-10 md:mr-20 ">
        <Slide delay={300} fraction={1} cascade={true}>
          <h2 className="font-[Yantramanav] font-extrabold md:text-6xl text-4xl text-white">
            More than{" "}
          </h2>
          <h1 className="font-[Yantramanav] font-extrabold md:text-9xl text-6xl  text-red-900">
            <p className=" text-center md:text-right">1</p> million{" "}
          </h1>
          <h2 className="font-[Yantramanav] font-extrabold md:text-6xl text-2xl text-white">
            products from{" "}
          </h2>
          <h2 className="font-[Yantramanav] font-extrabold md:text-6xl text-xl text-white">
            all over the world
          </h2>
          </Slide>
        </div>
      </div>

      <div className="absolute p-4 md:p-0 md:z-50 w-3/5 md:w-4/6 md:mt-40 mt-48 bg-coklat-muda md:h-771 flex items-center ">
        <div className="flex flex-col lg:flex-row mx-auto justify-center items-center">
          <div style={{transitionDuration:'1s'}} className={`${img ?`block`:`hidden`} `}>
         <Slide direction={'left'} duration={1000}>
            <img style={{transitionDuration:'1s'}}
              className=" rounded-3xl"
              src="./assets/img/Jordan 2.jpg"
              alt="jordan"
              width="440px"
            />
          </Slide>
          </div>

          <div className="p-2 bg-white md:w-1/3 w-48 md:ml-96 absolute -mt-20">
            <h1
              onClick={() => setImg(!img)}
              className=" text-4xl md:text-6xl font-extrabold text-coklat-muda text-right "
            >
              AIR JORDAN
            </h1>
          </div>
          <div className="m-4 mt-48 text-white text-justify md:text-left font-light tracking-wider font-[Yantramanav]">
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
      <button onClick={() => scroll.scrollToTop()} className=" btn btn-md m-8 bg-coklat hover:text-gray-700 duration-200 p-8 self-end text-white font-bold  ">back to top </button>
    </div>
  );
}
