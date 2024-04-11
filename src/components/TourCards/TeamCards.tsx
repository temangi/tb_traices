import style from "./Cards.module.scss";
import img from "../img/Photo (3).png";
import React from "react";

interface Teamrops {
  name: string;
  description: string;
}

const TeamCards: React.FC<Teamrops> = ({ name, description }) => {
  return (
    <main className={style.team}>
      <img className={style.team__image} src={img} alt="" />
      <section className={style.team_bottom}>
        <h3>{name}</h3>
        <p> {description}</p>
      </section>
    </main>
  );
};

export default TeamCards;
