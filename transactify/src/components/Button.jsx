import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-white font-poppins font-medium text-[18px] text-secondary rounded-lg outline-none ${styles}`}
    >Try Now</button>
  );
};

export default Button;
