import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./index.css";

function App() {
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

export default App;
