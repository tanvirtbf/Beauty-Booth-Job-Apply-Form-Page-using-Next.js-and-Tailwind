"use client";
import { useState } from "react";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";
import SubmitButton from "./SubmitButton";

const JobApplyFormRight = () => {
  const [btnState, setBtnState] = useState(1);

  return (
    <>
      <div className="col-span-12 sm:col-span-8 bg-white flex justify-center items-center">
        {btnState === 1 && <FirstPart btnState={btnState} setBtnState={setBtnState} />}
        {btnState === 2 && <SecondPart btnState={btnState} setBtnState={setBtnState} />}
        {btnState === 3 && <ThirdPart />}
      </div>
    </>
  );
};

export default JobApplyFormRight;
