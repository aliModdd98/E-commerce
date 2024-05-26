import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { fetchProducts } from "../../store/slices/Products.slice";
import { fetchCategories } from "../../store/slices/Categories.slice";
import ThirdWidthLayout from "../../layouts/ThirdLayout/ThirdLayout";
import Ads from "../Ads/Ads";
import Spinner from "../Spinner/Spinner";
import NotFound from "../NotFound/NotFound";

const Hero = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.id || ""
  );
  const products = useSelector((state: RootState) => state.products.Products);
  const productStatus = useSelector(
    (state: RootState) => state.products.status
  );
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory && productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [selectedCategory, productStatus, dispatch]);

  const filteredProducts = products?.data?.filter(
    (product) => product.category_id === selectedCategory?.id
  );

  return (
    <div className="flex justify-center w-full mt-5 py-4">
      <div className="flex items-center w-82 border p-4  border-custom-gray">
        <div className="w-1/3 h-full ">
          {" "}
          <ThirdWidthLayout>
            <div className="flex flex-col w-full h-full justify-start items-center">
              <ul className="w-full flex flex-col justify-start items-start">
                {categories?.map((category) => (
                  <li
                    className="py-3 px-2 w-full flex items-center justify-start cursor-pointer"
                    key={category.id}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      backgroundColor:
                        category === selectedCategory ? "#E5F1FF" : "white",
                    }}
                  >
                    {category.name_en}
                  </li>
                ))}
              </ul>
            </div>
          </ThirdWidthLayout>
        </div>
        <div className="flex flex-col w-full lg:flex-row">
          {productStatus === "loading" && <Spinner />}
          {productStatus === "failed" && <NotFound />}
          {productStatus === "succeeded" && (
            <ul className="flex flex-wrap w-full lg:w-3/4 justify-center lg:justify-start">
              {filteredProducts?.length > 0 && (
                <li
                  key={filteredProducts[0].id}
                  className="flex flex-col items-stretch justify-between  relative  bg-white  border-custom-gray mb-4 lg:mb-0 lg:mr-4"
                  style={{ flexBasis: "100%", maxHeight: "360px" }}
                >
                  {" "}
                  <img
                    src={`https://technical.test.blue-tech.ae/public/${filteredProducts[0].main_photo}`}
                    alt={filteredProducts[0].name}
                    className="w-full  object-cover "
                    style={{ height: "100%", width: "100%" }}
                  />
                  <div className="absolute inset-0 flex flex-col items-start p-10 justify-start bg-black bg-opacity-30 text-white">
                    <div className=" flex flex-col justify-start items-start">
                      {" "}
                      <h4>Latest trending</h4>
                      <h1 className="text-32px">Electronic items</h1>
                      <button className="bg-white text-black px-3 py-2 mt-3 text-32px rounded-lg">
                        Learn more
                      </button>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          )}
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default Hero;
