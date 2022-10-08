import { useState } from "react";
export default function ArrowButtons({ Addcurrent, Subcurrent }) {
  const [state, setstate] = useState(0);
  return (
    <>
      <button
        className={!state ? "arrow1base arrow1" : "arrow1base arrow2"}
        id="left-arrow"
        onClick={() => {
          setstate(0);
          Subcurrent();
        }}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button
        className={state ? "arrow2base arrow1" : "arrow2base arrow2"}
        id="right-arrow"
        onClick={() => {
          setstate(1);
          Addcurrent();
        }}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </>
  );
}
