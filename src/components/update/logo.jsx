import React, { useState, useEffect } from "react";

function Logo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
    }, 600);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="logo">
      <div className="logo-animation">
        <div className={`logo-letter ${show ? "animate" : "animate"}`} style={{color:"rgb(255, 140, 0)"}}>A</div>
        <div
          className={`logo-letter ${show ? "animate" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          a
        </div>
        <div
          className={`logo-letter ${show ? "animate" : ""}`}
          style={{ animationDelay: "0.2s" }}
        >
          k
        </div>
        <div
          className={`logo-letter ${show ? "animate" : ""}`}
          style={{ animationDelay: "0.3s" }}
        >
          a
        </div>
        <div
          className={`logo-letter ${show ? "animate" : ""}`}
          style={{ animationDelay: "0.4s" }}
        >
          s
        </div>
        <div
          className={`logo-letter ${show ? "animate" : ""}`}
          style={{ animationDelay: "0.5s" }}
        >
          h
        </div>
      </div>
    </div>
  );
}

export default Logo;
