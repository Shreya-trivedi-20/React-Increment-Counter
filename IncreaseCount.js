import React, { useState } from "react";

const buttonStyle = {
  padding: "12px 20px",
  backgroundColor: "#008080",
  borderRadius: "25px",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  display: "block",
  margin: "0 auto",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"
};

const bodyStyle = {
  backgroundColor: "#292929",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
};

const countStyle = {
  display: "block",
  textAlign: "center",
  marginTop: "10px",
  color: "#fff"
};

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={bodyStyle}>
      <button onClick={handleIncrement} style={buttonStyle}>
        Click me
      </button>
      <span style={countStyle}>{count}</span>
    </div>
  );
}

export default Counter;
