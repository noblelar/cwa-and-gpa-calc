import React from "react";
import CourseModules from "../coursemodule";

const sems = ["a"];



const Semester = () => {
  return (
    <table className="relative w-full border">
      <thead>
        <tr>
          <th className="sticky top-0 px-6 py-3 text-red-900 bg-red-300">
            Module Name
          </th>
          <th className="sticky top-0 px-6 py-3 text-red-900 bg-red-300">
            Credit Hours
          </th>
          <th className="sticky top-0 px-6 py-3 text-red-900 bg-red-300">
            Score
          </th>
          <th className="sticky top-0 px-6 py-3 text-red-900 bg-red-300">
            Weighted Score
          </th>
          <th className="sticky top-0 px-6 py-3 text-red-900 bg-red-300">
            Grade
          </th>
        </tr>
      </thead>

      <CourseModules sem={sems[0]} />

      <tfoot>
      <tr>
          <th className="sticky top-0 px-6 py-3 text-red-900 bg-red-300">
            Semester Totals
          </th>
          <th className="sticky top-0 px-6 py-3 text-red-900 bg-red-300">
            19
          </th>
          <th className="sticky top-0 px-6 py-3 text-red-900 bg-red-300">
            Semester Average
          </th>
          <th className="sticky top-0 px-6 py-3 text-red-900 bg-red-300">
            1872
          </th>
          <th className="sticky top-0 px-6 py-3 text-red-900 bg-red-300">
            Grade
          </th>
        </tr>
      </tfoot>
      {/* <thead>
        <tr>
          <th className="sticky top-0 px-6 py-3 text-green-900 bg-green-300">
            Header
          </th>
          <th className="sticky top-0 px-6 py-3 text-green-900 bg-green-300">
            Header
          </th>
          <th className="sticky top-0 px-6 py-3 text-green-900 bg-green-300">
            Header
          </th>
        </tr>
      </thead>
      <tbody className="divide-y bg-green-100">
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
      <thead>
        <tr>
          <th className="sticky top-0 px-6 py-3 text-blue-900 bg-blue-300">
            Header
          </th>
          <th className="sticky top-0 px-6 py-3 text-blue-900 bg-blue-300">
            Header
          </th>
          <th className="sticky top-0 px-6 py-3 text-blue-900 bg-blue-300">
            Header
          </th>
        </tr>
      </thead>
      <tbody className="divide-y bg-blue-100">
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
      <thead>
        <tr>
          <th className="sticky top-0 px-6 py-3 text-yellow-900 bg-yellow-300">
            Header
          </th>
          <th className="sticky top-0 px-6 py-3 text-yellow-900 bg-yellow-300">
            Header
          </th>
          <th className="sticky top-0 px-6 py-3 text-yellow-900 bg-yellow-300">
            Header
          </th>
        </tr>
      </thead>
      <tbody className="divide-y bg-yellow-100">
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
      <thead>
        <tr>
          <th className="sticky top-0 px-6 py-3 text-purple-900 bg-purple-300">
            Header
          </th>
          <th className="sticky top-0 px-6 py-3 text-purple-900 bg-purple-300">
            Header
          </th>
          <th className="sticky top-0 px-6 py-3 text-purple-900 bg-purple-300">
            Header
          </th>
        </tr>
      </thead>
      <tbody className="divide-y bg-purple-100">
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
      </tbody> */}
    </table>
  );
};

export default Semester;
