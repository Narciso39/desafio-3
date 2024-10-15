import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Footer from "../components/footer/Footer";


export const AppRoutes = () => {
    return (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      );
}