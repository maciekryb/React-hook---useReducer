import React, { useState } from "react";

const Form = ({ addHandler }) => {
  const [inputData, setInputData] = useState("");

  const handleOnChange = (event) => setInputData(event.target.value);

  const handleOnClick = () => {
    const newCourse = {
      id: Math.floor(Math.random() * 1000),
      title: inputData,
    };

    addHandler({ type: "ADD", course: newCourse });
    setInputData("");
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={inputData} />
      <button onClick={handleOnClick}>Dodaj kurs</button>
    </div>
  );
};

export default Form;
