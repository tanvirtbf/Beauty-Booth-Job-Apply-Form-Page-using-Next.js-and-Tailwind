import Button from "./Button";
import Form from "./Form";
import ProgressBar from "./ProgressBar";

const JobApplyFormRight = () => {
  return (
    <div className="bg-white col-span-12 sm:col-span-8 flex justify-center items-center">
      <div className="w-1/2">
        <ProgressBar />
        <Form />
        <Button />
      </div>
    </div>
  );
};

export default JobApplyFormRight;
