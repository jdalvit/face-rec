import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { appDataSlice } from "./appDataSlice/slice";
import { imageSlice } from "./imageSlice/slice";

export const store = configureStore({
  reducer: { appData: appDataSlice.reducer, image: imageSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
