import { CSSProperties } from "react";
import { FaceBox } from "../../models/FaceBox";

export const mapRelativeProportionsToCssPercentages = (
  box: FaceBox
): CSSProperties => {
  return {
    left: `${Math.floor(box.left * 100)}%`,
    top: `${Math.floor(box.top * 100)}%`,
    right: `${Math.floor(100 - box.right * 100)}%`,
    bottom: `${Math.floor(100 - box.bottom * 100)}%`,
  };
};
