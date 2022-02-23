import React from "react";

type dataArrProps = {
  dataArr: Array<number>;
};

function ShowData(props: dataArrProps) {
  const { dataArr } = props;
  return (
    <div>
      <div className="data-head font-semibold text-xl mb-3 text-white">
        Generated Data:
      </div>
      <div className="data-body overflow-y-auto h-40 bg-fin-dark-green my-5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-emerald-200/5">
        {dataArr.map((item, index) => {
          return (
            <div className="px-4 py-1" key={index}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowData;
