import React from "react";
import "./AspectRatio.css";

export default function AspectRatio({ width, height, children }) {
  return (
    <div className="aspect-ratio">
      <div
        className="aspect-ratio__sizer"
        style={{ paddingBottom: (height / width) * 100 + "%" }}
      >
        <div className="aspect-ratio__inner">{children}</div>
      </div>
    </div>
  );
}
