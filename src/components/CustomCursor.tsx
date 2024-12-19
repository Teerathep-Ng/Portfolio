import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "1px",
        height: "1px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.8)",
        boxShadow: "0 0 1000px 50px rgba(255, 255, 255, 0.4)",
        pointerEvents: "none",
        mixBlendMode: "screen",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default CustomCursor;
