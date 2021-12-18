import React, { Suspense, useContext, useState } from "react";
// import HeroSect from "./Components/HeroSection/HeroSect";
import Navbar from "./Components/Navbar/Navbar";
// import Products from "./Components/Products/Products";
// import Profile from "./Components/Profile/Profile";
import { AuthContext } from "./Context/AuthContext";
import Login from "./Login";
const HeroSect = React.lazy(() => import('./Components/HeroSection/HeroSect'))
const Products = React.lazy(() => import('./Components/Products/Products'))
const Profile = React.lazy(() => import('./Components/Profile/Profile'))

export default function Home() {
    const {Auth, setAuth} = useContext(AuthContext)
    const [modalLogin, setModalLogin] = useState(false)
    const change = () => setModalLogin(!modalLogin)
    console.log(Auth);
  return (
    <div>
      <Navbar />
      <Suspense fallback='Loading..'>
      <HeroSect change={change} />
      </Suspense>
      <Suspense fallback='Loading..'>
      {!Auth && modalLogin && <Login change={change} />}
      <Profile />
      </Suspense>
      <Suspense fallback='Loading..'>
      <Products />
      </Suspense>
    </div>
  );
}
