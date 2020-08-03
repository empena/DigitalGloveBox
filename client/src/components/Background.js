import React from "react";

const Background = () => {
  return <div style={styles.background}></div>;
};

export default Background;

const styles = {
  background: {
    margin: "0",
    padding: "0",
    backgroundColor: "#E8E8E8",
    zIndex: "-1",
    position: "fixed",
    width: "100vw",
    height: "100vh",
  },
};
