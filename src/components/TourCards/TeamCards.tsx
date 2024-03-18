import style from "./Cards.module.scss";
import img from "../img/Photo (3).png";
import React from "react";

interface Teamrops {
  obj: {
    name: string;
    description: string;
  };
}

const TeamCards: React.FC<Teamrops> = ({ obj }) => {
  return (
    <main className={style.team}>
      <img className={style.team__image} src={img} alt="" />
      <section className={style.team__bottom}>
        <h3>{obj.name}</h3>
        <p> {obj.description}</p>
      </section>
    </main>
  );
};

export default TeamCards;
