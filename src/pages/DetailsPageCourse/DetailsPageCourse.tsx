import GlobalLayout from "../../layouts/GlobalLayout";
import Back from "../../components/button/Back";
import { BsChevronLeft } from "react-icons/bs";
import carddetailscourse from "../../components/datadummy/CardDetailsCourse";
import Select from "react-select";
import useDetailsCourse from "../../hooks/useDetailsCourse";
import detailcourse2 from "../../components/datadummy/detailcourse2";

const DetailsPageCourse = () => {
  const {
    selectedOption,
    handleChange,
    selectedOption2,
    handleChange2,
    selectedOption3,
    handleChange3,
    detailscourse,
    detailscourse2,
    detailscourse3,
  } = useDetailsCourse();

  return (
    <>
      <GlobalLayout>
        <>
          <div className="pt-24">
            <Back
              firstElement={
                <>
                  <div>
                    <a href="/home">
                      <div className="flex items-center text-2xl pt-10 pl-10">
                        <BsChevronLeft />
                        <p> Details Course</p>
                      </div>
                    </a>
                  </div>
                </>
              }
            />
          </div>
          <div className="mx-[27%] w-[50%] h-[1500px] border-4 rounded-2xl shadow-2xl bg-white">
            <div className="mx-[10%] mt-10">
              <div>
                <p className="text-5xl font-bold py-20">Form Course</p>
                <label htmlFor="text" className="font-medium text-2xl">
                  Name Course
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="border-2 p-[15px] rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                  required
                />
              </div>
              <div>
                <form>
                  <div className="mt-3">
                    <label
                      className="font-light text-2xl"
                      htmlFor="selectOption"
                    >
                      Field
                    </label>
                    <Select
                      options={detailscourse}
                      value={selectedOption}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      className="font-light text-2xl"
                      htmlFor="selectOption"
                    >
                      Category
                    </label>
                    <Select
                      options={detailcourse2}
                      value={selectedOption2}
                      onChange={handleChange2}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      className="font-light text-2xl"
                      htmlFor="selectOption"
                    >
                      Period
                    </label>
                    <Select
                      options={detailscourse3}
                      value={selectedOption3}
                      onChange={handleChange3}
                    />
                  </div>
                </form>
                <div>
                  <label htmlFor="text" className="font-medium text-2xl mt-3">
                    Price
                  </label>
                  <input
                    type="text"
                    placeholder="IDR"
                    className="border-2 p-[15px] rounded-md w-full hover:border-black/[.6] focus:border-black/[.6] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  {carddetailscourse.map((card, index) => (
                    <div className="mt-3">
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
                    Description Course
                  </label>
                  <textarea
                    name="descriptioncourse"
                    id="2"
                    className="border-4 mt-2 p-2"
                    cols={80}
                    rows={7}
                    placeholder="kamu akan dapat memperluas kosakata, memahami struktur kalimat, dan menguasai berbagai macam bentuk komunikasi baik lisan maupun tulisan. Tidak ketinggalan, kamu juga akan mempelajari berbagai grammar mulai dari present, past, hingga future tense, agar bahasa inggrismu tidak hanya lancar, tapi juga benar"
                  />
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <button className="mt-20 mb-20 px-24 py-2 bg-[#2c88d9] text-white rounded-sm">
                    <p>Create Course</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </GlobalLayout>
    </>
  );
};

export default DetailsPageCourse;
