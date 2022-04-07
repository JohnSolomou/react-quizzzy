import React from "react";
import "../css/styles.css";
function Footer() {
  return (
    <div>
      <svg
        class="white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 310"
      >
        <footer className="pt-5">
          <div className="container text-center">
            <p className="textwhite">&copy; Quizzzy </p>
          </div>
        </footer>
        <path
          fill="rgb(122, 184, 148)"
          fill-opacity="1"
          d="M0,288L48,245.3C96,203,192,117,288,80C384,43,480,53,576,96C672,139,768,213,864,240C960,267,1056,245,1152,197.3C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Footer;