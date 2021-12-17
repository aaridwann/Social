import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import Home from "./Home";
import Timeline from "./Timeline";

export const App = () => {
  const [Auth, setAuth] = useState(JSON.parse(sessionStorage.getItem('user')));

  useEffect(() => {
   
  },[Auth])
  return (
    <AuthContext.Provider value={{ Auth, setAuth }}>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};
