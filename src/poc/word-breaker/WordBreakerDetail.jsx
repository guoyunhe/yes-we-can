/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import Detail from "../../Detail";
import JsxCode from "../../JsxCode";
import CssCode from "../../CssCode";
import jsx from "!!raw-loader!./WordBreaker.jsx";
import css from "!!raw-loader!./WordBreaker.css";

export default function WordBreakerDetail() {
  return (
    <Detail>
      <h1>Word Breaker</h1>
      <h2>React</h2>
      <JsxCode>{jsx}</JsxCode>
      <h2>CSS</h2>
      <CssCode>{css}</CssCode>
    </Detail>
  );
}
