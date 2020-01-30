import React from "react";
import Thumb from "../../Thumb";
import CentralLayout from "../central-layout/CentralLayout";
import AspectRatio from "./AspectRatio";
import "./AspectRatioThumb.css";

export default function AspectRatioThumb() {
  return (
    <Thumb to="/aspect-ratio" className="aspect-ratio-thumb">
      <CentralLayout>
        <AspectRatio width={16} height={9}>
          <CentralLayout>16:9</CentralLayout>
        </AspectRatio>
      </CentralLayout>
    </Thumb>
  );
}
