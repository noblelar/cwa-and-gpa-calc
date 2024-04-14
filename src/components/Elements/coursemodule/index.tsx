import React, { useEffect, useMemo, useState } from "react";
import SingleModule from "./module";
import { modules } from "@/components/utils";


import { Module, Semester } from "@/components/utils/types";

// const semWeights: Array<number> = [];

const CourseModules = ({ semdata, semcount, onChange }: { semdata: Module[]; semcount: number; onChange: any }) => {
  const [moduleWeight, setModuleWeight] = useState<number>();
  const [ind, setIndex] = useState<number>(0);
  const [credit, setCredit] = useState<number>(0);
  const [semWeightTotal, setSemWeightTotal] = useState<number>();
  // const mods = useState(modules);
  const [semWeightArr, setSemWeightArr] = useState<number[]>([]);


  // const countModulesfortheSem = (mods : Module[], sem: string) => {
  //   return mods.filter(item => item.period === sem).length;
  // };

  // // ! Initialize the array with a fixed size
  // const [fixedArray, setFixedArray] = useState(Array.from({ length: 5 }, () => null));

  //   // Function to update a specific index in the array
  //   const updateArrayAtIndex = (index: number, value: null) => {
  //     setFixedArray(prevArray => {
  //       const newArray = [...prevArray];
  //       newArray[index] = value;
  //       return newArray;
  //     });
  //   };
 

  const handleInputChange = (value: any) => {
    setModuleWeight(value * credit);
  };

  const handleSemTotalsChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    onChange(value); // Invoke the callback function with the input value
  };

  useEffect(() => {
    console.log(ind);

    // semWeights[ind] = moduleWeight ? moduleWeight : 0;
    setSemWeightArr((curr) => {
      curr[ind] = moduleWeight ? moduleWeight : 0;
      return curr;
    });

    // console.log(sem);
    console.log(semWeightArr, "Recognise");


    console.log(moduleWeight);
    // console.log(semWeights);
    setSemWeightTotal(sumSemWeigh());
  }, [moduleWeight]);

  useEffect(()=> {
  }, [semWeightArr])

  
  const sumSemWeigh = () =>
    semWeightArr.reduce((acc, currentValue) => {
      // Check if the current value is a number and not an empty string or undefined
      if (
        typeof currentValue === "number" &&
        !isNaN(currentValue) 
      ) {
        return acc + currentValue;
      } else {
        return acc;
      }
    }, 0);


  console.log(sumSemWeigh());

  // ! useMemo Used here to memorise the total Semter Credit and only recalculate when the the modules supplied change
  //  This is to improve performance during re-rendering
  const totalSemCredit = useMemo(() => {
    // const semModules = modules.filter((module) => module.period === sem);
    const totalcredits = semdata.reduce(
      (acc, module) => acc + Number(module.c_hours),
      0
    );
    console.log(totalcredits);
    return totalcredits;
  }, [semdata]);

  return (
    <tbody className="divide-y bg-red-100">
      {semdata.map((mod, m) => {
        // if (mod.period == sem) {
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
        // }
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
