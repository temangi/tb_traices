import React, { ReactNode } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
