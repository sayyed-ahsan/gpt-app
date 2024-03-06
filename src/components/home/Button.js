import React, { useState } from "react";
import Modal from "./Modal";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div className="max-w-[650px] mx-auto my-5 cursor-pointer">
      <button
        className="bg-red-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 rounded-[50px] dm:rounded-full text-center w-full"
        onClick={openModal}
      >
        <div className="shadow-lg bg-[#e73904] rounded-full p-4 sm:p-5 hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl shadow-[#e73904] bg-[#e73904]">
          <h1 className="text-[16px] sm:text-xl md:text-2xl font-bold text-white">
            GET All Prompts + $1600 in Bonuses Today!
          </h1>
          <h2 className="text-[9px] sm:text-sm md:text-base text-white">
            No questions asked money back guarantee
          </h2>
        </div>
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Button;
