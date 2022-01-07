import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItem from "./AddItem";
import { AuthContext } from "./Context/AuthContext";
import Home from "./Home";
import Invoice from "./Invoice";
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
            <Route exact path="/" element={<Home />} options={{title:'Home'}}/>
            <Route path="/timeline" element={<Timeline/>} options={{title: 'Timeline'}} />
            <Route path="/invoice" element={<Invoice/>} options={{title: 'Invoice'}}/>
            <Route path="/addItem" element={<AddItem/>} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};
