import React from "react";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import "./DefaultLayout.scss";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
