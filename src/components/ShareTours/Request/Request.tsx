import React, { ChangeEvent, useState } from "react";
import style from "./style.module.scss";
import { request } from "../../../constants/ShareTours";

const Request: React.FC = () => {
  interface InputValuesI {
    [key: string]: string;
  }

  const [inputValues, setInputValues] = useState<InputValuesI>({
    firstName: "",
    secondName: "",
    number: "",
    email: "",
    date: "",
    tour: "",
    comment: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };
  const inputs = request.map(({ title, placeholder, type, id, name }) => (
    <section key={id} className={style.request__section}>
      <p>{title}</p>
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={handleInputChange}
        required
      />
    </section>
  ));

  const handleButton = () => {
    localStorage.setItem("user", JSON.stringify(inputValues));
  };

  return (
    <>
      <div className={style.info}>
        <h1>Share tours with travelers</h1>
        <div className={style.hr}></div>
        <p>
          Arctic Wild is a family owned and operated, wilderness guiding company
          based in Fairbanks, Alaska. We <br />
          specialize in 1 to 3 week, fully guided and outfitted adventures
          across Alaska. Our professional guides can take <br /> you to the most
          remote, beautiful and wildlife rich areas in Alaska. Our dedication to
          your enjoyment and learning <br /> is why people return year after
          year to enjoy the wilds of Alaska with us. Read their testimonials to
          learn more <br /> about why we are considered the best guide service
          in northern Alaska.
        </p>
      </div>
      <div className={style.request}>
        <h3>Send a request</h3>
        <hr />
          <form className={style.request__inputs} >
            <main className={style.request__main}>{inputs}</main>
            <aside>
              <p>Your comments</p>
              <input
                placeholder="Your wishes"
                type="text"
                required
                className={style.request__input_comment}
                value={inputValues.comment}
                name="comment"
                onChange={handleInputChange}
              />
            </aside>
            <div>
              <p>Send a request</p>
              <button onClick={handleButton}>Send now</button>
            </div>
          </form>
      </div>
    </>
  );
};

export default Request;
