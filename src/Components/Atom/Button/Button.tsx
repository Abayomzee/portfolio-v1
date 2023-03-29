import React from "react";
import "./style.css";

interface ButtonProps {
  children?: any;
  className?: any;
  onClick?: () => void;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = (props) => {
  // Props
  const { className, children } = props;

  // Data to render
  return (
    <button role={"button"} {...props} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
