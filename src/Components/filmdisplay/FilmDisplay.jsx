import React, { lazy, Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Shimmer from "../shimmer/Shimmer";

const FilmContent = lazy(() => import("./FilmContent"));
const FilmDisplay = () => {
  const [filmData, setFilmData] = useState([]); // Change to null to avoid unnecessary rendering issues
  const [filteredData, setFilteredData] = useState([]);
  const pageurl = "https://test.create.diagnal.com";

  const [isFetching, setIsFetching] = useState(true);
  const [page, setPage] = useState(1);
  const searchedWord = useSelector((state) => state.searchedWordStore.value);
  const getData = (pageNum) => {
    fetch(pageurl + "/" + "data/page" + `${pageNum}` + ".json")
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        setFilmData((prevData) => [
          ...prevData,
          ...data?.page?.["content-items"].content,
        ]);
        setFilteredData((prevData) => [
          ...prevData,
          ...data?.page?.["content-items"].content,
        ]);
        setPage((page) => page + 1);
        setIsFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  };
  useEffect(() => {
    searchFilter();
  }, [searchedWord]);

  const searchFilter = () => {
    if (!searchedWord.length) {
      setFilteredData(filmData);
    } else {
      const filteredData = filmData.filter((film) => {
        const lowerCaseFilmName = film.name.toLowerCase();
        const lowerCaseSearchedWord = searchedWord.toLowerCase();
        return lowerCaseFilmName.includes(lowerCaseSearchedWord);
      });
      setFilteredData(filteredData);
    }
  };
  useEffect(() => {
    // Fetch data from the API and page number set to 3 since it is already known
    isFetching && page < 4 && getData(page);
  }, [isFetching]);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;

    const clientHeight = window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight - 50) {
      // Threshold of 50px from the bottom
      setIsFetching(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="grid grid-cols-3  gap-4 p-4">
      {filteredData?.map((item, index) => (
        <Suspense fallback={<Shimmer />}>
          <FilmContent item={item} index={index} />
        </Suspense>
      ))}
    </div>
  );
};

export default FilmDisplay;
