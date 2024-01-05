import React from "react";

function Banner() {
  const style = {
    position: "fixed",
    // top: "45px",
    top: "0",
    left: "0px",
    width: "100%",
    height: "30px",
    background: "rgb(255, 215, 0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "1.2rem",
    color: "black",
  };

  return <div style={style}>2024 Update coming soon</div>;
}

export default Banner;
