import { useState } from "react";
import { Trash } from "./../../assets/svgIcons/index";
interface ItemProps {
  name: string;
  image: string;
  price: number;
  onDelete: () => void;
}

const Item: React.FC<ItemProps> = ({ name, image, price, onDelete }) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div
      className="flex justify-between items-center my-3 w-100"
      onClick={onDelete}
    >
      <div className="flex w-20 h-20 py-4">
        {" "}
        <img src={image} alt={name} className="me-4" />
        <div className="flex flex-col justify-end items-center">
          {" "}
          <h1>{name}</h1>
          <p>{"AED " + price}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end w-50  py-4">
        <img src={Trash} alt="Trash" className="w-6 h-6 mb-3 cursor-pointer" />
        <div className="flex mt-5">
          <span
            className="cursor-pointer flex justify-center items-center w-5 h-5 bg-[#AADCC2]"
            onClick={handleDecrease}
          >
            -
          </span>
          <span className="bg-[#aadcc283] flex justify-center items-center w-5 h-5">
            {count}
          </span>
          <span
            className="cursor-pointer flex justify-center items-center w-5 h-5 bg-[#AADCC2]"
            onClick={handleIncrement}
          >
            {" "}
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
