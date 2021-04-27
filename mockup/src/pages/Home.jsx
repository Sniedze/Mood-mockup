import React from "react";
import styles from "../styles/Home.module.scss";
import MobileInfo from "../components/MobileInfo";
import DesktopInfo from "../components/DesktopInfo";
import QA from "../components/QA";

const Home = () => {
  return (
    <main className={styles.main}>
      <MobileInfo />
      <DesktopInfo />
      <QA />
    </main>
  );
};

export default Home;
