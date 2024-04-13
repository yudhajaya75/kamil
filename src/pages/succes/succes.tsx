import Back from "../../components/button/Back";
import GlobalLayoutWithNavbar from "../../layouts/GlobalLayoutWithNavbar";
import { useNavigate } from "react-router-dom";

const SuccesPage = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/home");
  };
  return (
    <>
      <GlobalLayoutWithNavbar>
        <>
          <Back onClick={handleBackClick} buttonText="Back" />
          <div className="my-20 mx-20 border-4">
            <div className="flex justify-center items-center mt-20 font-bold text-3xl">
              <p className="w-[60%] text-center">
                Thanks From submit form, your form will be review right now. We
                will inform if your form already approve
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img src="./checklist.png" className="w-[500px]" alt="" />
            </div>
            <div className="flex justify-center items-center mt-20">
              <a href="/home">
                <button className="bg-[#2c88d9] text-white py-2 px-20 rounded-md">
                  Back to Main Menu
                </button>
              </a>
            </div>
          </div>
        </>
      </GlobalLayoutWithNavbar>
    </>
  );
};

export default SuccesPage;
