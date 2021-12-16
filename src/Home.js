import React, { useContext, useState } from "react";
import HeroSect from "./Components/HeroSection/HeroSect";
import Products from "./Components/Products/Products";
import Profile from "./Components/Profile/Profile";
import { AuthContext } from "./Context/AuthContext";
import Login from "./Login";

export default function Home() {
    const {Auth, setAuth} = useContext(AuthContext)
    const [modalLogin, setModalLogin] = useState(false)
    const change = () => setModalLogin(!modalLogin)
    console.log(Auth);
  return (
    <div>
      <HeroSect change={change} />
      {!Auth && modalLogin && <Login change={change} />}
      <Profile />
      <Products />
    </div>
  );
}
