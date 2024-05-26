import React, { FC } from "react";
import { Union } from "./../../assets/svgIcons/index";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen bg-[#273B4A]/13">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={onClose}
            ></div>

            <div
              className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all
            sm:max-w-lg sm:w-full max-w-[525px] w-full"
            >
              <div className="bg-[#D7EEE3] px-4 py-5 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex-grow flex justify-end">
                  <button
                    type="button"
                    className="bg-transparent"
                    onClick={onClose}
                  >
                    <img src={Union} alt="Union" />
                  </button>
                </span>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  My Cart
                </h3>
              </div>
              <div className="px-3 py-4 sm:p-6 overflow-y-auto max-h-[70vh] hide-scrollbar">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
