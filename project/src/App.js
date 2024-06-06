import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout/Layout";
import LayoutGuest from "./Layout/LayoutGuest";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Basket from "./pages/Basket";

function App() {
  const [basketList, setBasketList] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutGuest />}>
          <Route path="" element={<Login />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route
            path="/home"
            element={
              <Home basketList={basketList} setBasketList={setBasketList} />
            }
          />
          <Route
            path="/basket"
            element={
              <Basket basketList={basketList} setBasketList={setBasketList} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
