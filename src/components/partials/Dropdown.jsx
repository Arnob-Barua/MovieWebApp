// Importing necessary libraries and components
import React from "react";

// Main Dropdown component
const Dropdown = ({ title, options, func, value }) => {
  return (
    <div className="select">
      {/* Dropdown select element */}
      <select
        value={value}
        onChange={func}
        name="format"
        id="format"
        className="bg-zinc-800 text-white p-2 rounded-md"
      >
        {/* Placeholder option */}
        {value === "" && (
          <option value="" disabled>
            {title}
          </option>
        )}
        {/* Mapping options to dropdown */}
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