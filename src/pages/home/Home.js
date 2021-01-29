import React from "react";
import Categories from "../../components/categories/Categories";
import Slider from "../../components/slider/Slider";
import homeStyles from "./Home.module.css";

function Home() {
  return (
    <div className={homeStyles.home}>
      <Slider />
      <Categories />
    </div>
  );
}

export default Home;
