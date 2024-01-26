import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  scrollToRef?: React.RefObject<HTMLElement>;
}

const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  onClick,
  type,
  children,
  scrollToRef,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    if (onClick) {
      onClick();
    }

    if (scrollToRef) {
      scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
