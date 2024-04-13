import Back from "../../components/button/Back";
import CardData from "../../components/card/CardSwapRecomen";
import GlobalLayout from "../../layouts/GlobalLayout";
import { useNavigate } from "react-router-dom";

const SwapRecomendation = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <>
      <GlobalLayout>
        <div className="mt-20">
          <Back onClick={handleBackClick} buttonText="Back" />
          <div>
            <CardData />
          </div>
        </div>
      </GlobalLayout>
    </>
  );
};

export default SwapRecomendation;
