import { createSlice } from "@reduxjs/toolkit";
import products from "../../api/products";
const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: products,
    filteredProducts: [],
    filters: { category: [], colors: "", size: "", prices: [0, 10000] },
  },
  reducers: {
    setProducts(state, action) {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },

    filterProducts(state) {
      const { allProducts, filters } = state;
      const { category, colors, size, prices } = filters;

      const [minPrice, maxPrice] = prices; // set default minPrice and maxPrice

      // Filter the products based on the selected category, color, and size
      const filteredProducts = allProducts.filter((product) => {
        // Filter based on category
        const isCategoryMatch =
          category.length === 0 ||
          category.some(
            (selectedCategory) =>
              selectedCategory.toLowerCase() === product.category.toLowerCase()
          );

        // Filter based on color
        const isColorMatch =
          !colors ||
          product.colors.some(
            (color) => color.toLowerCase() === colors.toLowerCase()
          );

        //Filter based on size
        const isSizeMatch =
          !size || Array.from(product.size).some((s) => s === size);

        // Filter based on price range
        const isPriceInRange =
          product.salePrice >= minPrice && product.salePrice <= maxPrice;
        return isCategoryMatch && isColorMatch && isSizeMatch && isPriceInRange;
      });

      state.filteredProducts = filteredProducts;
    },

    resetFilters(state) {
      state.filters = {
        category: [],
        colors: "",
        sizes: "",
        prices: [0, 10000],
      };
      state.filteredProducts = state.allProducts;
    },
  },
});

export const { setProducts, setFilters, filterProducts, resetFilters } =
  productsSlice.actions;

export default productsSlice.reducer;
