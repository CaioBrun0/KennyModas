import React from 'react';
import "./Buttom.css";

// Recebemos uma nova prop 'variant' (pode ser "default" ou "dark")
function Buttom({ name, variant = "default" }) {
  
  // Se variant for "dark", a classe será "btn-fashion dark"
  const buttonClass = `btn-fashion ${variant === "dark" ? "dark" : ""}`;

  return (
    <button className={buttonClass}>
      {name}
    </button>
  );
}

export default Buttom;