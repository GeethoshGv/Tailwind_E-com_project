import React from "react";
import CustomServicesCard from "../components/CustomServicesCard";
import { CustomProduct } from "../constans/index";

const CustomServices = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-10 t text-center">
      <h1 className="absolute text-2xl capitalize font-bold">XXXX SERVICES</h1>

      {CustomProduct.map((CusProduct) => (
        <CustomServicesCard key={CusProduct.label} {...CusProduct} />
      ))}
    </section>
  );
};

export default CustomServices;
