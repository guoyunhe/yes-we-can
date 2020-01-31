import React from "react";
import ThumbGrid from "./ThumbGrid";
import TextBorderThumb from "./poc/text-border/TextBorderThumb";
import TextProgressThumb from "./poc/text-progress/TextProgressThumb";
import WordBreakerThumb from "./poc/word-breaker/WordBreakerThumb";
import AspectRatioThumb from "./poc/aspect-ratio/AspectRatioThumb";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <ThumbGrid>
        <TextBorderThumb />
        <TextProgressThumb />
        <WordBreakerThumb />
        <AspectRatioThumb />
      </ThumbGrid>
    </div>
  );
}
