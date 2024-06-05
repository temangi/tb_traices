import style from "./style.module.scss";
import arrow from "../../img/tourlogo.svg";
import { useEffect, useMemo, useState } from "react";
import close from "../../img/closeArrow.svg";

interface Modal {
  name: string;
  open: boolean;
  id: number;
}

interface Card {
  title: string;
  id: number;
  card: Modal[];
}

const Filter: React.FC<Card> = ({ title, card }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [select, setSelect] = useState(card);
  const [count, setCount] = useState(0);
  const [day, setDay] = useState("");

  const handleClick = () => {
    setIsModal(!isModal);
    setOpenModal(true);
  };

  useEffect(() => {
    const body = document.body;
    body.style.overflow = isModal ? "hidden" : "";
  }, [isModal]);

  const clickBtn = (id: number) => {
    const arr = select.map((item) => {
      const status = item.open;
      if (item.id === id) {
        return { ...item, open: !status };
      }
      return { ...item };
    });
    setSelect(arr);
  };

  const clickBtnDay = (id: number) => {
    const arr = select.map((item) => {
      const status = item.open;
      if (item.id === id) {
        setDay(item.name);
        return { ...item, open: !status };
      }
      return { ...item, open: false };
    });
    setSelect(arr);
  };

  const reset = () => {
    const arr = select.map((item) => {
      return { ...item, open: false };
    });
    setSelect(arr);
  };

  const apply = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    let count: number = 0;

    select.map((item) => {
      if (item.open === true) {
        count++;
      }
    });
    setCount(count);
  }, [count, select]);

  const buttons = useMemo(() => {
    return select.map(({ name, id, open }) => (
      <p
        className={open ? style.selectBtn : style.notSelectBtn}
        onClick={
          title === "Duration" ? () => clickBtnDay(id) : () => clickBtn(id)
        }
        key={id}
      >
        {name}
      </p>
    ));
  }, [select]);

  const modal = useMemo(() => {
    return (
      <main
        className={isModal ? style.modalActive : style.modalNotActive}
        onClick={handleClick}
      >
        <article
          onClick={(e) => e.stopPropagation()}
          className={style.modal_main}
        >
          <div className={style.modal_header}>
            <h3>{title}</h3>
            <img onClick={() => setOpenModal(false)} src={close} alt="" />
          </div>
          <hr />
          <div className={style.modal__filterBtn}>{buttons}</div>
          <hr />
          <article className={style.modal_btn}>
            <button onClick={reset} className={style.reset}>
              Reset
            </button>
            <button onClick={apply} className={style.apply}>
              Apply
            </button>
          </article>
        </article>
      </main>
    );
  }, [isModal, buttons]);

  return (
    <>
      <section onClick={handleClick} className={style.filterBtn}>
        <div className={style.filterBtn_left}>
          <p className={count > 0 ? style.title_active : style.title_notActive}>
            {title}
          </p>

          <p className={style.count}>
            {title !== "Duration" && count > 0 ? `(${count})` : ""}
          </p>
          <p className={style.days}>
            {title === "Duration" && count > 0 ? `(${day})` : ""}
          </p>
        </div>
        <img src={arrow} alt="arrow" />
        <span
          className={count > 0 ? style.circle_active : style.circle_notActive}
        ></span>
      </section>
      {openModal && modal}
    </>
  );
};

export default Filter;
