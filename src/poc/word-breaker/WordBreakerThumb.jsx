import React from "react";
import Thumb from "../../Thumb";
import WordBreaker from "./WordBreaker";
import CentralLayout from "../central-layout/CentralLayout";

import "./WordBreakerThumb.css";

export default function WordBreakerThumb() {
  return (
    <Thumb to="/word-breaker" className="word-breaker-thumb">
      <CentralLayout>
        <WordBreaker>
          Do you know that "epäjärjestelmällistyttämättömyydelläänsäkäänköhän"
          is the longest Finnish word?
        </WordBreaker>
      </CentralLayout>
    </Thumb>
  );
}
