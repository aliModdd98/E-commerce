import { useDispatch, useSelector } from "react-redux";
import outdoor from "./../../assets/outdoor.png";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { fetchProducts } from "../../store/slices/Products.slice";
import ThirdWidthLayout from "../../layouts/ThirdLayout/ThirdLayout";
import Spinner from "../Spinner/Spinner";

const OtherProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.Products);
  const productStatus = useSelector(
    (state: RootState) => state.products.status
  );

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const remainingProducts = products?.data?.slice(5, 13);

  if (productStatus === "loading") {
    return <Spinner />;
  }

  return (
    <div className="flex justify-center w-full mt-7 mb-5">
      <div
        className="flex w-82 border border-custom-gray"
        style={{ minHeight: "257px" }}
      >
        <ThirdWidthLayout>
          <div className="relative w-full h-full">
            <img
              src={outdoor}
              alt="cs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start p-10 justify-start bg-black bg-opacity-30 text-white">
              <h1 className="text-20px font-semibold text-black mb-2">
                Home and <br /> Outdoor
              </h1>
              <button className="bg-white text-black px-6 mt-4 py-3 rounded-lg">
                <h2> Shop Now</h2>
              </button>
            </div>
          </div>
        </ThirdWidthLayout>

        <div className="grid h-full flex-grow grid-cols-4">
          {remainingProducts?.map((product, index) => (
            <div
              key={index}
              className="bg-white flex  justify-between items-center shadow-md border border-custom-gray p-3"
              style={{ height: "100%", width: "100%" }}
            >
              <div className="flex flex-col justify-start w-full">
                <h3 className="text-center">{product.name_en}</h3>
                <p className="text-center">from {product.selling_price}</p>
              </div>
              <div className="w-82px h-82">
                <img
                  src={`https://technical.test.blue-tech.ae/public/${product.main_photo}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherProduct;
