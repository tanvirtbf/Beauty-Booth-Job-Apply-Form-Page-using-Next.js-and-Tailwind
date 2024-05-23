"use client";
const SubmitButton = ({ btnState, setBtnState }) => {
  return (
    <div className="flex justify-end gap-3">
      {btnState >= 2 && (
        <button
          className="px-8 py-2 hover:bg-[#554141] rounded bg-black font-semibold text-sm text-white transition-background duration-500 ease-in-out"
          onClick={() => setBtnState(prevState => prevState -1)}
        >
          Previous
        </button>
      )}
      <button
        className="px-8 py-2 bg-[#FF216D] rounded hover:bg-pink-700 font-semibold text-sm text-white transition-background duration-500 ease-in-out"
        onClick={() => setBtnState(prevState => prevState + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default SubmitButton;
