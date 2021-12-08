import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FaceBox } from "../../models/FaceBox";
import { RootState } from "../store";

interface ImageSlice {
  isLoading: boolean;
  imageUrl?: string;
  boxes: FaceBox[];
}

const initialState: ImageSlice = {
  isLoading: false,
  boxes: [],
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setBoxes: (state, action: PayloadAction<FaceBox[]>) => {
      state.boxes = action.payload;
    },
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
    initLoading: (state) => {
      state.isLoading = true;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    },
    clean: (state) => initialState,
  },
});

export const boxesSelector = (state: RootState) => state.image.boxes;
export const imageUrlSelector = (state: RootState) => state.image.imageUrl;
export const isLoadingImageSelector = (state: RootState): boolean =>
  state.image.isLoading;
