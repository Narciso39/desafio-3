import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Footer from "../components/footer/Footer";


export const AppRoutes = () => {
    return (
        <>
          <BrowserRouter>
            <Header />
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