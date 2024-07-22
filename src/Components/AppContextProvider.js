import React from "react";

export const AppContext = React.createContext();
function AppContextProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [getId ,setGetId]=React.useState([]);
  const [selected, setSelected]= React.useState(false)

  function fetchData() {
    setLoading(true);
    return new Promise((resolve, reject) => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          if (!response.ok) reject("couldn't fetch data");
          else resolve(response.json());
        })
        .catch(reject)
        .finally(() => setLoading(false));
    });
  }
  React.useEffect(() => {
    fetchData()
      .then((value) => setData(value))
      .catch((error) => console.log(error));
  }, []);

  const values={
    loading,
    setLoading,
    data,
    setData,
    getId,
    setGetId,
    selected,
    setSelected

  }
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
