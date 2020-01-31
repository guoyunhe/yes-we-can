import React from "react";
import "./Detail.css";
import { Link } from "react-router-dom";

export default function Detail({ children }) {
  return (
    <div className="detail">
      <nav>
        <Link to="/">Return to list</Link>
      </nav>
      {children}
    </div>
  );
}
