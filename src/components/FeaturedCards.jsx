import React from "react";
import { star } from "../assets/icons";

const FeaturedCards = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full pb-4">
      <img
        src={imgURL}
        alt="shoe"
        width={260}
        height={280}
        className="rounded-[10px] w-full"
      />

      <h3 className="mt-2 font-bold text-lg">{name}</h3>
      <p className="font-semibold text-slate-500">{price}</p>
    </div>
  );
};

export default FeaturedCards;
