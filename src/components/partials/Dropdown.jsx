import React from "react";

const Dropdown = ({ title, options, func, value }) => {
  return (
    <div className="select">
      <select
        value={value}
        onChange={func}
        name="format"
        id="format"
      >
        {value === "" && (
          <option value="" disabled>
            {title}
          </option>
        )}
        {options.map((o, i) => (
          <option key={i} value={o}>
            {value === o ? `✔ ${o.toUpperCase()}` : o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;