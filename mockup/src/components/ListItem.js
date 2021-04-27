import React from "react";
import styles from "../styles/Home.module.scss";

const ListItem = ({ item }) => {
  return (
    <div className={styles.listItem}>
      <h5>{item.id} </h5>
      <div className={styles.verticalLine}></div>
      <p>{item.text}</p>
      <br />{" "}
      {item.buttons &&
        item.buttons.map((button) => {
          return <button>{button.text}</button>;
        })}
    </div>
  );
};

export default ListItem;
