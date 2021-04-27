import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
import { Collapse } from "reactstrap";

const Accordion = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={isOpen ? styles.QAItemOpen : styles.QAItem}
        onClick={toggle}
      >
        <h5>Q </h5>
        <div className={styles.verticalLine}></div>
        <p className={isOpen ? styles.questionOpen : styles.questionClosed}>
          {item.text}
        </p>

        {isOpen ? (
          <p className={styles.arrows}> &#8593;</p>
        ) : (
          <p className={styles.arrows}> &#8595;</p>
        )}
      </div>

      <Collapse isOpen={isOpen}>
        <div className={styles.QAItem}>
          <h5>A </h5>
          <div className={styles.verticalLine}></div>
          <p>{item.body}</p>
        </div>
      </Collapse>
    </>
  );
};

export default Accordion;
