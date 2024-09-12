import React, { useEffect } from "react";
const imageURL = "https://test.create.diagnal.com/images";
const FilmContent = (props) => {

  return (
    <div key={props.index} className=" p-4 rounded-md">
      <img
        className=" object-cover rounded-md mb-2"
        src={`${imageURL}/${props.item?.["poster-image"]}`}
        onError={(e)=>{e.target.src="https://test.create.diagnal.com/images/placeholder_for_missing_posters.png"}}
        alt={props.item?.name}
      />
      <p className="text-white text-[12px]">{props.item?.name}</p>
    </div>
  );
};

export default FilmContent;
