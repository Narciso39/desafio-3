import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import Category from "../pages/Category/Category";
import NotFound from "../components/NotFound/NotFound";

export const AppRoutes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};
