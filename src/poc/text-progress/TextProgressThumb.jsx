import React from "react";
import Thumb from "../../Thumb";
import TextProgress from "./TextProgress";
import "./TextProgressThumb.css";

export default function TextProgressThumb() {
  return (
    <Thumb to="/text-progress" className="text-progress-thumb">
      <TextProgress percentage="50" />
    </Thumb>
  );
}
