import React, { useEffect, useState } from 'react'

const FilmDisplay = () => {
  const [filmData, setFilmData] = useState([]); // Change to null to avoid unnecessary rendering issues
  const pageurl = "https://test.create.diagnal.com";
  const imageURL = "https://test.create.diagnal.com/images";
  const [isFetching, setIsFetching] = useState(true);
  const [page, setPage] = useState(1);

  const getData = (pageNum) => {
    fetch(pageurl+"/"+"data/page"+`${pageNum}`+".json")
    .then((res) => res.json()) // Parse the response as JSON
    .then((data) => {
      setFilmData(prevData => [...prevData, ...data?.page?.["content-items"].content]);
      // Store the fetched data in state
      setPage((page)=>page+1)
      setIsFetching(false)
    })
    .catch((error) => {
      console.error('Error fetching the data:', error);
    });
  };

useEffect(() => {
  // Fetch data from the API
  isFetching && page < 4 && getData(page);
}, [isFetching]);

const handleScroll = () => {  
  if (
    window.innerHeight + document.documentElement.scrollTop  !==
    document.documentElement.offsetHeight
  ) return;
  setIsFetching(true);
}
useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <div >
    <div className="grid grid-cols-3  gap-4 ">
      {filmData?.map((item, index) => (
        <div key={index} className=" p-4 rounded-md">
          <img
            className="w-full h-40 object-cover rounded-md mb-2"
            src={`${imageURL}/${item?.["poster-image"]}`}
            alt={item?.name}
          />
          <p className="text-white">{item?.name}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default FilmDisplay
