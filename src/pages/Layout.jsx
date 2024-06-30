import React from "react";
import Header from "../components/Header";

const Layout = ({ children, showHeader }) => {
  return (
    <div className="layout_container">
      {showHeader && <Header name="Nitesh" />}
      <div className="h-100vh ">{children}</div>
    </div>
  );
};

export default Layout;
