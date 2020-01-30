import React from "react";
import Thumb from "../../Thumb";
import WordBreaker from "./WordBreaker";
import "./WordBreakerThumb.css";

export default function WordBreakerThumb() {
  return (
    <Thumb to="/word-breaker" className="word-breaker-thumb">
      <WordBreaker>
        Do you know that "epäjärjestelmällistyttämättömyydelläänsäkäänköhän" is
        the longest Finnish word?
      </WordBreaker>
    </Thumb>
  );
}
