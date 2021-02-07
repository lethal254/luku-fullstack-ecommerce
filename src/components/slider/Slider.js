import React, { useEffect, useState } from "react";
import sliderStyles from "./Slider.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  loadSlides,
  selectLoadingStatus,
  selectSlides,
} from "../../redux/slices/sliderSlice";
import CircleLoader from "react-spinners/ClipLoader";

function Slider() {
  const slides = useSelector(selectSlides);
  const loading = useSelector(selectLoadingStatus);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSlides);
  }, [dispatch]);
  useEffect(() => {
    setTimeout(() => {
      if (index < slides.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 5000);
  });

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
          {loading ? (
            <CircleLoader color='#ffffff' loading={loading} size={150} />
          ) : (
            <div>
              <h1 className={sliderStyles.slider__typographyHeader}>
                {slides.length > 0 ? slides[index].title : false}
              </h1>
              <p className={sliderStyles.slider__typographyBody}>
                {slides.length > 0 ? slides[index].description : false}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Slider;
