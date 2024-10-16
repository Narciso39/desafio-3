import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";


export const AppRoutes: React.FC = () => {
    return (
      <>
        <main>
          <BrowserRouter>  
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </main>
        </>
      );
}