import Header from "./components/header/Header";
import "./index.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
export default function App() {
  return (
    <>
      <div className="header_app">
        <Header />
      </div>
      <Outlet />
      <div className="footer_app">
        <Footer />
      </div>
    </>
  );
}

