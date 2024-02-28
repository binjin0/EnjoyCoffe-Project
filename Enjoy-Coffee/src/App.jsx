import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login.jsx";
import Auth from "./page/Auth.jsx";
import CoffeeBean from "./page/CoffeeBean.jsx";
import Coffee from "./page/Coffee.jsx";
import Etc from "./page/etc.jsx";
import GreenBean from "./page/GreenBean.jsx";
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
    </Routes>
  );
}

export default App;
