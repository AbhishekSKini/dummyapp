import React, { memo } from "react";
const imageURL = "https://test.create.diagnal.com/images";
const FilmContent = (props) => {
  const missingPoster =
    "https://test.create.diagnal.com/images/placeholder_for_missing_posters.png";
  const shrinkTheTitle = (name) => {
    if (name.length > 20) return name.slice(0, 12) + "...";
    return name;
  };
  return (
    <div key={props.index} className=" p-4 rounded-md font-titillium">
      <img
        className=" object-cover rounded-md mb-2 aspect-ratio-2/3"
        src={`${imageURL}/${props.item?.["poster-image"]}`}
        onError={(e) => {
          e.target.src = missingPoster;
        }}
        alt={props.item?.name}
      />
      <p className="text-white text-[12px]">
        {shrinkTheTitle(props.item?.name)}
      </p>
    </div>
  );
};

export default memo(FilmContent);
