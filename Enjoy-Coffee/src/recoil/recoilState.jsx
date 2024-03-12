import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const DataState = atom({
  key: "DataState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const CartState = atom({
  key: "CartState", // 유일한 식별자
  default: [], // 초기 상태 (장바구니가 비어있음)
  effects_UNSTABLE: [persistAtom],
});

export const WishState = atom({
  key: "WishState", // 유일한 식별자
  default: [], // 초기 상태 (위시리스트가 비어있음)
  effects_UNSTABLE: [persistAtom],
});
