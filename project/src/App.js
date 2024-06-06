import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout/Layout";
import Login from "./pages/Login";
import Basket from "./pages/Basket";
import KakaoMap from "./API/KakaoMap";

function App() {
  const [basketList, setBasketList] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route
            path="/home"
            element={
              <KakaoMap basketList={basketList} setBasketList={setBasketList} />
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
