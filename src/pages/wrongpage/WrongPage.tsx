import React from "react";
import Back from "../../components/button/Back";
import { BsChevronLeft } from "react-icons/bs";
import GlobalLayoutWithNavbar from "../../layouts/GlobalLayoutWithNavbar";
import { useNavigate } from "react-router-dom";

const WrongPage = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <>
      <GlobalLayoutWithNavbar>
        <>
          <Back onClick={handleBackClick} buttonText="Back" />
          <div className="my-20 mx-20 py-20 border-4">
            <div className="flex justify-center items-center mt-20 font-bold text-3xl">
              <p className="w-[60%] text-center">
                it looks like there aren't many great matches for your search,
                please fint with other request
              </p>
            </div>
            <div className="flex justify-center items-center mt-20">
              <a href="/home">
                <button className="bg-[#2c88d9] text-white py-2 px-20 rounded-md">
                  search again
                </button>
              </a>
            </div>
          </div>
        </>
      </GlobalLayoutWithNavbar>
    </>
  );
};

export default WrongPage;
