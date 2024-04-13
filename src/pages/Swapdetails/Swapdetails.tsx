import GlobalLayout from "../../layouts/GlobalLayout";
import carddetailscourse from "../../components/datadummy/CardDetailsCourse";
import Back from "../../components/button/Back";
import { Navigate, useNavigate } from "react-router-dom";

const Swapdetails = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <>
      <GlobalLayout>
        <>
          <Back onClick={handleBackClick} buttonText="Details Course" />
          <div className="mx-[27%] w-[50%] h-[1400px] border-4 rounded-2xl shadow-2xl bg-white">
            <div className="mx-[10%] mt-10">
              {carddetailscourse.map((card, index) => (
                <div>
                  <div className="flex items-center font-bold text-xl pt-10 pr-[70%]">
                    <p>Profile Instructor</p>
                  </div>
                  <div className="flex flex-row justify-center items-center mr-[20%] w-[90%] h-[250px]">
                    <img
                      className="w-[150px] h-[150px] mb-3 mt-7 rounded-full shadow-lg"
                      src={card.imageUrl}
                      alt={`Card ${card.id} image`}
                    />
                    <div className="text-left ml-4">
                      <h1 className="text-xl font-bold flex items-center">
                        {card.name}
                      </h1>
                      <h5 className="mb-1 text-[15px] font-normal">
                        {card.age}
                      </h5>
                      <h5 className="mb-1 text-[15px] font-normal">
                        {card.title}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
              <div>
                <ul>
                  {carddetailscourse.map((card, index) => (
                    <div className="mt-3">
                      <p className="font-bold text-xl">Pick up one of these</p>
                      <ul className="flex flex-col">
                        {[
                          card.lesson,
                          card.lesson2,
                          card.lesson3,
                          card.lesson4,
                          card.lesson5,
                        ].map((schedule, index) => (
                          <li key={index}>
                            <input
                              type="radio"
                              name="courseOption"
                              id={`schedule-${index}`}
                            />
                            <label
                              htmlFor={`schedule-${index}`}
                              className="pl-2 pt-4"
                            >
                              {schedule}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </ul>
              </div>
              <div>
                {carddetailscourse.map((card, index) => (
                  <div className="mt-10">
                    <p className="font-bold text-xl">Pick Your Schedule</p>
                    <ul className="flex gap-[10px]">
                      {[
                        card.schedule,
                        card.schedule2,
                        card.schedule3,
                        card.schedule4,
                        card.schedule5,
                        card.schedule6,
                        card.schedule7,
                      ].map((schedule, index) => (
                        <li key={index}>
                          <input
                            type="radio"
                            name="courseOption"
                            id={`schedule-${index}`}
                          />
                          <label
                            htmlFor={`schedule-${index}`}
                            className="pl-2 pt-4"
                          >
                            {schedule}
                          </label>
                        </li>
                      ))}
                    </ul>
                    <p className="font-bold text-xl mt-5">
                      Pick Your Prefer Time For Teaching
                    </p>
                    <ul className="flex gap-[10px]">
                      {[
                        card.timeteaching,
                        card.timeteaching2,
                        card.timeteaching3,
                      ].map((timeteaching, index) => (
                        <li key={index}>
                          <input
                            type="radio"
                            name="courseOption"
                            id={`timeteaching-${index}`}
                          />
                          <label
                            htmlFor={`timeteaching-${index}`}
                            className="pl-2 pt-4"
                          >
                            {timeteaching}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <label htmlFor="" className="mt-3 font-bold text-xl">
                  What you want to learn
                </label>
                <textarea
                  name="descriptioncourse"
                  id="2"
                  className="border-4 mt-2 p-2"
                  cols={80}
                  rows={4}
                  placeholder="i want learn about economy in my school"
                />
                <label htmlFor="" className="mt-3 font-bold text-xl">
                  What you give from teach
                </label>
                <textarea
                  name="descriptioncourse"
                  id="2"
                  className="border-4 mt-2 p-2"
                  cols={80}
                  rows={4}
                  placeholder="i want learn about economy in my school"
                />
              </div>
              <div className="flex flex-col gap-1 justify-center items-center">
                <button className="mt-20 mb-20 px-24 py-2 bg-[#2c88d9] text-white rounded-sm">
                  <p>Send Form Now</p>
                </button>
              </div>
            </div>
          </div>
        </>
      </GlobalLayout>
    </>
  );
};

export default Swapdetails;
