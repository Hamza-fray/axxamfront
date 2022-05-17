// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {LoginContext} from "./context/LoginContext";
import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Registration from "./pages/Auth/Registration";
import ResetPassword from "./pages/Auth/ResetPassword";

import Carousell from "./components/Carousell";
import {Navbar} from "react-bootstrap";
import Navbarr from "./components/Navbarr";
function App() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  return (
    <div className="App">
      <div className="container mt-5">

          {/*<LoginContext.provider value={{email, setEmail}}>*/}
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Navbarr/>}/>
                  <Route path={"/Registration"} element={<Registration/>}/>
                  <Route path={"/ResetPassword"} element={<ResetPassword/>}/>

              </Routes>
          </BrowserRouter>

          {/*</LoginContext.provider>*/}
      </div>
    </div>

  );
}

export default App;
