import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Replace '/your-target-route' with the path you want to navigate to
    navigate("/checkout");
  };
  return (
    <div className="max-w-[650px] mx-auto my-5  ">
      <button
        className="bg-red-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 rounded-full text-center w-full"
        onClick={handleButtonClick}
      >
        <div className="shadow-lg bg-[#e73904] rounded-full p-5 hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl shadow-[#e73904] bg-[#e73904]">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            GET All Prompts + $1600 in Bonuses Today!
          </h1>
          <h2 className="text-xs sm:text-sm md:text-base text-white">
            No questions asked money back guarantee
          </h2>
        </div>
      </button>
    </div>
  );
};

export default Button;
