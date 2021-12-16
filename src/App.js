import { useContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { AuthContext } from "./Context/AuthContext";
import Home from "./Home";

function App() {
  const [Auth, setAuth] = useState();
  useEffect(() => {
      setAuth(JSON.parse(sessionStorage.getItem('user')))
  },[])
  return (
    <AuthContext.Provider value={{ Auth, setAuth }}>
      <Navbar />
      <Home />
    </AuthContext.Provider>
  );
}

export default App;
