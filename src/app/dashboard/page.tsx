import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <div className="p-4 lg:p-6 flex items-center justify-between">
        <div>
          <p className="font-bold text-xl">Agu-Finance</p>
        </div>
        <div>
          <button className="bg-black text-white py-2.5 px-8 rounded-md text-sm">Logout</button>
        </div>
      </div>
      <div className="p-4 lg:p-12">
        <h1 className="text-4xl lg:text-6xl font-bold my-4 lg:my-8">Welcome, Henry</h1>
        <div>
          <div>1</div>
          <div>2</div>
        </div>
      </div>

    </div>
  );
};

export default page;
