import React from "react";
import Button from "./Button";

type AddProps = {
  sendNumToAdd: (e: React.MouseEvent<HTMLElement>, num: number) => void;
};

const AddNum = (props: AddProps) => {
  const [addNum, setAddNum] = React.useState() as any;
  const [added, setAdded] = React.useState(false);
  const { sendNumToAdd } = props;
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inp = e.target.value.replace(/\D/g, "");
    setAddNum(inp);
  };

  const onClickAdd = (e: React.MouseEvent<HTMLElement>) => {
    if (addNum > 0 && addNum < 1000) {
      sendNumToAdd(e, addNum);
      setAddNum(0);
      setAdded(true);
    } else {
      alert("Please enter a number between 1 and 999");
    }
  };

  return (
    <div>
      <div className="text-white">
        Enter a number to add to the current data:
      </div>
      <div className="mt-3 text-fin-dark-green">
        <input
          type="text"
          value={addNum}
          className="w-full p-2 border-2 border-fin-light-green rounded-lg"
          onChange={handleInput}
        />
      </div>
      <div className="mt-10">
        <Button btnTxt="Add" onClick={onClickAdd} className="w-full" />
      </div>
      <div className="mt-3">
        {added ? (
          <div className="text-white">Number added to the current data.</div>
        ) : (
          <div className="text-red">
            Please enter a number between 1 and 999.
          </div>
        )}
      </div>
    </div>
  );
};

export default AddNum;
