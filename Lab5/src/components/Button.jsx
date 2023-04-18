import React from "react";

export default function Button({ label, onClick, isDisabled}) {
  return (
    <button className="Button" disabled={isDisabled} onClick={onClick}>
      <div className="Button__Label">{label}</div>
    </button>
  );
}
