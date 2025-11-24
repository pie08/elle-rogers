import { FC } from "react";
import Container from "./Container";
import { PiBookOpen, PiFacebookLogo, PiInstagramLogo } from "react-icons/pi";
import styles from "./Footer.module.scss";

type FooterProps = object;

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <h3>ELLE ROGERS</h3>
        <div className={styles.socials}>
          <a href="/">
            <PiInstagramLogo />
          </a>
          <a href="/">
            <PiFacebookLogo />
          </a>
          <a href="/">
            <PiBookOpen />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
