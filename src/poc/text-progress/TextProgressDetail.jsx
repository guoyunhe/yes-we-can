/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import Detail from "../../Detail";
import JsxCode from "../../JsxCode";
import CssCode from "../../CssCode";
import jsx from "!!raw-loader!./TextProgress.jsx";
import css from "!!raw-loader!./TextProgress.css";

export default function TextProgressDetail() {
  return (
    <Detail>
      <h1>Text Progress</h1>
      <h2>React</h2>
      <JsxCode>{jsx}</JsxCode>
      <h2>CSS</h2>
      <CssCode>{css}</CssCode>
    </Detail>
  );
}
