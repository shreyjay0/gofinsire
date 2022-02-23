import React, { useEffect } from "react";
import { UtilAnsType } from "../types/go";

function Table(props: UtilAnsType) {
  const { mean, median, mode, stdDev } = props;
  const [calcVal, setCalcVal] = React.useState({
    mean: 0,
    median: 0,
    mode: "0",
    stdDev: 0,
  });

  useEffect(() => {
    setCalcVal({
      mean: mean,
      median: median,
      mode: mode,
      stdDev: stdDev,
    });
  }, []);

  useEffect(() => {
    setCalcVal({
      mean: mean,
      median: median,
      mode: mode,
      stdDev: stdDev,
    });
  }, [mean || median || mode || stdDev]);

  return (
    <div className="">
      <table className="table w-half rounded-lg border-collapse overflow-hidden bg-fin-dark-green">
        <thead>
          <tr>
            <th className="border-b-2 border-fin-light-green p-4">
              Central Tendency Measure
            </th>
            <th className="border-b-2 border-bottom-fin-light-green p-4">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-fin-light-green border-b-2 border-bottom-fin-light-green px-4 py-2">
              Mean
            </td>
            <td className="text-center border-b-2 border-bottom-fin-light-green border-separate px-4 py-2">
              {calcVal.mean.toFixed(6)}
            </td>
          </tr>
          <tr>
            <td className="border-fin-light-green border-b-2 border-bottom-fin-light-green px-4 py-2">
              Median
            </td>
            <td className="text-center border-b-2 border-bottom-fin-light-green border-separate px-4 py-2">
              {calcVal.median.toFixed(6)}
            </td>
          </tr>
          <tr>
            <td className="border-fin-light-green border-b-2 border-bottom-fin-light-green px-4 py-2">
              Mode
            </td>
            <td className="text-center border-b-2 border-bottom-fin-light-green border-separate px-4 py-2">
              {calcVal.mode}
            </td>
          </tr>
          <tr>
            <td className=" px-4 py-2">Standard Deviation</td>
            <td className="text-center px-4 py-2">
              {calcVal.stdDev.toFixed(6)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
