// export const fetchDataFromAPI = async () => {
//   const response = await fetch(
//     "https://mocki.io/v1/b3d33504-ff01-4542-a35d-9f3c464ef978"
//   );
//   const data = await response.json();
//   return data;
// };
export const fetchDataFromAPI = async () => {
  const response = await fetch(
    "https://mocki.io/v1/532e877c-68e4-4bd5-b19f-90b47dc414e3"
  );
  const data = await response.json();
  return data;
};
