import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItem from "./AddItem";
import Following from "./Components/Follow/Following";
import Market from "./Components/Market/Market";
import MyProfile from "./Components/Profile/MyProfile";
import Registration from "./Components/Registration/Registration";
import { AuthContext } from "./Context/AuthContext";
import Home from "./Home";
import Invoice from "./Invoice";
import Profile from "./Pages/Profile";
import Test from "./Test";
import Timeline from '../src/Pages/Timeline/Timeline'

export const App = () => {
  const [Auth, setAuth] = useState(JSON.parse(sessionStorage.getItem('user')));

  useEffect(() => {

  }, [Auth])
  return (
    <AuthContext.Provider value={{ Auth, setAuth }}>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />} options={{ title: 'Home' }} />
            <Route path="/timeline" element={<Timeline />} options={{ title: 'Timeline' }} />
            <Route path="/invoice" element={<Invoice />} options={{ title: 'Invoice' }} />
            <Route path="/addItem" element={<AddItem />} />
            <Route path='/test' element={<Test />} />
            <Route path='/following/:id' element={<Following />} />
            <Route path='/myprofile' element={<MyProfile />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/market' element={<Market />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};
