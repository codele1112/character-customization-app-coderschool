import Part from "./Part";
import React from "react";

function Avatar({
  body,
  eyes,
  mouth,
  eyebrows,
  hair,
  hat,
  glasses,
  neckwear,
  earrings,
  clothing1,
  clothing2,
  clothing3,
}) {
  return (
    <div>
      <div>
        <Part path="body" index={body} style={{ zIndex: "0" }} />
        <Part path="eyes" index={eyes} style={{ zIndex: "1" }} />
        <Part path="mouths" index={mouth} style={{ zIndex: "1" }} />
        <Part path="eyebrows" index={eyebrows} style={{ zIndex: "1" }} />
        <Part path="noses" index={0} style={{ zIndex: "1" }} />

        <Part path="hair" index={hair} style={{ zIndex: "4" }} />

        <Part
          path="accessories/earrings"
          index={earrings}
          style={{ zIndex: "1" }}
        />
        <Part
          path="accessories/glasses"
          index={glasses}
          style={{ zIndex: "2" }}
        />
        <Part path="accessories/hats" index={hat} style={{ zIndex: "5" }} />
        <Part
          path="accessories/neckwear"
          index={neckwear}
          style={{ zIndex: "2" }}
        />

        <Part
          path="clothes/layer_1"
          index={clothing1}
          style={{ zIndex: "3" }}
        />
        <Part
          path="clothes/layer_2"
          index={clothing2}
          style={{ zIndex: "3" }}
        />
        <Part
          path="clothes/layer_3"
          index={clothing3}
          style={{ zIndex: "3" }}
        />
      </div>
    </div>
  );
}

export default Avatar;
