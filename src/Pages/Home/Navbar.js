import React, { useContext, useEffect, useState } from "react";
import Link from "react-scroll/modules/components/Link";
import { AuthContext } from "../../Context/AuthContext";
import { Link as LINK } from "react-router-dom";


export default function Navbar() {
  const { Auth, setAuth } = useContext(AuthContext)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    if(menu){
      setTimeout(() => {
        setMenu(false)
      },3000)
    }
  },[menu])
  return (
    <>
      <nav className=" w-full flex justify-center items-center">
        <div className="col-span-1 absolute top-1 left-4">
          <img src="./assets/img/Logo Pink.jpg" alt="logo" width="50" height="20" className=" rounded-lg rounded-br-3xl rounded-tl-3xl" />
        </div>

        <div className='col-span-3 absolute top-2 right-4 lg:hidden flex items-center justify-end'>
          <button onClick={() => setMenu(!menu)} className={`transition duration-200 ${menu ? `text-pink-tua bg-white border-2 border-pink-tua` : `text-white bg-pink-tua`}    rounded-lg p-2 font-bold`}>menu</button>
        </div>

        <div className="lg:flex gap-4 text-lg lg:py-4 font-[Yantramanav] text-pink-cust hidden">
          <button className="hover:text-pink-tua duration-200 font-semibold text-lg font-[Yantramanav]">Home</button>
          <Link to="profile" smooth={true} duration={2000}><button className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Profile</button></Link>
          <LINK to="/home"><Link to="products" smooth={true} duration={2000}><button className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Product</button></Link></LINK>
          <LINK to="/invoice"> <button className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Invoice</button></LINK>
          {Auth && <LINK to="/timeline"> <button className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Timeline</button></LINK>}
        </div>
      </nav>


      <div style={{ transitionDuration: '1s' }} className={`block lg:hidden w-60 h-3/6 bg-pink-tua opacity-70 rounded-3xl top-1/4 z-100 absolute   ${menu ? `left-1/4` : `-left-60`} `}>
        <div className="flex flex-col mx-auto items-center justify-center gap-12 h-full text-white ">
          <button className="hover:text-pink-tua duration-200 font-semibold text-lg font-[Yantramanav]">Home</button>
          <Link to="profile" smooth={true} duration={2000}><button className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Profile</button></Link>
          <LINK to="/home"><Link to="products" smooth={true} duration={2000}><button className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Product</button></Link></LINK>
          <LINK to="/invoice"> <button className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Invoice</button></LINK>
          {Auth && <LINK to="/timeline"> <button className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Timeline</button></LINK>}
        </div>

      </div>
    </>
  );
}
