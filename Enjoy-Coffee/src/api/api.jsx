export const fetchDataFromAPI = async () => {
  const response = await fetch(
    "https://mocki.io/v1/b3d33504-ff01-4542-a35d-9f3c464ef978"
  );
  const data = await response.json();
  return data;
};
