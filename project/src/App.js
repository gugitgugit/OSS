import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import LayoutGuest from "./Layout/LayoutGuest";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignIn from "./pages/SingUp";
import Basket from "./pages/Basket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutGuest />}>
          <Route path="" element={<Login />} />
          <Route path="/signup" element={<SignIn />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
