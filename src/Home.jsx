import React from "react";
import TextBorderThumb from "./poc/text-border/TextBorderThumb";
import "./Home.css";
import TextProgressThumb from "./poc/text-progress/TextProgressThumb";

export default function Home() {
  return (
    <div className="home">
      <div className="home__list">
        <TextBorderThumb />
        <TextProgressThumb />
      </div>
    </div>
  );
}
