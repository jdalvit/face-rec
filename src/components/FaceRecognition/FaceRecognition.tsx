import React, { FC, useEffect } from "react";
import { FaceBox } from "../../models/FaceBox";
import { imageSlice } from "../../state/imageSlice/slice";
import { useAppDispatch } from "../../state/store";
import "./FaceRecognition.css";
import { mapRelativeProportionsToCssPercentages } from "./utils";

interface Props {
  imageUrl?: string;
  boxes?: FaceBox[];
}

const FaceRecognition: FC<Props> = ({ imageUrl, boxes }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(imageSlice.actions.clean());
  }, [dispatch]);
  return (
    <div className="relative center w-40-ns w-60-m w-90 mt2">
      <img src={imageUrl} alt="" className="image" />
      {boxes &&
        imageUrl &&
        boxes.map((box, i) => {
          return (
            <div
              className="bounding-box"
              style={mapRelativeProportionsToCssPercentages(box)}
              key={i}
            />
          );
        })}
    </div>
  );
};

export default FaceRecognition;
