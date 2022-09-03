import React from "react";

const SubmitButton = ({ textContent }) => {
  return (
    <button
      className="rounded-lg text-white shadow-sm bg-pink-600 py-3 px-3 hover:bg-pink-800 visited:bg-pink-500  focus:border-indigo-500 focus:ring-indigo-500 capitalize"
      type="submit"
    >
      {textContent}
    </button>
  );
};

export default SubmitButton;
