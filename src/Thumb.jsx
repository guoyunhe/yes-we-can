import React from "react";
import { Link } from "react-router-dom";
import "./Thumb.css";

export default function Thumb({ className, children, to }) {
  return (
    <Link className={"thumb " + className} to={to}>
      {children}
    </Link>
  );
}
