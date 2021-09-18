import React from "react";

const CustomButton = ({ loading, label, color, onClick }) => {
  const handleOnClick = (e) => {
    if (loading) return false;
    if (onClick) onClick(e);
  };
  return (
    <button
      className={`btn waves-effect waves-light white-text ${color}`}
      onClick={(e) => handleOnClick(e)}
    >
      <label className="white-text bold">
        <strong>{label}</strong>
      </label>
    </button>
  );
};

export default CustomButton;
