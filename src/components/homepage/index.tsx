import React from "react";
import Semester from "../Elements/semester";

const Homepage = () => {
  return (
    <div className=" container m-auto">
      {/* Table Start */}
      <div className="flex flex-col h-screen">
        <div className="flex-grow overflow-auto">
          <Semester/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
