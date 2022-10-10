import { useState } from "react";

import stylesa from "../../app.module.scss";
import stylesb from "../../bootstrap.module.scss";

const style = (classname) => {
  if (stylesa[classname]) return stylesa[classname];
  if (stylesb[classname]) return stylesb[classname];
};

export default function ArrowButtons({ Addcurrent, Subcurrent }) {
  const [state, setstate] = useState(0);
  return (
    <>
      <button
        className={
          !state
            ? style("arrow1base") + " " + style("arrow1")
            : style("arrow1base") + " " + style("arrow2")
        }
        id="left-arrow"
        onClick={() => {
          setstate(0);
          Subcurrent();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </button>
      <button
        className={
          state
            ? style("arrow2base") + " " + style("arrow1")
            : style("arrow2base") + " " + style("arrow2")
        }
        id="right-arrow"
        onClick={() => {
          setstate(1);
          Addcurrent();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </button>
    </>
  );
}
