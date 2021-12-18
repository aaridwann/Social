import React, { useContext } from "react";
import Link from "react-scroll/modules/components/Link";
import { AuthContext } from "../../Context/AuthContext";
import { Link as LINK } from "react-router-dom";


export default function Navbar() {
  const{Auth, setAuth} = useContext(AuthContext)
  return (
    <nav className="container grid grid-cols-4 items-center mx-auto top-0 p-2">
      <div className="  col-span-1  ">
        <img src="./assets/img/Logo Pink.jpg" alt="logo" width="80" height="20" className=" rounded-lg rounded-br-3xl rounded-tl-3xl" />
      </div>
      <div className="col-span-3 font-[Yantramanav]">
        <ul className="flex flex-row mx-auto justify-start ml-72 gap-4 text-lg font-[Yantramanav] text-pink-cust">
        <button className="hover:text-pink-tua duration-200 font-semibold text-lg font-[Yantramanav]">Home</button>
        <Link to="profile" smooth={true} duration={2000}><button className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Profile</button></Link>
        <LINK to="/home"><Link to="products" smooth={true} duration={2000}><button className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Product</button></Link></LINK>
        {Auth &&  <LINK to="/timeline"> <button  className="hover:text-pink-tua duration-200 font-bold text-lg font-[Yantramanav]">Timeline</button></LINK> }
        </ul>
      </div>
    </nav>
  );
}
