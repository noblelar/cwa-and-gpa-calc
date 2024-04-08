import React from "react";
import Semester from "../Elements/semester";


const sems = ["a", "b", "e"];


const Homepage = () => {
  return (
    <div className=" container m-auto">
      {/* Table Start */}
      <div className="flex flex-col h-screen">
        <div className="flex-grow overflow-auto">
          {sems.map((sem, s) => {
            return <Semester key={s} sem={sem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
