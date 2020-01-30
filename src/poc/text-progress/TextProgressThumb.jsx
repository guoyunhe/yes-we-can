import React from "react";
import Thumb from "../../Thumb";
import TextProgress from "./TextProgress";
import CentralLayout from "../central-layout/CentralLayout";

export default function TextProgressThumb() {
  return (
    <Thumb to="/text-progress" className="text-progress-thumb">
      <CentralLayout>
        <TextProgress percentage="50" />
      </CentralLayout>
    </Thumb>
  );
}
