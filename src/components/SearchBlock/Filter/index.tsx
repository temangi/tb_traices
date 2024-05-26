import style from "./style.module.scss";
import arrow from "../../img/tourlogo.svg";
import { useMemo, useState } from "react";
import close from "../../img/closeArrow.svg";

interface Modal {
  name: string;
  open: boolean;
}

interface Card {
  title: string;
  id: number;
  card: Modal[];
}

const Filter: React.FC<Card> = ({ title, card }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const handleClick = () => {
    setIsModal(!isModal);
    setOpenModal(true);
  };



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
          <div className={style.modal__filterBtn}>
            {card.map((item, id) => (
              <p
                key={id}
              >
                {item.name}
              </p>
            ))}
          </div>
          <hr />
          <article className={style.modal_btn}>
            <button className={style.reset}>Reset</button>
            <button className={style.apply}>Apply</button>
          </article>
        </article>
      </main>
    );
  }, [isModal]);

  return (
    <>
      <section onClick={handleClick} className={style.filterBtn}>
        <p>{title}</p>
        <img src={arrow} alt="" />
      </section>
      {openModal && modal}
    </>
  );
};

export default Filter;
