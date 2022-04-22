import React, { Suspense, useContext, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { AuthContext } from "./Context/AuthContext";
import Login from "./Login";
const HeroSect = React.lazy(() => import('./Components/HeroSection/HeroSect'))
const Products = React.lazy(() => import('./Components/Products/Products'))
const Profile = React.lazy(() => import('./Components/Profile/Profile'))

const loading = <h1 className="text-center text-4xl font-bold text-matcha-dark">Loading...</h1>

export default function Home() {
  const { Auth, setAuth } = useContext(AuthContext)
  const [modalLogin, setModalLogin] = useState(false)
  const change = () => setModalLogin(!modalLogin)
  return (
    <div>
      <title>Home</title>
      <Navbar className='fixed' />
      <Suspense fallback={loading}>
        <section>
          <HeroSect change={change} />
          {!Auth && modalLogin && <Login change={change} />}
          <Profile />
          <Products />
        </section>
      </Suspense>
    </div>
  );
}
