import { FormEventHandler, useEffect, useState } from "react";
import CategoriesDropDown from "../DropDown/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchCategories } from "../../store/slices/Categories.slice";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex w-full outline-none border border-[#0D6EFD] rounded-md"
      onSubmit={handleSubmit}
    >
      <input
        className="rounded-l-md h-12 border-none outline-none placeholder-gray-400 
        pl-3 pr-2 transition-all duration-200 flex-grow"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex items-center">
        <CategoriesDropDown
          options={categoryNames}
          buttonText="All category"
          className="h-12 border-none outline-none"
        />
        <button
          type="submit"
          className="h-12 bg-blue-500 hover:bg-blue-600 flex items-center px-6 justify-center rounded-r-md text-white"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
