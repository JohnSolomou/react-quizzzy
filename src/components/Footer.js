import React from "react";
import "../css/styles.css";
function Footer() {
  return (
    <div>
      <svg
        className="white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 310"
      >
        <path
          fill="#68c2e8"
          fillOpacity="1"
          d="M0,288L48,245.3C96,203,192,117,288,80C384,43,480,53,576,96C672,139,768,213,864,240C960,267,1056,245,1152,197.3C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>{" "}
        <text textAnchor="middle" x="800" y="300">
          &copy; Quizzzy
        </text>
      </svg>
    </div>
  );
}

export default Footer;
