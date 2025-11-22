import Link from "next/link";
import { FC } from "react";
import styles from "./Navigation.module.scss";

type NavigationProps = object;

const Navigation: FC<NavigationProps> = ({}) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">ABOUT</Link>
          </li>
          <li>
            <Link href="/">TANGLEFOLK</Link>
          </li>
          <li>
            <Link href="/">NEWSLETTER</Link>
          </li>
          <li>
            <Link href="/">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
