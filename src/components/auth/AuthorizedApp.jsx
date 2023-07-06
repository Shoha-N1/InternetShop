import { useContext } from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import { AuthContext } from "../../context/AuthContext";


function AuthorizedApp() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <div className="layout">
        <Header />
        <div className="layout__main">
     <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AuthorizedApp;
