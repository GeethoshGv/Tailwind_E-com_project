import React from "react";
import { FeaturedProduct } from "../constans";
import FeaturedCards from "../components/FeaturedCards";

const Featured = () => {
  return (
    <section id="featuredProduct" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-sans">
          <span className=" text-slate-500">Featured</span> Product
        </h2>
        <p className="lg:max-w-lg mt-2 font-sans  text-slate-700 text-lg">
          Lorem ipsum dolor sit amet.lorem3 Lorem, ipsum dolor.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 sm:gap-4 gap-14">
        {FeaturedProduct.map((Feature) => (
          <FeaturedCards key={Feature.name} {...Feature} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
