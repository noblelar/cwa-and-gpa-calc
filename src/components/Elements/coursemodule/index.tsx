import React, { useEffect, useMemo, useState } from "react";
import SingleModule from "./module";
import { modules } from "@/components/utils";

import { Module, Semester } from "@/components/utils/types";

const CourseModules = ({
  semdata,
  semcount,
  onChange,
}: {
  semdata: Module[];
  semcount: number;
  onChange: any;
}) => {
  const [moduleWeight, setModuleWeight] = useState<number>();
  const [ind, setIndex] = useState<number>(0);
  const [credit, setCredit] = useState<number>(0);
  const [semWeightTotal, setSemWeightTotal] = useState<number>();
  // const mods = useState(modules);
  const [semWeightArr, setSemWeightArr] = useState<number[]>(
    new Array(semcount).fill(null)
  );

  // const [semCount, setSemCount] = useState(semcount);

  const handleInputChange = (value: any) => {
    setModuleWeight(value * credit);
  };

  const handleSemTotalsChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    onChange(value); // Invoke the callback function with the input value
  };

  useEffect(() => {
    setSemWeightArr((curr) => {
      curr[ind] = moduleWeight ? moduleWeight : 0;
      return curr;
    });
    console.log(moduleWeight);
    setSemWeightTotal(sumSemWeigh());

  }, [moduleWeight]);

  useEffect(() => {}, [semWeightArr]);

  const sumSemWeigh = () =>
    semWeightArr.reduce((acc, currentValue) => {
      // Check if the current value is a number and not an empty string or undefined
      if (typeof currentValue === "number" && !isNaN(currentValue)) {
        return acc + currentValue;
      } else {
        return acc;
      }
    }, 0);

  // console.log(sumSemWeigh());

  // ! useMemo Used here to memorise the total Semter Credit and only recalculate when the the modules supplied change
  //  This is to improve performance during re-rendering 
  const totalSemCredit = useMemo(() => {
    // const semModules = modules.filter((module) => module.period === sem); 
    const totalcredits = semdata.reduce(
      (acc, module) => acc + Number(module.c_hours),
      0
    );
    // console.log(totalcredits);
    return totalcredits;
  }, [semdata]);


  return (
    <tbody className="divide-y bg-red-100">
      {semdata.map((mod, m) => {
        return (
          <SingleModule
            key={m}
            module={mod}
            onChange={handleInputChange}
            arKey={setIndex}
            count={m}
            credit={setCredit}
          />
        );
      })}

      <input
        type="hidden"
        name=""
        onChange={handleInputChange}
        value={semWeightTotal}
      />

      {/* <tr>
        <td className="px-6 py-4 text-center">Column</td>
        <td className="px-6 py-4 text-center">Column</td>
        <td className="px-6 py-4 text-center">Column</td>
      </tr>
      <tr>
        <td className="px-6 py-4 text-center">Column</td>
        <td className="px-6 py-4 text-center">Column</td>
        <td className="px-6 py-4 text-center">Column</td>
      </tr>
      <tr>
        <td className="px-6 py-4 text-center">Column</td>
        <td className="px-6 py-4 text-center">Column</td>
        <td className="px-6 py-4 text-center">Column</td>
      </tr>
      <tr>
        <td className="px-6 py-4 text-center">Column</td>
        <td className="px-6 py-4 text-center">Column</td>
        <td className="px-6 py-4 text-center">Column</td>
      </tr>
      <tr>
        <td className="px-6 py-4 text-center">Column</td>
        <td className="px-6 py-4 text-center">Column</td>
        <td className="px-6 py-4 text-center">Column</td>
      </tr>
      <tr>
        <td className="px-6 py-4 text-center">Column</td>
        <td className="px-6 py-4 text-center">Column</td>
        <td className="px-6 py-4 text-center">Column</td>
      </tr> */} 
      
    </tbody>
  );
};

export default CourseModules;

