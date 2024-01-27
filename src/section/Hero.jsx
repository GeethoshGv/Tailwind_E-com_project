import React from "react";
import Button from "../components/Button";
import { mainimg1 } from "../assets/images/";

const Hero = () => {
  return (
    <section
      id="home"
      className=" flex xl:flex-row  flex-col w-full   justify-center min-h-screen gap-10 max-containe h-[100vh] top-11 "
    >
      <img
        src={mainimg1}
        alt=""
        className="w-full max-xl:hidden z-[-100] absolute x object-cover"
      />
      <div className="relative xl:w-2/5 flex flex-col capitalize justify-center items-start w-full max-xl:padding-x p-28">
        <h1 className="mt-10 font-palanquin text-7xl max-sm:text-[42px] max-sm:leading-[1.] font-bold">
          <span className=" relative z-10 pr-10">the new </span>
          <br />
          <span className=" text-red-500 pr-5">XXXX</span>shoes are back in
          stock
        </h1>
        <p className=" font-sans capitalize text-lg mt-6 mb-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus sed nemo, laborum
        </p>
        <Button label="Shop now" />
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-20 bg-center bg-cover max-xl:hidden"></div>
    </section>
  );
};

export default Hero;
