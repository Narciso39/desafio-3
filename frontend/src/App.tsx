import React from 'react';
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import { AppRoutes } from "./routes/Route";

// Começo de app
const App: React.FC = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
