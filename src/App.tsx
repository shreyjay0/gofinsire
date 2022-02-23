import React, { useEffect } from "react";
import AddNum from "./components/AddNum";
import Button from "./components/Button";
import ShowData from "./components/ShowData";
import Table from "./components/Table";
import axios from "axios";
import {
  meanCalc,
  medianCalc,
  modeCalc,
  stdDevCalc,
  sortArr,
} from "./utils/statsCalc";
import { UtilAns } from "./types/go";

function App() {
  const tstData = [0];
  const [data, setData] = React.useState(tstData);
  const [utilAns, setUtilAns] = React.useState<UtilAns>({
    mean: 0,
    median: 0,
    mode: "",
    stdDev: 0,
  });

  const getDatafromAPI = async () => {
    const res = await axios.get("http://127.0.0.1:5000/api/v1/stats/generate");
    setData(res.data.data);
    setUtilAns({
      mean: meanCalc(data),
      median: medianCalc(data),
      mode: modeCalc(sortArr(data)).toString(),
      stdDev: stdDevCalc(data),
    });
  };

  useEffect(() => {
    getDatafromAPI();
  }, []);

  const sendNumToAdd = (e: React.MouseEvent, num: number) => {
    setData([...data, num]);
    setUtilAns({
      mean: meanCalc(data),
      median: medianCalc(data),
      mode: modeCalc(sortArr(data)).toString(),
      stdDev: stdDevCalc(data),
    });
  };

  const onFetchClick = (e: React.MouseEvent) => {
    console.log("Fetching new stats...");
    getDatafromAPI();
  };
  return (
    <div className="md:flex justify-between px-14 px-10 p-4 items-center justify-center h-screen text-red-300 bg-gradient-to-br from-gray-300 via-teal-700 to-gray-800">
      <div className="">
        <Table
          mean={utilAns.mean}
          mode={utilAns.mode}
          median={utilAns.median}
          stdDev={utilAns.stdDev}
        />
      </div>
      <div className="add-num">
        <AddNum sendNumToAdd={(e, num) => sendNumToAdd(e, num)} />
      </div>
      <div className="show-data">
        <div>
          <ShowData dataArr={sortArr(data)} />
        </div>
        <div>
          <Button onClick={(e) => onFetchClick(e)} btnTxt="Fetch new data" />
        </div>
      </div>
    </div>
  );
}

export default App;
