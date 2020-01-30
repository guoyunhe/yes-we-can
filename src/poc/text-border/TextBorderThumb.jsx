import React from "react";
import Thumb from "../../Thumb";
import TextBorder from "./TextBorder";
import CentralLayout from "../central-layout/CentralLayout";
import "./TextBorderThumb.css";

export default function TextBorderThumb() {
  return (
    <Thumb to="/text-border" className="text-border-thumb">
      <CentralLayout>
        <TextBorder>Text Border</TextBorder>
      </CentralLayout>
    </Thumb>
  );
}
