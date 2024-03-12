import { selector } from "recoil";
import { DataState } from "./recoilState";
import { CartState } from "./recoilState";
export const coffeebeans = selector({
  key: "coffeebeans",
  get: ({ get }) => {
    const data = get(DataState);
    const dataArray = Array.isArray(data) ? data : [];
    const result = dataArray.filter((product) =>
      product.category.toLowerCase().includes("원두")
    );
    return result;
  },
});
export const coffee = selector({
  key: "coffee",
  get: ({ get }) => {
    const data = get(DataState);
    const dataArray = Array.isArray(data) ? data : [];
    const result = dataArray.filter((product) =>
      product.category.toLowerCase().includes("간편커피")
    );
    return result;
  },
});
export const greenbeans = selector({
  key: "greenbeans",
  get: ({ get }) => {
    const data = get(DataState);
    const dataArray = Array.isArray(data) ? data : [];
    const result = dataArray.filter((product) =>
      product.category.toLowerCase().includes("생두")
    );
    return result;
  },
});
export const etc = selector({
  key: "etc",
  get: ({ get }) => {
    const data = get(DataState);
    const dataArray = Array.isArray(data) ? data : [];
    const result = dataArray.filter((product) =>
      product.category.toLowerCase().includes("기타")
    );
    return result;
  },
});

export const TotalPriceSelector = selector({
  key: "TotlaPriceSelector",
  get: ({ get }) => {
    const cartItems = get(CartState);
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
});
