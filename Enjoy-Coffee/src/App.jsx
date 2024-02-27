import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login.jsx";
import Auth from "./page/Auth.jsx";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/Login"} element={<Login />} />
      <Route path={"/Auth"} element={<Auth />} />
    </Routes>
  );
}

export default App;
