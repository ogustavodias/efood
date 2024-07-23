// React-router-dom
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Menu from "./pages/Menu";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};

export default AppRoutes;
