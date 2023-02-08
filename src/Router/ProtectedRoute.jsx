import React from "react";
// import {Outlet } from "react-router-dom";

import Footer from "../Sections/Footer";
import Header from "../Sections/Header";
import Subscribe from "../Sections/Subscribe";

export default function ProtectedRoute({children}) {
  return (
    <div>
        <>
          <Header />
          {children }
          <Subscribe />
          <Footer />
        </>
    </div>
  );
}
