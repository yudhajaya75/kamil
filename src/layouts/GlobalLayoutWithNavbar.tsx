import React from "react";
import NewNavbar from "../components/navbar/Navbar";

type props = {
  children: React.ReactNode;
};

const GlobalLayoutWithNavbar = ({ children }: props) => {
  return (
    <div className="mx-auto">
      <NewNavbar />
      {children}
    </div>
  );
};

export default GlobalLayoutWithNavbar;
