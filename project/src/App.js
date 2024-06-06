import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout/Layout";
import LayoutGuest from "./Layout/LayoutGuest";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Basket from "./pages/Basket";

function App() {
  const [basketList, setBasketList] = useState([
    { id: 1, title: "test", price: "test원 입니다." },
  ]);

  const [count, setCount] = useState(1);

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
              <Home
                basketList={basketList}
                setBasketList={setBasketList}
                count={count}
                setCount={setCount}
              />
            }
          />
          <Route
            path="/basket"
            element={
              <Basket
                basketList={basketList}
                setBasketList={setBasketList}
                count={count}
                setCount={setCount}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
