import React, { FC } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Particles, { ISourceOptions } from "react-tsparticles";
import "./App.css";
import {
  Routes,
  routeSelector,
  userSelector,
} from "./state/appDataSlice/slice";
import { useAppSelector } from "./state/store";
import { boxesSelector, imageUrlSelector } from "./state/imageSlice/slice";

const particlesOptions: ISourceOptions = {
  particles: {
    links: {
      distance: 150,
      enable: true,
      opacity: 0.5,
    },
    move: {
      enable: true,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 500,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
    },
  },
};

const App: FC = () => {
  const user = useAppSelector(userSelector);
  const route = useAppSelector(routeSelector);
  const boxes = useAppSelector(boxesSelector);
  const imageUrl = useAppSelector(imageUrlSelector);

  return (
    <div className="App">
      <Particles className="particles" options={particlesOptions} />

      <Navigation />
      {route === Routes.Home ? (
        <>
          <Logo />
          <Rank name={user?.name} entries={user?.entries} />
          <ImageLinkForm />
          <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
        </>
      ) : route === Routes.Register ? (
        <Register />
      ) : (
        <Signin />
      )}
    </div>
  );
};

export default App;
