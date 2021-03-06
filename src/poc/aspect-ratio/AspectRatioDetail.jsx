/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import Detail from "../../Detail";
import JsxCode from "../../JsxCode";
import CssCode from "../../CssCode";
import jsx from "!!raw-loader!./AspectRatio.jsx";
import css from "!!raw-loader!./AspectRatio.css";

export default function AspectRatioDetail() {
  return (
    <Detail>
      <h1>Aspect Ratio</h1>
      <h2>React</h2>
      <JsxCode>{jsx}</JsxCode>
      <h2>CSS</h2>
      <CssCode>{css}</CssCode>
    </Detail>
  );
}
