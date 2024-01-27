import React from "react";

function Button({ label }) {
  return (
    <button className=" flex justify-center items-center gap-2 px-5 py-2  bg-slate-300 rounded font-sans">
      {label}
    </button>
  );
}

export default Button;
