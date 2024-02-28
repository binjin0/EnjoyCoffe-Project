import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ProductState, productsURL } from "../../recoil/Products";

function ProductLoad() {
  const [productList, setProductList] = useRecoilState(ProductState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(productsURL);
        const data = await response.json();
        setProductList(data);
      } catch (error) {
        console.log(`Error: \n${error}`);
      }
    };

    if (productList.length === 0) {
      fetchData();
    }

    return () => {
      // cleanup 작업이 필요 없다면 생략해도 됩니다.
    };
  }, [productList, setProductList]);

  return null;
}

export default ProductLoad;
