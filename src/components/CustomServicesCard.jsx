import React from "react";

const CustomServicesCard = ({ imgURl, label, subtext }) => {
  return (
    <div className="  flex-1 sm:w-[350px] w-full rounded-[10px] shadow-xl gg px-10 py-16 max-sm: mt-32 ">
      <div className="w-11 h-11 flex gap-4 justify-center items-center bg-red-400 rounded-full  ">
        <img src={imgURl} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 text-2xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words leading-normal text-slate-700  ">
        {subtext}
      </p>
    </div>
  );
};

export default CustomServicesCard;
