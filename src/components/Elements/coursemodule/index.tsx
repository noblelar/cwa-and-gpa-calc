import React, { useEffect, useMemo, useState } from "react";
import SingleModule from "./module";
import { modules } from "@/components/utils";
import { Semester } from "@/components/utils/types";


const semWeights : Array<number> = []; 
const CourseModules = ({ sem }: { sem: string }) => {
  const [moduleWeight, setModuleWeight] = useState<number>();
  const [ind, setIndex] = useState<number>(0);
  const mods = useState(modules)

  const handleInputChange = (value: any) => {
    setModuleWeight(value);
  };

  useEffect(() => {
    console.log(ind)
    semWeights[ind] = moduleWeight? moduleWeight : 0;
    console.log(moduleWeight);
    console.log(semWeights);

  }, [moduleWeight]);

  // const totalcredits = modules.reduce((acc, module) => acc + Number(module.c_hours), 0);
  const totalSemCredit = useMemo(()=> {
    const semModules = modules.filter(module => module.period === sem);
    const totalcredits = semModules.reduce((acc, module) => acc + Number(module.c_hours), 0);

    console.log(totalcredits);

    return totalcredits;
  }, [mods])

  return (
    <tbody className="divide-y bg-red-100">
      {modules.map((mod, m) => {
        if (mod.period == sem) {
          // setIndex(m);
          return (
            <SingleModule key={m} module={mod} onChange={handleInputChange} arKey={setIndex} count={m} />
          );
        }
      })}

      <input type="hidden" name=""  />


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
