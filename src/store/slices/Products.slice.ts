// categoriesSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { axiosInstance } from "../../config/axios";
import { toast } from "react-toastify";

interface Product {
  id: number;
  name: string;
  price: string;
  image_en: string;
}

interface ProductState {
  Products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductState = {
  Products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[], void>(
  "products/fetchProducts",
  async () => {
    const response = await axiosInstance.get<Product[]>("/products");
    return response.data;
  }
);
export const deleteProduct = createAsyncThunk<void, number>(
  "products/deleteProduct",
  async (productId) => {
    await axiosInstance.delete(`/products?id=${productId}`);
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = "succeeded";
          state.Products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch products";
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        state.status = "succeeded";
        toast.success("Product deleted successfully!");
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to delete product";
      });
  },
});
export const { deleteProductSuccess } = productsSlice.actions;
export default productsSlice.reducer;
