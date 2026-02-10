import React from "react";

const RedButton = ({ onClick, text, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default RedButton;
