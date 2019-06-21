import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 300, clear: "both", paddingTop: 120, textAlign: "center", background: "bisque",
        fontFamily: "Noto Serif, serif",
        borderRadius: 10,
        borderStyle: "groove",
        borderWidth: 7,
        borderColor: "coral",
        width: 750,
        position: "relative",
        positionRight: 200
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
