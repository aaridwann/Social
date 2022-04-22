import React, { useContext, useState } from "react";
import Link from "react-scroll/modules/components/Link";
import { AuthContext } from "../../Context/AuthContext";
import { Link as LINK } from "react-router-dom";


export default function Navbar() {
  const{Auth, setAuth} = useContext(AuthContext)
  const [menu, setMenu] = useState(false)
  return (
    <>
    <nav className="container w-80 lg:w-full gap-8 overflow-hidden grid grid-cols-4 place-content-around items-center mx-auto top-0 p-2">
      <div className="col-span-1">
        <img src="./assets/img/Logo Pink.jpg" alt="logo" width="80" height="20" className=" rounded-lg rounded-br-3xl rounded-tl-3xl" />
      </div>
    
        <div className='col-span-3  md:hidden flex items-center justify-end'>
          <button onClick={() => setMenu(!menu)} className={`transition duration-200 ${menu ? `text-pink-tua bg-white border-2 border-pink-tua` : `text-white bg-pink-tua` }    rounded-lg p-2 font-bold`}>menu</button>
        </div>

      <div className="col-span-3 font-[Yantramanav] hidden lg:block">
        <ul className="flex flex-row mx-auto justify-start ml-72 gap-4 text-lg font-[Yantramanav] text-pink-cust">
        <button className="hover:text-pink-tua duration-200 font-semibold text-lg font-[Yantramanav]">Home</button>
          <Link to="profile" smooth={true} duration={2000}><button className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Profile</button></Link>
          <LINK to="/home"><Link to="products" smooth={true} duration={2000}><button className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Product</button></Link></LINK>
          <LINK to="/invoice"> <button  className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Invoice</button></LINK> 
        {Auth &&  <LINK to="/timeline"> <button  className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Timeline</button></LINK> }
        </ul>
      </div>
    </nav>
        <div style={{transitionDuration:'1s'}}  className={`block lg:hidden w-60 h-3/6 bg-pink-tua opacity-70 rounded-3xl top-1/4 z-100 absolute   ${menu ? `left-1/4` : `-left-60`} `}>
          <div className="flex flex-col mx-auto items-center justify-center gap-12 h-full">
            <button className="hover:text-pink-tua duration-200 font-semibold text-lg font-[Yantramanav]">Home</button>
            <Link to="profile" smooth={true} duration={2000}><button className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Profile</button></Link>
            <LINK to="/home"><Link to="products" smooth={true} duration={2000}><button className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Product</button></Link></LINK>
            <LINK to="/invoice"> <button  className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Invoice</button></LINK> 
            {Auth &&  <LINK to="/timeline"> <button  className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Timeline</button></LINK>}
          </div>

        </div>
    </>
  );
}
