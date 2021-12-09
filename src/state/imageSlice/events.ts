import { appRequest } from "../../api/appRequest";
import { ClarifaiData } from "../../models/ClarifaiData";
import { FaceBox } from "../../models/FaceBox";
import { appDataSlice, userSelector } from "../appDataSlice/slice";
import { AppDispatch, RootState } from "../store";
import { imageSlice } from "./slice";

const actions = imageSlice.actions;

export const onPictureSubmit =
  (input: string) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(actions.clean());
    dispatch(actions.initLoading());
    const id = userSelector(getState())?.id;

    const clarifaiData = await appRequest<ClarifaiData>(
      "https://stormy-reaches-17086.herokuapp.com/imageurl",
      {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          input,
        }),
      }
    );
    dispatch(actions.setImageUrl(input));
    dispatch(actions.setBoxes(calculateFaceLocations(clarifaiData)));

    if (clarifaiData) {
      const entries = await appRequest<number>(
        "https://stormy-reaches-17086.herokuapp.com/image",
        {
          method: "put",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            id,
          }),
        }
      );
      dispatch(appDataSlice.actions.setUserEntries(entries));
    }
    // TODO: manage errors

    dispatch(actions.finishLoading());
  };

const calculateFaceLocations = (data: ClarifaiData): FaceBox[] => {
  const clarifaiRegions = data?.outputs?.[0].data?.regions || [];
  return clarifaiRegions.map((region) => {
    const box = region.region_info.bounding_box;
    return {
      left: box.left_col,
      top: box.top_row,
      right: box.right_col,
      bottom: box.bottom_row,
    };
  });
};
