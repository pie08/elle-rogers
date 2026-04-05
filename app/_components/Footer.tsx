import { FC } from "react";
import Container from "./Container";
import { PiBookOpen } from "react-icons/pi";
import styles from "./Footer.module.scss";
import { siteConfig } from "../_lib/site";

type FooterProps = object;

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <h3>ELLE ROGERS</h3>
        <div className={styles.socials}>
          <a href="https://thechosenlady.online" target="_blank">
            <PiBookOpen />
          </a>
        </div>

        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
