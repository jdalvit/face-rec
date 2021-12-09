import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { onPictureSubmit } from "../../state/imageSlice/events";
import "./ImageLinkForm.css";

const ImageLinkForm: FC = () => {
  const [imageUrl, setImageUrl] = useState<string>();
  const dispatch = useDispatch();
  return (
    <div>
      <p className="f3">
        FaceRec will detect faces in your pictures. Paste an image URL and try
        it out!
      </p>
      <div className="form pa4 br3 w-50-ns w-70-m shadow-5 center">
        <input
          type="text"
          className="f4 pa2 w-70 center"
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <button
          className="w-30 grow f4 link pv2 dib white bg-light-purple center"
          disabled={!imageUrl}
          onClick={() => imageUrl && dispatch(onPictureSubmit(imageUrl))}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
