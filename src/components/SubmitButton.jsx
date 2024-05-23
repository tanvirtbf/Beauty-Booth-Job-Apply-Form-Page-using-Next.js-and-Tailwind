"use client"
const SubmitButton = ({setBtnState}) => {
  return (
    <div className="flex justify-end">
      <button className="px-8 py-2 bg-[#1DBE72] rounded hover:bg-pink-700 font-semibold text-sm text-white transition-background duration-500 ease-in-out" onClick={()=> setBtnState(prevState => prevState + 1)}>
        Next
      </button>
    </div>
  );
};

export default SubmitButton;
