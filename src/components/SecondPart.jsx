import SubmitButton from "./Button";
import ProgressBar from "./ProgressBar";

const SecondPart = ({ btnState, setBtnState }) => {
  return (
    <div className="text-black w-full p-5 flex flex-col gap-4">
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="english" className="text-lg pr-3 font-normal">
            On a scale of 1-10, how would you rate your English communication
            skill?
          </label>
          <select
            name=""
            id="english"
            className="text-base bg-white inputBorder text-black cursor-pointer rounded"
          >
            <option value="">Select..</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="experience" className="text-lg pr-3 font-normal">
            Do you have any experience related to this job?
          </label>
          <input
            id="experience"
            type="text"
            placeholder="Your Answer"
            required
            className="inputBorder"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="salary" className="text-lg pr-3 font-normal">
            Expected Salary
          </label>
          <input
            id="salary"
            type="text"
            placeholder="Your Answer"
            required
            className="inputBorder"
          />
        </div>
        <div className="bg-[#F0F0F0] w-full h-0.5 rounded-lg mt-5 mb-2"></div>
      </form>
    </div>
  );
};

export default SecondPart;
