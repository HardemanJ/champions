import React, { useState, useContext, useEffect, createContext } from "react";
import { useCallback } from "react";
// import rappel from "./championData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setsearchTerm] = useState("a");
  const [champions, setChampions] = useState([]);

  const fetchChampions = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json`
      );
      const { data } = await response.json();
      const championList = Object.values(data).map((key) => {
        const {
          id,
          title,
          tags,
          image: { full },
        } = key;
        return { id, title, tags, full };
      });
      setChampions(championList);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChampions();
  }, []);

  return (
    <AppContext.Provider
      value={{ loading, searchTerm, champions, setsearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};


//make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// export { AppContext, AppProvider };
