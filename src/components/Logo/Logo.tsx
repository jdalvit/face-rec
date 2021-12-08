import React from "react";
import "./Logo.css";
import brain from "./brain.png";

function Logo() {
  return (
    <div className="ma4">
      <div className="Tilt br2 shadow-2" style={{ height: 150, width: 150 }}>
        <div className="Tilt-inner">
          <img style={{ padding: "25px" }} src={brain} alt="brain" />
        </div>
      </div>
    </div>
  );
}

export default Logo;
