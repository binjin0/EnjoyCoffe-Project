import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login.jsx";
import Auth from "./page/Auth.jsx";
import CoffeeBean from "./page/CoffeeBean.jsx";
import Coffee from "./page/Coffee.jsx";
import Etc from "./page/etc.jsx";
import GreenBean from "./page/GreenBean.jsx";
import ProductDetail from "./page/ProductDetail.jsx";
import Cart from "./page/Cart.jsx";
import { DataState } from "./recoil/recoilState.jsx";
import Wish from "./page/Wish.jsx";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/Login"} element={<Login />} />
      <Route path={"/Auth"} element={<Auth />} />
      <Route path={"/CoffeeBean"} element={<CoffeeBean />} />
      <Route path={"/Coffee"} element={<Coffee />} />
      <Route path={"/GreenBean"} element={<GreenBean />} />
      <Route path={"/Etc"} element={<Etc />} />
      <Route path={"/:id"} element={<ProductDetail product={DataState} />} />
      <Route path={"/Cart"} element={<Cart />} />
      <Route path={"/Wish"} element={<Wish />} />
    </Routes>
  );
}

export default App;
