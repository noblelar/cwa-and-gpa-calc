import React, { useEffect, useMemo, useState } from "react";
import SingleModule from "./module";
import { modules } from "@/components/utils";
import { Semester } from "@/components/utils/types";

const semWeights: Array<number> = [];





const CourseModules = ({ sem, onChange }: { sem: string; onChange: any }) => {
  const [moduleWeight, setModuleWeight] = useState<number>();
  const [ind, setIndex] = useState<number>(0);
  const [credit, setCredit] = useState<number>(0);
  const [semWeightTotal, setSemWeightTotal] = useState<number>();
  // const mods = useState(modules);

  const handleInputChange = (value: any) => {
    setModuleWeight(value * credit);
  };

  const handleSemTotalsChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    onChange(value); // Invoke the callback function with the input value
  };

  useEffect(() => {
    console.log(ind);
    semWeights[ind] = moduleWeight ? moduleWeight : 0;
    console.log(moduleWeight);
    console.log(semWeights);
    setSemWeightTotal(sumSemWeigh())
  }, [moduleWeight]);


  const sumSemWeigh = () => semWeights.reduce((acc, currentValue) => {
    // Check if the current value is a number and not an empty string or undefined
    if (typeof currentValue === 'number' && !isNaN(currentValue) && currentValue !== '') {
      return acc + currentValue; 
    } else {
      return acc; 
    }
  }, 0);


  // ! useMemo Used here to memorise the total Semter Credit and only recalculate when the the modules supplied change 
  //  This is to improve performance during re-rendering
  const totalSemCredit = useMemo(() => {
    const semModules = modules.filter((module) => module.period === sem);
    const totalcredits = semModules.reduce(
      (acc, module) => acc + Number(module.c_hours),
      0
    );
    console.log(totalcredits);
    return totalcredits;
  }, [modules]);

  return (
    <tbody className="divide-y bg-red-100">
      {modules.map((mod, m) => {
        if (mod.period == sem) {
          // setIndex(m);
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
        }
      })}

      <input type="hidden" name="" onChange={handleInputChange} value={semWeightTotal}/>

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
