import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ListsData from "./pages/lists/Lists";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { DarkModeContext } from "./context/darkModeContext";
import { productInputs, userInputs } from "./formSource";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode ? "dark bg-darkBg" : ""}`}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="users">
          <Route index element={<ListsData title="Users" />} />
          <Route path=":userId" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={userInputs} title="Add New User" />}
          />
        </Route>
        <Route path="products">
          <Route index element={<ListsData title="Products" />} />
          <Route path=":productId" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={productInputs} title="Add New Product" />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
