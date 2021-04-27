import React from "react";
import ListItem from "./ListItem";
import styles from "../styles/Home.module.scss";

const List = ({ items, headline, subheadline }) => {
  return (
    <div className={styles.listContainer}>
      <h1>{headline}</h1>
      <h3>{subheadline}</h3>

      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
};

export default List;
