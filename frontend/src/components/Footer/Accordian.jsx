import React, { useState } from 'react';
import { FiPlus, FiMinus } from "react-icons/fi";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item mt-10">
      <div
        className={`accordion-title ${isOpen ? 'open' : ''}`}
        onClick={toggleAccordion}
      >
        {title}
        <span className='absolute left-[28%]' >{isOpen ? <FiMinus /> : <FiPlus />}</span>
      </div>
      {isOpen && <div className="accordion-content text-[14px] ">{children}</div>}
    </div>
  );
};

export default Accordion;
