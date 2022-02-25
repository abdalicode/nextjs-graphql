import React from "react";

function CategoryTag({ text }) {
  return (
    <span className="body1 py-2 px-3 bg-white/25 rounded-full mx-1 text-white select-none">
      {text}
    </span>
  );
}

export default CategoryTag;
