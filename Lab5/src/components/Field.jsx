import React from "react";

function Hint({ helper }) {
  return (
    <ul className="Field__HelperMessage">
      {Object.keys(helper).map((key, index) => {
        const { value, hint } = helper[key];
        return !value && <li key={index}>{hint}</li>;
      })}
    </ul>
  )
}

export default function Field({ label, onChange, type, value, helper }) {
  return (
    <div className="Field">
      <div className="Field__Label">{label}</div>
      {type === "password" ? (
        <input
          className="Field__Input"
          name={label}
          onChange={onChange}
          type="password"
          value={value}
        />
      ) : (
        <input
          className="Field__Input"
          name={label}
          onChange={onChange}
          type="text"
          value={value}
        />
      )}
      {!!helper && <Hint helper={helper} />}
    </div>
  );
}