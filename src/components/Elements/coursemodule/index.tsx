import React, { useEffect, useState } from "react";
import SingleModule from "./module";
import { modules } from "@/components/utilsA";
import { Semester } from "@/components/utilsA/types";

const CourseModules = ({ sem }: { sem: string }) => {
  const [moduleWeight, setModuleWeight] = useState<number>();

  const handleInputChange = (value: any) => {
    setModuleWeight(value);
  };

  useEffect(() => {
    console.log(moduleWeight);
  }, [moduleWeight]);

  return (
    <tbody className="divide-y bg-red-100">
      {modules.map((mod, m) => {
        if (mod.period == sem) {
          return (
            <SingleModule key={m} module={mod} onChange={handleInputChange} />
          );
        }
      })}

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
