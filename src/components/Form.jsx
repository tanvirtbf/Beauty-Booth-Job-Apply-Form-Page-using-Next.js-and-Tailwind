import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";

const Form = ({whichForm}) => {
  return (
    <div className="flex justify-center items-center text-black">
      {
        whichForm === 1 && <FirstPart /> 
      }
      {
        whichForm === 2 && <SecondPart />
      }
      {
        whichForm === 3 && <ThirdPart />
      }
    </div>
  );
};

export default Form;