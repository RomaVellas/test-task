import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product, ProductAPI } from "./types";

interface ProductsState {
  products: Product[];
  filterCategory: "all" | "like";
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  filterCategory: "all",
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data: Product[] = response.data.map((productApi: ProductAPI) => {
      return { ...productApi, like: false };
    });
    return data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleLikeProduct: (state, action) => {
      state.products = [
        ...state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, like: !action.payload.like }
            : product
        ),
      ];
    },
    deleteProduct: (state, action) => {
      state.products = [
        ...state.products.filter((product) => product.id !== action.payload.id),
      ];
    },
    filterProducts: (state, action) => {
      state.filterCategory = action.payload;
    },
    createProduct: (state, action) => {
      state.products = [action.payload, ...state.products];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.reduce(
          (acc: Product[], product: Product) => {
            if (acc.find((element: Product) => element.id === product.id)) {
              return acc;
            }
            acc = [...acc, product];
            return acc;
          },
          state.products
        );
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error";
      });
  },
});

export default productSlice.reducer;
