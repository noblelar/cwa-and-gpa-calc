import React from "react";
import Semester from "../Elements/semester";


const sems = ["a", "b", "c", "d", "e", "f"];

// ! Semester is Looped here
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
