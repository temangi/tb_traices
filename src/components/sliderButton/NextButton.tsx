import { useMemo } from "react";
import style from "./index.module.scss";
import img from "../img/Next.png";

interface SliderProps {
  onClick: () => void;
}

const NextArrow: React.FC<SliderProps> = ({ onClick }) => {
  const render__btn = useMemo(
    () => (
      <button className={style.btn} onClick={onClick}>
        <img className="" src={img} alt="Arrow" />
      </button>
    ),
    [onClick]
  );

  return <div className={style.next__arrow}>{render__btn}</div>;
};

export default NextArrow;
