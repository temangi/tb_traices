import { useMemo } from "react";
import style from "./index.module.scss";
import img from "../img/Prev.png";

interface SliderProps {
  onClick: () => void;
}

const PrevArrow: React.FC<SliderProps> = ({ onClick }) => {
  const render__btn = useMemo(
    () => (
      <button className={style.btn} onClick={onClick}>
        <img className="" src={img} alt="Arrow" />
      </button>
    ),
    [onClick]
  );

  return <div className={style.prev__arrow}>{render__btn}</div>;
};

export default PrevArrow;
