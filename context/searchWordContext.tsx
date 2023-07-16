import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";

export const InitSearchWordContext = {
  searchWord: {
    category: null,
    subCategory: null,
    prMin: null,
    prMax: null,
    skills: null,
    sort: "",
    jobId: "",
    userId: "",
    status: "recent",
    content: "",
    tabTtl: "",
    page: 1,
    perPage: 0,
  },
  setSearchWord: () => {},
  query: "",
  initSearchWord: () => {},
};

export interface SearchWordProps {
  category: number | null;
  subCategory: number | null;
  prMin: number | null;
  prMax: number | null;
  skills: number | null;
  sort: string;
  jobId: string;
  userId: string;
  status: string;
  content: string;
  tabTtl: string;
  page: number | null;
  perPage: number | null;
}
interface SearchWordContextProps {
  searchWord: SearchWordProps;
  setSearchWord: Function;
  query: string;
  initSearchWord: Function;
}

export const SearchWordContext = createContext<SearchWordContextProps>(
  InitSearchWordContext
);

const SearchWordProvider = ({ children }: any) => {
  const [searchWord, setSearchWord] = useState<SearchWordProps>(
    InitSearchWordContext.searchWord
  );

  const initSearchWord = () => {
    setSearchWord(InitSearchWordContext.searchWord);
  };

  const [query, setQuery] = useState("");

  const generateQuery = () => {
    var query = "";
    Object.entries(searchWord).forEach(([key, value]: any, index) => {
      if (value) {
        query += key + "=" + value + "&";
      }
    });
    return query;
  };

  useEffect(() => {
    setQuery(generateQuery());
  }, [searchWord]);

  return (
    <SearchWordContext.Provider
      value={{ searchWord, setSearchWord, initSearchWord, query }}
    >
      {children}
    </SearchWordContext.Provider>
  );
};

export default SearchWordProvider;
