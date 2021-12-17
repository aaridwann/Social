import React, { useState } from "react";
import { Slide,Fade } from "react-awesome-reveal";
import {animateScroll as scroll} from "react-scroll";

export default function Products() {

  const [img, setImg] = useState(false);
  return (
    <div className="flex flex-col mb-60 mt-10 overflow-hidden " id="products" >
      <div className="absolute left-1/4 gap-0">
        <h3 className="font-[Yantramanav] text-6xl text-gray-600 text-right font-extralight">
          OUR
        </h3>
        <h1 className="font-[Yantramanav] font-extrabold text-6xl -mt-4 text-gray-600 tracking-tighter">
          PRODUCTS
        </h1>
      </div>
      <div className="self-end bg-pink-cust 2xl:w-5/12 lg:w-6/12 2xl:h-771 lg:h-full 2xl:pb-0 lg:pb-56 p-10">
        <div className="flex flex-row gap-3 2xl:mt-8 lg:mt-2 ml-8">
      <Slide cascade={true} dumping={1} direction={"right"}>
          <div className="w-72 text-right px-4 py-2 bg-white hover:bg-pink-cust duration-300 ">
            <h1 className="font-extrabold 2xl:text-3xl lg:text-xl text-pink-cust hover:text-white duration-300 ">
              Sweater
            </h1>
          </div>
          <div className=" w-72 text-right px-4 py-2 bg-white hover:bg-pink-cust duration-300">
            <h1 className="font-extrabold 2xl:text-3xl lg:text-xl text-pink-cust hover:text-white duration-300">
              Sneakers
            </h1>
          </div>
          <div className=" w-72 text-right px-4 py-2 bg-white hover:bg-pink-cust duration-300">
            <h1 className="font-extrabold 2xl:text-3xl lg:text-xl text-pink-cust hover:text-white duration-300">
              Marchendise
            </h1>
          </div>
          </Slide>
        </div>
        <div className="text-right mt-36 mr-20 ">
        <Slide delay={300} fraction={1} cascade={true}>
          <h2 className="font-[Yantramanav] font-extrabold 2xl:text-6xl lg:text-4xl text-white">
            More than{" "}
          </h2>
          <h1 className="font-[Yantramanav] font-extrabold 2xl:text-9xl lg:text-7xl  text-red-900">
            1 million{" "}
          </h1>
          <h2 className="font-[Yantramanav] font-extrabold 2xl:text-6xl lg:text-4xl text-white">
            products from{" "}
          </h2>
          <h2 className="font-[Yantramanav] font-extrabold 2xl:text-6xl lg:text-4xl text-white">
            all over the world
          </h2>
          </Slide>
        </div>
      </div>

      <div className="absolute z-50 w-4/6 mt-40 bg-coklat-muda h-771 flex items-center ">
        <div className="flex mx-auto justify-center items-center">
          <div className={`${img ? " block transition duration-300 ease-in " : "hidden"}  ease-linear `}>
         <Slide direction={'left'} duration={1000}>
            <img
              className=" rounded-3xl"
              src="./assets/img/Jordan 2.jpg"
              alt="jordan"
              width="440px"
            />
          </Slide>
          </div>

          <div className="p-2 bg-white 2xl:w-1/3 lg:w-3/6 2xl:ml-96 lg:ml-72 absolute -mt-20">
            <h1
              onClick={() => setImg(!img)}
              className=" text-6xl font-extrabold text-coklat-muda text-right "
            >
              AIR JORDAN
            </h1>
          </div>
          <div className="m-4 mt-48 text-white font-light tracking-wider font-[Yantramanav]">
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
