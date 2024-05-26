"use client"
import { useState } from "react";
import Button from "./Button";
import Form from "./Form";
import ProgressBar from "./ProgressBar";

const JobApplyFormRight = () => {
  const [whichForm,setWhichForm] = useState(1)

  return (
    <div className="bg-white col-span-12 sm:col-span-8 flex justify-center items-center">
      <div className="w-full sm:w-2/5 px-6 sm:px-0 py-12 sm:py-0">
        <ProgressBar whichForm={whichForm} />
        <Form whichForm={whichForm} />
        <Button whichForm={whichForm} setWhichForm={setWhichForm} />
      </div>
    </div>
  );
};

export default JobApplyFormRight;
