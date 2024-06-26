import React from "react";
import NewNavbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

type props = {
  children: React.ReactNode;
};

const GlobalLayout = ({ children }: props) => {
  return (
    <div className="mx-auto">
      <NewNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default GlobalLayout;
