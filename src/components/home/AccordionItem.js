import React, { useState } from 'react';

const AccordionItem = ({ title, extra, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`mb-2 rounded-[10px] ${isOpen ? 'bg-white' : 'bg-black'}`}>
            <button
                className={`flex justify-between items-center rounded-t-[10px] w-full p-5 text-left font-bold ${isOpen ? 'text-black' : 'text-white'} text-[20px] transition-colors duration-150`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}{' '}<span className='font-normal'>{extra}</span></span>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 transform transition-transform duration-500 rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 transform transition-transform duration-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                )}
            </button>
            <div
                className={`transition-max-height duration-200 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}
            >
                <div className="p-4 bg-white border rounded-b-lg">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
