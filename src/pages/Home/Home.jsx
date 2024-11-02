import React from "react";
import Benefits from "../../components/Benefits/Benefits";
import CardList from "../../components/CardList/CardList";
import Chart from "../../components/Chart/Chart";
import styles from './Home.module.css'

const Home = () => {
  return <div className={styles.homeContainer}>
    <Chart/>
    <CardList/>
    <Benefits/>
  </div>;
};

export default Home;