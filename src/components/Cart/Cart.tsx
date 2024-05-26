import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "../Item/Item";
import { RootState } from "../../store";
import { removeFromCart } from "../../store/slices/cart.slice";

const Cart = () => {
  const selectedProductIds = useSelector(
    (state: RootState) => state.cart.selectedProductIds
  );
  const products = useSelector((state: RootState) => state.products.Products);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const selectedProducts = products?.data.filter((product) =>
    selectedProductIds.includes(product.id)
  );

  return (
    <div className="flex flex-col">
      {selectedProducts?.map((product) => (
        <Item
          key={product.id}
          name={product.name_en}
          price={product.purchasing_price}
          image={`https://technical.test.blue-tech.ae/public/${product.main_photo}`}
          onDelete={() => handleRemoveFromCart(product.id)}
        />
      ))}

      <div className="mt-4">
        <h4 className="text-right">AED40.4</h4>
        <div className="flex justify-center items-center mt-3">
          <button className="bg-[#AADCC2] px-5 py-3 me-3 rounded-md">
            View And Edit Cart
          </button>
          <button className="bg-[#AADCC2]  px-5 py-3 rounded-md">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
