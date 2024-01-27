import React from "react";
import Button from "../components/Button";
import { bentoimgs } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section
      id="Collection"
      className="flex justify-wrap items-center max-xl:flex-col-reverse
    gap-10 max-container"
    >
      <div className="flex-1">
        <img
          src={bentoimgs}
          alt=""
          width={673}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className="mt-10 font-palanquin text-5xl  font-bold  lg:max-w-lg">
          <span className=" relative z-10 pr-1 l">Shop by</span>{" "}
          <span className="text-slate-500 pr-5">Collection</span>
          <br />
        </h1>
        <p className=" mt-4 lg:max-lg:info-text w-50 leading-normal text-lg">
          Discover the latest men's lifestyle and activewear from XXXX.
          <br /> new footwear and apparel for all levels of activity.
        </p>
        <div className="mt-5">
          <Button label="View more" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
