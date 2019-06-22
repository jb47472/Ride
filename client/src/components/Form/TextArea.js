import React from "react";

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="1" {...props} style={{ width: 750 }} />
    </div>
  );
}
