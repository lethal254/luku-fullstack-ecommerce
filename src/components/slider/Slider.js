import React, { useEffect, useState } from "react";
import sliderStyles from "./Slider.module.css";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import axios from "../../axios";

function Slider() {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/slides");
      setSlides(response.data);
    })();
  }, []);

  const styles = {
    backgroundImage: `url(${slides.length > 0 ? slides[index].image : false})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={sliderStyles.slider}>
      <div className={sliderStyles.slider__content} style={styles}>
        <div className={sliderStyles.slider__typography}>
          <h1 className={sliderStyles.slider__typographyHeader}>
            {slides.length > 0 ? slides[index].title : false}
          </h1>
          <p className={sliderStyles.slider__typographyBody}>
            {slides.length > 0 ? slides[index].description : false}
          </p>
        </div>
        <div className={sliderStyles.slider__buttons}>
          <Button
            size='large'
            variant='outlined'
            disabled={index === 0}
            className={sliderStyles.slider__button}
            onClick={() => {
              if (index >= 0) {
                setIndex(index - 1);
              }
            }}>
            <ArrowBackIosIcon className={sliderStyles.slider__icon} />
          </Button>
          <Button
            size='large'
            variant='outlined'
            className={sliderStyles.slider__button}
            onClick={() => {
              if (index < slides.length - 1) {
                setIndex(index + 1);
              } else {
                setIndex(0);
              }
            }}>
            <ArrowForwardIosIcon className={sliderStyles.slider__icon} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
