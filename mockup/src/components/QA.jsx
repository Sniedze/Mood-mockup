import React from "react";
import Accordion from "./Accordion";
import styles from "../styles/Home.module.scss";
import { QAInfoItems } from "../data";

const QA = () => {
  return (
    <div className={styles.QAContainer}>
      <h3>
        Got other <span>questions</span> about <br />
        Moodagent? We have answers
      </h3>

      {QAInfoItems.map((item, index) => (
        <Accordion key={index} item={item} />
      ))}
    </div>
  );
};

export default QA;
