import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";

SyntaxHighlighter.registerLanguage("css", css);

export default function CssCode({ children }) {
  return (
    <SyntaxHighlighter language="css" style={prism}>
      {children}
    </SyntaxHighlighter>
  );
}
