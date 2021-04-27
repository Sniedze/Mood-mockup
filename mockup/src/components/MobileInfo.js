import React from "react";
import styles from "../styles/Home.module.scss";
import List from "./List";
import image from "../assets/images/Moodagent@2x.png";
import ImageComponent from "./ImageComponent";
import { mobileInfoItems } from "../data";

const MobileInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <List
        items={mobileInfoItems}
        headline="Getting Started"
        subheadline="Moodagent on mobile:"
      />
      <ImageComponent
        image={image}
        alt="mobile view"
        height="auto"
        width="30%"
        className={styles.mobileInfoImage}
        backgroundClass={styles.mobileInfoBackground}
      />
    </div>
  );
};

export default MobileInfo;
