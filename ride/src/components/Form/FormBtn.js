import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} style={{ position: "relative", left: 500, marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
