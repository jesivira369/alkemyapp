import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProviderUser } from "./Components/ContextUser";
import Home from "./Components/Home";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import ProtectedRoutes from './Components/ProtectedRoutes'
import Clock from "./containers/Clock";

function App() {

  //const [user, setUser] = useState(false);

  return (
    /*<ProviderUser value={{user, setUser}}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={
          <ProtectedRoutes redirectTo="/login">
            <Home />
          </ProtectedRoutes>} />
        </Routes>
      </Router>
    </ProviderUser>*/
    <Clock />
  );
}

export default App;
