import React from "react";
import { services } from "../constans";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-10 t text-center ">
      <h1 className="absolute text-3xl capitalize font-bold">
        DELIVERY & RETURNS
      </h1>
      <h2 className="absolute text-xl capitalize  mt-16 max-sm:mt-12  max-sm: px-16 text-[15px] text-slate-700 ">
        From complimentary shipping, returns, and exchanges tailor every detail
        to suit you.
      </h2>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
