import React, { useEffect, useState } from 'react'

const FilmDisplay = () => {
  const [filmData, setFilmData] = useState(null); // Change to null to avoid unnecessary rendering issues
  const page1url = "https://test.create.diagnal.com/data/page1.json";
  const imageURL = "https://test.create.diagnal.com/images";

useEffect(() => {
  // Fetch data from the API
  fetch(page1url)
    .then((res) => res.json()) // Parse the response as JSON
    .then((data) => {
      setFilmData(data?.page?.["content-items"].content); // Store the fetched data in state
    })
    .catch((error) => {
      console.error('Error fetching the data:', error);
    });
}, []);
  return (
    <div >
    <div className="grid grid-cols-3  gap-4">
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
