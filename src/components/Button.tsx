import React from "react";

type BtnProps = {
  btnTxt: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
};

function Button(props: BtnProps) {
  const { btnTxt, onClick } = props;
  return (
    <div>
      <div className="btn-inner">
        <button
          type="submit"
          className={`btn-inner-content inline-flex rounded-full justify-center py-2 px-4 border border-transparent shadow-sm text-md font-bold rounded-md text-white bg-fin-dark-green hover:text-fin-dark-green hover:bg-fin-light-green text-fin-light-green focus:outline-none focus:ring-none transition duration-450 ease-in-out ${props.className}`}
          onClick={onClick}
        >
          {btnTxt.toLocaleUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default Button;
