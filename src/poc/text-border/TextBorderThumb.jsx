import React from "react";
import Thumb from "../../Thumb";
import TextBorder from "./TextBorder";
import "./TextBorderThumb.css";

export default function TextBorderThumb() {
  return (
    <Thumb to="/text-border" className="text-border-thumb">
      <TextBorder>Text Border</TextBorder>
    </Thumb>
  );
}
