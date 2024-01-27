import React from "react";
import Button from "../components/Button";
import { superq } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about us"
      className="flex justify-center items-center max-lg:flex-col gap-10 w-full max-container  "
    >
      <div className="flex flex-1 flex-col">
        <h1 className="mt-10 font-palanquin text-5xl  font-bold capitalize  lg:max-w-lg">
          <span className=" relative z-10 pr-10 ">
            SHOES FOR <span className="text-slate-500 pr-5">MEN</span>
          </span>
          <br />
        </h1>
        <p className=" mt-4 lg:max-lg:info-text w-50 text-lg">
          A collection of shoes for men characterized by sneakers, Horsebit
          loafers, Princetown slippers, lace ups, ankle boots and slides.
        </p>
        <div className="mt-5">
          <Button label="View more" />
        </div>
      </div>
      <div className="flex1 flex justify-center items-center  ">
        <img src={superq} alt="" width={700} className="w-full" />
      </div>
    </section>
  );
};

export default SuperQuality;
