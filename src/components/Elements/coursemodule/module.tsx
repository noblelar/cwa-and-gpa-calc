import { Module } from "@/components/utilsA/types";
import React, { useEffect, useState } from "react";

function Grade(score: any) {
  let grade;
  let colorCode;
  switch (true) {
    case score >= 80 && score <= 100:
      grade = "A";
      colorCode = "#00FF00"; // Green color for grade A
      break;
    case score >= 70 && score < 80:
      grade = "B";
      colorCode = "#66FF66"; // Light green color for grade B
      break;
    case score >= 60 && score < 70:
      grade = "C";
      colorCode = "#FFFF00"; // Yellow color for grade C
      break;
    case score >= 50 && score < 60:
      grade = "D";
      colorCode = "#FFA500"; // Orange color for grade D
      break;
    case score < 50:
      grade = "F";
      colorCode = "#FF0000"; // Red color for grade F
      break;
    default:
      grade = "Invalid Input"; // Not sure what "1" represents in your original code
      colorCode = "#000000"; // Default color black
  }
  return { grade: grade, color: colorCode };
}

const SingleModule = ({
  module,
  onChange,
}: {
  module: Module;
  onChange: any;
}) => {
  const [score, setScore] = useState<number | any>(0);
  const [grade, setGrade] = useState<string | null>("NA");
  const [gradeColor, setGradeColor] = useState<string>("#000");
  const [weightedScore, setWeightedScore] = useState<number>(0);

  const handleChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setScore(value);
    onChange(value); // Invoke the callback function with the input value
  };

  useEffect(() => {
    setGrade(Grade(score).grade);
    setGradeColor(`!text-[${Grade(score).color}]`);

    // console.log(Grade(score).color);
    // console.log(gradeColor);

    setWeightedScore(score * Number(module.c_hours));
  }, [score, setScore, module.c_hours]);

  return (
    <tr>
      <td className="px-6 py-4 text-center"> {module.course_name} </td>
      <td className="px-6 py-4 text-center"> {module.c_hours} </td>
      <td className="px-6 py-4 text-center">
        <form className="max-w-xs mx-auto">
          <div className="relative flex justify-center items-center max-w-[8rem]">
            <input
              type="number"
              step="0.5"
              min="0"
              max="100"
              className=" px-2 py-1 rounded-md text-center h-[2rem] focus:text-blue-600 "
              value={score}
              onChange={handleChange}
            />
          </div>
        </form>
      </td>

      <td className="px-6 py-4 text-center"> {weightedScore} </td>
      <td className={`px-6 py-4 text-center ${gradeColor} `}>{grade}</td>
    </tr>
  );
};

export default SingleModule;
