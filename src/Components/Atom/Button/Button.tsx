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
  const { className, children, ...otherProps } = props;

  // Data to render
  return (
    <button className={`btn ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
