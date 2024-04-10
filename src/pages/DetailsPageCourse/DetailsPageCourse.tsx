import React from "react";
import GlobalLayout from "../../layouts/GlobalLayout";
import Back from "../../components/button/Back";
import { BsChevronLeft } from "react-icons/bs";
import useSwapForm from "../../hooks/useSwapForm";
import Select from "react-select";

const DetailsPageCourse = () => {
  const {
    swapform,
    selectedOption,
    handleChange,
    selectedOption2,
    handleChange2,
    selectedOption3,
    handleChange3,
    selectedOption4,
    handleChange4,
    selectedOption5,
    handleChange5,
    swapformsekolah,
    swapformsekolah2,
    swapformsekolah3,
    swapformsekolah4,
    handleChange6,
    selectedOption6,
    swapformfieldperiode,
  } = useSwapForm();

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
          <div className="mx-[27%] w-[50%] h-[800px] rounded-2xl shadow-2xl bg-white">
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
                      options={swapformsekolah}
                      value={selectedOption2}
                      onChange={handleChange2}
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
                      options={swapformsekolah3}
                      value={selectedOption4}
                      onChange={handleChange4}
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
                      options={swapformsekolah4}
                      value={selectedOption5}
                      onChange={handleChange5}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      </GlobalLayout>
    </>
  );
};

export default DetailsPageCourse;
