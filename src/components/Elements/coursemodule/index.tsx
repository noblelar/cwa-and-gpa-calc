import React from "react";
import SingleModule from "./module";
import { modules } from "@/components/utils";

const CourseModules = () => {
  return (
    <tbody className="divide-y bg-red-100">
      <SingleModule module={modules[0]} />
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
      </tr>
      <tr>
        <td className="px-6 py-4 text-center">Column</td>
        <td className="px-6 py-4 text-center">Column</td>
        <td className="px-6 py-4 text-center">Column</td>
      </tr>
    </tbody>
  );
};

export default CourseModules;
