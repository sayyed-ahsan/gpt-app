import React, { useState } from 'react';

const AccordionItem2 = ({ title, extra, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`mb-2 rounded-[10px] bg-white`}>
            <button
                className={`flex justify-between items-center rounded-t-[10px] w-full px-4 sm:px-5 py-3 sm:py-4 text-left ${isOpen ? 'text-[#ea572a]' : 'text-black'} text-[18px] sm:text-[24px] transition-colors duration-150`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title} <span className='font-normal'>{extra}</span></span>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                )}
            </button>
            <div
                className={`transition-max-height duration-200 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}
            >
                <div className="p-3 sm:p-4 bg-white border rounded-b-lg">
                    {children}
                </div>
            </div>
        </div>

    );
};

export default AccordionItem2;