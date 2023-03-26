import React from "react";

function Part({ path, index }) {
  return (
    <div>
      <img
        className="part"
        src={`../img/${path}/${index + 1}.png`}
        alt=""
        width={300}
      />
    </div>
  );
}

export default Part;
