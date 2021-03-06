import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 300, clear: "both", paddingTop: 120, textAlign: "center", background: "#258ea6",
        fontFamily: "Noto Serif, serif",
        borderRadius: 10,
        borderStyle: "groove",
        borderWidth: 7,
        width: 750,
        marginLeft: 350,
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
