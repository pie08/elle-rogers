import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnStyle: "cta" | "outline";
  href?: string;
  [x: string]: any;
}

const Button: FC<ButtonProps> = ({ children, btnStyle, href, ...props }) => {
  return href ? (
    <Link href={href} className={`${styles.button} ${styles[btnStyle]}`}>
      {children}
    </Link>
  ) : (
    <button {...props} className={`${styles.button} ${styles[btnStyle]}`}>
      {children}
    </button>
  );
};

export default Button;
