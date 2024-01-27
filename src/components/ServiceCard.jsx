import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="  flex-1 sm:w-[350px] w-full  px-10 py-16  max-sm: mt-[12rem] ">
      <div className="w-full  sm:w-[350px] flex gap-4 justify-center items-center   ">
        <img
          src={imgURL}
          alt={label}
          width={200}
          height={14}
          className="w-full rounded-[10px]"
        />
      </div>
      <h3 className="mt-5 text-2xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words leading-normal text-slate-700  ">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
