import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../store/slices/Products.slice";
import ThirdWidthLayout from "../../layouts/ThirdLayout/ThirdLayout";
import cart from "./../../assets/svgIcons/cart.svg";
import { addToCart, removeFromCart } from "../../store/slices/cart.slice";
import { IoMdCart } from "react-icons/io";
import Spinner from "../Spinner/Spinner";
import NotFound from "../NotFound/NotFound";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.Products);
  const productStatus = useSelector(
    (state: RootState) => state.products.status
  );
  const error = useSelector((state: RootState) => state.products.error);
  const selectedProductIds = useSelector(
    (state: RootState) => state.cart.selectedProductIds
  );

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const itemsToShow = showMore ? products?.data.length : 5;
  const displayedProducts = products?.data?.slice(0, itemsToShow);

  const handleAddToCart = (productId: number) => {
    if (selectedProductIds.includes(productId)) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(addToCart(productId));
    }
  };

  return (
    <div className="flex justify-center w-full py-4">
      <div className="flex w-82 border border-custom-gray">
        <div className="w-1/3">
          <ThirdWidthLayout>
            <div className="flex flex-col justify-center items-center w-full">
              <h1>Deals and offers</h1>
              <p>Hygiene equipment</p>
            </div>
          </ThirdWidthLayout>
        </div>
        <div className="flex-grow ">
          {productStatus === "loading" && <Spinner />}
          {productStatus === "failed" && <NotFound />}
          {productStatus === "succeeded" && (
            <div className="grid grid-cols-5 ">
              {displayedProducts?.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center justify-between bg-white border border-custom-gray"
                  style={{ height: "100%" }}
                >
                  <div
                    className="w-full flex items-center justify-center"
                    style={{ aspectRatio: "1" }}
                  >
                    <img
                      src={`https://technical.test.blue-tech.ae/public/${product.main_photo}`}
                      alt={product.name}
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <h3 className="text-center">{product.name_en}</h3>
                  <div className="flex justify-between items-center">
                    <p className="mt-4 text-center cursor-pointer bg-light-red text-custom-red px-2 py-1 rounded-2xl">
                      {"-" + product.purchasing_price + "%"}
                    </p>
                    {selectedProductIds.includes(product.id) ? (
                      <IoMdCart className="w-19 h-19 text-custom-red" />
                    ) : (
                      <img
                        src={cart}
                        alt="cart"
                        className="cursor-pointer"
                        onClick={() => handleAddToCart(product.id)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
