import create from "zustand";

const useProductStore = create((set) => ({
  currentProduct: {},
  isSelected: false,
  selectProduct: (newProduct) =>
    set(({ currentProduct }) => {
      if (!currentProduct.name || currentProduct.name !== newProduct.name) {
        return { currentProduct: newProduct, isSelected: true };
      }
      return { currentProduct: {}, isSelected: false };
    }),
}));

export default useProductStore;
