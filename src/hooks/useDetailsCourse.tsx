import React, { useState } from "react";
import detailscourse from "../components/datadummy/detailcourse";
import detailscourse2 from "../components/datadummy/detailcourse2";
import detailscourse3 from "../components/datadummy/detailcourse3";

const useDetailsCourse = () => {
  const [selectedOption, setSelectedOption] = useState(detailscourse[0]);
  const [selectedOption2, setSelectedOption2] = useState(detailscourse2[0]);
  const [selectedOption3, setSelectedOption3] = useState(detailscourse3[0]);

  const handleChange = (selected: any) => {
    setSelectedOption(selected);
  };

  const handleChange2 = (selected: any) => {
    setSelectedOption2(selected);
  };

  const handleChange3 = (selected: any) => {
    setSelectedOption3(selected);
  };

  return {
    selectedOption,
    handleChange,
    selectedOption2,
    handleChange2,
    selectedOption3,
    handleChange3,
    detailscourse,
    detailscourse2,
    detailscourse3,
  };
};

export default useDetailsCourse;
