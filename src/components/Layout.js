import React from "react";
import Navbar from "./Navbar/Navbar";
import { GlobalStyles } from "./GlobalStyles";

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
