import React from "react";

function VegNonVegIcon({ type = "veg", size = 24 }) {
  const isVeg = type === "veg";

  return (
    <div
      style={{
        width: size,
        height: size,
        border: `2px solid ${isVeg ? "green" : "red"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px", // optional rounded corners
        backgroundColor: "white", // to separate from image
      }}
    >
      <div
        style={{
          width: size / 2,
          height: size / 2,
          borderRadius: "50%",
          backgroundColor: isVeg ? "green" : "red",
        }}
      ></div>
    </div>
  );
}

export default VegNonVegIcon;
