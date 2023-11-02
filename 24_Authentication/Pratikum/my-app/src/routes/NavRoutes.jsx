import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import LandingPage from "../pages/LandingPage";
import ProductDetails from "../pages/ProductDetails";
import Dashboard from "../pages/Dashboard";
import EditTable from "../components/editTable";
import UnAuthorized from "../error/authoriztion";
import ErrorNotFound from "../error/not-found";

function NavRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/edit-product/:id" element={<EditTable />} />

        <Route path="*" element={<ErrorNotFound />} />
        <Route path="/unauthorized" element={<UnAuthorized />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavRoutes;
