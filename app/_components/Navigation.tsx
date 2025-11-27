"use client";

import Link from "next/link";
import { FC, useState } from "react";
import styles from "./Navigation.module.scss";
type NavigationProps = object;

const Navigation: FC<NavigationProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen((prev) => !prev);

  return (
    <header className={`${styles.header} ${isOpen ? styles.open : ""}`}>
      {/* mobile naviagtion button */}
      <button className={styles.icon} onClick={toggleNav}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </button>

      {/* navigation links */}
      <nav className={styles.nav}>
        <div className={styles.mobileLine}></div>
        <ul>
          <li>
            <Link href="/#about" scroll={true} onClick={toggleNav}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/#tanglefolk" scroll={true} onClick={toggleNav}>
              TANGLEFOLK
            </Link>
          </li>
          <li>
            <Link href="/#newsletter" scroll={true} onClick={toggleNav}>
              NEWSLETTER
            </Link>
          </li>
          <li>
            <Link href="/#contact" scroll={true} onClick={toggleNav}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      {/* overlay for mobile navigation */}
      <div className={styles.overlay} onClick={toggleNav}></div>
    </header>
  );
};

export default Navigation;
