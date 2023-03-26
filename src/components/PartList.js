import React from "react";

function PartList({ path, part, set }) {
  return (
    <div>
      <ul className="item-list">
        {part.map((item, index) => (
          <li key={index}>
            <div className="item" onClick={() => set(index)}>
              <img src={`../img/${path}/${item}.png`} alt="" width={50} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PartList;
