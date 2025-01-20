"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  type,
  ...rest
}) => {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
