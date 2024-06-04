import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
