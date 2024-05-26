import React, { useEffect } from "react";
import CategoriesDropDown from "../DropDown/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchCategories } from "../../store/slices/Categories.slice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  const categoryNames = categories.map((category) => category.name_en);

  return (
    <div className="flex justify-center w-full bg-white border-b border-gray-200">
      <div className="flex flex-wrap justify-between items-center w-82 ">
        <div className="flex justify-start items-center ">
          <ul className="flex flex-wrap space-x-4">
            <li>
              <CategoriesDropDown
                options={categoryNames}
                buttonText="All category"
                className="h-12 text-[#1C1C1C]"
              />
            </li>
            <li className="flex items-center">Hot offers</li>
            <li className="flex items-center">Gift boxes</li>
            <li className="flex items-center">Projects</li>
            <li className="flex items-center">Menu item</li>
            <li className="flex items-center">Help</li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <CategoriesDropDown
            options={["1", "2", "3", "4"]}
            buttonText="English, USD"
            className="h-12 text-[#1C1C1C]"
          />
          <CategoriesDropDown
            options={["1", "2", "3", "4"]}
            buttonText="English, USD"
            className="h-12 text-[#1C1C1C]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
