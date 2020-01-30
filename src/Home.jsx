import React from "react";
import TextBorderThumb from "./poc/text-border/TextBorderThumb";
import TextProgressThumb from "./poc/text-progress/TextProgressThumb";
import WordBreakerThumb from "./poc/word-breaker/WordBreakerThumb";

import "./Home.css";
import AspectRatioThumb from "./poc/aspect-ratio/AspectRatioThumb";

export default function Home() {
  return (
    <div className="home">
      <div className="home__list">
        <TextBorderThumb />
        <TextProgressThumb />
        <WordBreakerThumb />
        <AspectRatioThumb />
      </div>
    </div>
  );
}
