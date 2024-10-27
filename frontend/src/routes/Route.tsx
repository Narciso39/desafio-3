import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import Category from "../pages/Category/Category";
import NotFound from "../components/NotFound/NotFound";
import ScrollToTop from "../hooks/useScroll";
import SingleProductPage from "../pages/SingleProduct/SingleProduct";
import Login from "../components/admin/login";
import Register from "../components/admin/register";
import Painel from "../pages/admin/Painel";
import { AuthProvider } from "../context/FirebaseContext";
import ProtectedRoute from "../pages/admin/ProtectedRoute";

export const AppRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/admin/register" element={<Register />} />
            <Route
              path="/admin/painel"
              element={
                <ProtectedRoute>
                  <Painel />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};
