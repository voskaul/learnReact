import React from "react"

const isOnline = false

const PinterestLayout = () => {
  return (
    <div>
      <div style={styles.pin_container}>2222222eeee22sssssss </div>
      <span style={{ color: isOnline ? "green" : "navy" }}> 12312</span>
    </div>
  )
}

const styles = {
  pin_container: {
    margin: 0,
    color: "#fff",
    padding: 0,
    width: "80vw",
    background: "black",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "grid",
    girdTemplateColumns: "repeat(auto-fill ,250px)",
    grudAutoRows: "10px",
  },
}

export default PinterestLayout
