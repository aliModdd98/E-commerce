// CategoriesDropDown.jsx
import { useState } from "react";

type ResponsiveDropdownProps = {
  options: string[];
  buttonText?: string;
  className?: string;
};

const CategoriesDropDown = ({
  options,
  buttonText = "Options",
  className = "",
}: ResponsiveDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative inline-block text-left  ${className}`}>
      <div>
        <button
          onClick={toggleDropdown}
          className={`inline-flex justify-center items-center bg-white
           px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50
             ${className}`}
        >
          {buttonText}
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-full max-h-60 overflow-auto divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option, index) => (
            <div key={index} className="py-2">
              <a
                href="#"
                className={"block px-4 text-sm text-gray-700 hover:bg-gray-100"}
              >
                {option}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesDropDown;
