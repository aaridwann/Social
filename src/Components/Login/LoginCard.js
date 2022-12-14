import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import {useNavigate} from 'react-router-dom'



export default function LoginCard(props) {
  const navigate = useNavigate()
  const { Auth, setAuth } = useContext(AuthContext);
  const [message, setMessage] = useState();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const change = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (user.name == "" || user.password === "") {
      return setMessage(
        <p className="rounded-2xl z-50 text-center px-4 py-2 text-white font-semibold bg-red-400 text-sm">
          field kosong
        </p>
      );
    }
    try {
      const response = await axios.post("http://192.168.100.13:8000/auth/login", user);
      sessionStorage.setItem("user", JSON.stringify(response.data.data));
      setUser({ name: "", password: "" });
      setAuth(response.data.data);
      navigate('/timeline')
    } catch (error) {
      console.log(error);
      setMessage(
        <p className=" rounded-2xl z-50 text-center px-4 py-2  text-white font-semibold bg-red-400 text-sm">
          Username & Password Salah
        </p>
      );
    }
  };

  return (
    <form
      onSubmit={(e) => submit(e)}
      className="backdrop-blur-xl bg-matcha-light/30 flex flex-col gap-4 justify-center items-center w-96 lg:w-854 px-28 py-24 fixed rounded-3xl z-100 bg-white opacity-80 mx-auto -translate-y-1/2  -translate-x-1/2 top-1/2 left-1/2 "
    >
      <button
        onClick={props.change}
        className="px-4 py-2  absolute right-16 top-3.5 font-bold text-matcha-dark bg-matcha-light rounded-extra"
      >
        X
      </button>
      {message && (
        <p onClick={() => setMessage("")} className="absolute top-2.5 ">
          {message}
        </p>
      )}
      <h1 className="font-light text-gray-800 text-4xl mb-28 tracking-wide ">
        login first
      </h1>
      <label className="flex flex-col lg:flex-row gap-4 items-center text-lg text-gray-800 font-semibold">
        Username
        <input
          name="name"
          onChange={change}
          value={user.name}
          className="bg-transparent focus:outline-none focus:shadow-2xl border-gray-600 text-center border-b-2 text-gray-800 p-1 text-lg  "
          type="text"
        />
      </label>
      <label className="flex gap-4 flex-col lg:flex-row items-center text-lg text-gray-800 font-semibold">
        Password
        <input
          name="password"
          onChange={change}
          value={user.password}
          className="bg-transparent focus:outline-none focus:shadow-2xl  border-gray-600 text-center border-b-2 text-gray-800 p-1 text-lg  "
          type="password"
        />
      </label>
      <button
        type="submit"
        className="btn btn-md border-2 border-gray-500 py-1 px-8 mt-8 font-bold text-gray-600 rounded-extra duration-500 hover:bg-gray-500 hover:text-white "
      >
        Login
      </button>
      <button className="font-light mt-8 text-gray-500">
        Not yet account ? Signup here..
      </button>
    </form>
  );
}
