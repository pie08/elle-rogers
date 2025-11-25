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
            <Link href="/#about" scroll={true}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/#tanglefolk" scroll={true}>
              TANGLEFOLK
            </Link>
          </li>
          <li>
            <Link href="/#newsletter" scroll={true}>
              NEWSLETTER
            </Link>
          </li>
          <li>
            <Link href="/#contact" scroll={true}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
