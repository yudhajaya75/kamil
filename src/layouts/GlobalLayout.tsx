import React from "react";
import Footer from "../components/footer/Footer";
import NewNavbar from "../components/navbar/Navbar";

type props = {
  children: React.ReactNode;
};

const GlobalLayout = ({ children }: props) => {
  return (
    <div className="mx-auto max-w-[1710px]">
      <NewNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default GlobalLayout;
