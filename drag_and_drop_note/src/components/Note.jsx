/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { forwardRef } from "react";

const Note = forwardRef(({ content, initialPos,handleDelete,id, ...props }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,
        border: "1px solid #ccc",
        borderRadius: "8px",
        userSelect: "none",
        padding: "15px 10px",
        width: "220px",
        cursor: "move",
        backgroundColor: "#fff8e1",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      {...props}
    >
      <span style={{ flex: 1 }}>📌 {content}</span>
      <div
        style={{
          cursor: "pointer",
          color: "#ff4d4f",
          marginLeft: "10px",
          fontSize: "18px",
        }}
        onClick={()=>handleDelete(id)}
      >
        ❌
      </div>
    </div>
  );
});

export default Note;
