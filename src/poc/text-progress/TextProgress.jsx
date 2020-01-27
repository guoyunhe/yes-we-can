import React from "react";
import "./TextProgress.css";

export default function TextProgress({ percentage }) {
  return (
    <div className="text-progress">
      <div className="text-progress__bar text-progress__bar--background">
        {percentage}%
      </div>
      <div
        className="text-progress__bar text-progress__bar--foreground"
        style={{
          clipPath: `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`
        }}
      >
        {percentage}%
      </div>
    </div>
  );
}
