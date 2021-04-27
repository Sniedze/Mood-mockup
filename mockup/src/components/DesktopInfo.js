import React from "react";
import styles from "../styles/Home.module.scss";
import List from "./List";
import image from "../assets/images/Desktop player.png";
import ImageComponent from "./ImageComponent";
import { desktopInfoItems } from "../data";

const DesktopInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <ImageComponent
        image={image}
        alt="mobile view"
        height="auto"
        width="80%"
        className="desktopInfoImage"
        backgroundClass={styles.desktopInfoBackground}
      />
      <List items={desktopInfoItems} subheadline="Moodagent on desktop:" />
    </div>
  );
};

export default DesktopInfo;
