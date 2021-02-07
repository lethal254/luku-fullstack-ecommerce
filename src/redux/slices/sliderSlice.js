import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import cache from "../../helpers/caching";

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    loading: false,
    sliders: [],
    error: "",
    lastFetch: "",
  },
  reducers: {
    sendSlidesRequest: (state, action) => {
      state.loading = true;
    },
    setSlides: (state, action) => {
      state.sliders = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export default sliderSlice.reducer;

export const { setSlides, setError, sendSlidesRequest } = sliderSlice.actions;
export const selectLoadingStatus = (state) => state.slides.loading;

export const loadSlides = async (dispatch, getState) => {
  const { lastFetch } = getState().products;
  if (cache(lastFetch)) return;
  try {
    const response = await axios.get("/slides");
    dispatch(sendSlidesRequest());
    if (response) {
      dispatch(setSlides(response.data));
    }
  } catch (error) {
    dispatch(setError({ error: error.message }));
  }
};
export const selectSlides = (state) => {
  if (state.slides.sliders) {
    return state.slides.sliders;
  }
};
