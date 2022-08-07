import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTable = async () => {
      try {
        let data = await fetch(url);

        let info = await data.json();

        setData([...info]);
      } catch (err) {
        console.log(err);
      }
    };
    getTable();
  }, [url]);

  return data;
};

export { useFetch };
