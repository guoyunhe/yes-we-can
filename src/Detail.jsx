import React from "react";
import "./Detail.css";
import { Link } from "react-router-dom";

export default function Detail({ children }) {
  return (
    <div className="detail">
      <nav>
        <Link to="/" className="detail__back-link">
          <i class="ri-arrow-go-back-line"></i>
        </Link>
      </nav>
      {children}
    </div>
  );
}
