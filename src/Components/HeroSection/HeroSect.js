import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import {useNavigate} from 'react-router-dom'

export default function HeroSect(props) {
  const {Auth, setAuth} = useContext(AuthContext)
  const navigate = useNavigate()
  const logout = () => {
  sessionStorage.clear();
  setAuth(null)
   
  }
  return (
    <div className="bg-pink-cust w-full overflow-hidden">
      <div className="container flex h-771 flex-col-reverse lg:flex-row-reverse lg:flex-row-3 gap-2 py-28 justify-center mx-auto items-center px-20 rounded-3xl">
        {/* Herro Kiri */}
        <div className="col-span-1 items-center mx-auto justify-center">
          <h1 className="text-5xl text-white font-extrabold tracking-widest lg:tracking-lebar">
            FLEXIBLE Testing
          </h1>
          <p className="text-white tracking-lebar2 mt-4 font-semibold">
            ANYWHERE ANYTIME
          </p>
          <div className="flex flex-row gap-4 justify-end mr-10 my-4 text-white ">
            {!Auth ?
            <button onClick={props.change}  className="bg-pink-tua rounded-xl px-5 py-1 duration-200 hover:shadow-lg
            font-[Yellowtail]
             ">
              Login
            </button> 
            :
            <button onClick={() => logout()}  className="bg-pink-tua rounded-xl px-5 py-1 duration-200 hover:shadow-lg
            font-[Yellowtail]
             ">
              Logout
            </button>
            }
           {!Auth &&  <button onClick={() => navigate('/registration')} className=" text-gray-500 font-[Yantramanav] text-lg font-bold
            hover:border-2 border-pink-tua rounded-3xl px-4 duration-200
            ">Sign up</button>
            }
          </div>
        </div>
        {/* END HERRO KIRI */}

        <div className="flex h-72 w-96 lg:w-10/12 items-center bg-local col-span-2 bg-blue-700 overflow-hidden rounded-br-full rounded-tl-full ">
          <img src="./assets/img/interior.jpg" alt="home" className="h-auto w-full lg:h-auto lg:w-full"/>
        </div>
      </div>
    </div>
  );
}
