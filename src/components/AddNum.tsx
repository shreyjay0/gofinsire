import React from "react";
import Button from "./Button";

type AddProps = {
  sendNumToAdd: (e: React.MouseEvent, num: number) => void;
};

function AddNum(props: AddProps) {
  const [addNum, setAddNum] = React.useState() as any;
  const { sendNumToAdd } = props;
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inp = e.target.value.replace(/\D/g, "");
    setAddNum(inp);
    console.log(addNum);
  };

  const onClickAdd = (e: React.MouseEvent) => {
    sendNumToAdd(e, addNum);
    setAddNum(0);
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
    </div>
  );
}

export default AddNum;
