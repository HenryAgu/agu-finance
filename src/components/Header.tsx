import React from "react";

const Header = () => {
  return (
    <div className="">
      <h1 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-8">
        Welcome, Henry
      </h1>
      <div className="flex flex-col lg:flex-row items-center md:items-start gap-y-5 lg:gap-x-8 mb-4 md:mb-8 lg:mb-8">
        <div className="shadow-xl border-2 h-[200px] w-full md:w-[450px] md:h-[250px] lg:w-[450px] lg:h-[250px] rounded-[30px]"></div>
        <div className="shadow-xl border-2 h-[200px] w-full md:w-[450px] md:h-[250px] lg:w-[450px] lg:h-[250px] rounded-[30px]"></div>
      </div>
    </div>
  );
};

export default Header;
