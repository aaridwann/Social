import React from "react";
import HeroSect from "./Components/HeroSection/HeroSect";
import Products from "./Components/Products/Products";
import Profile from "./Components/Profile/Profile";

export default function Home() {
  return (
    <div>
      <HeroSect />
      <Profile />
      <Products />
    </div>
  );
}
