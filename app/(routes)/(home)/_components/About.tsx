import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import { FC } from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import aboutImage from "../../../../public/images/about.jpeg";

type AboutProps = object;

const About: FC<AboutProps> = ({}) => {
  return (
    <Section className={styles.about} id="about">
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2>ABOUT ME</h2>
          <p>
          Elle Rogers, mother of ten and world traveler, finds magic everywhere—from childhood days dreaming along the Ramapo River and roaming Virginia farmland to uncovering whispers of history on daily walks through a 400-year-old New England cemetery—and returns every story she writes to God as a gift.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <Image src={aboutImage} alt="About" />
        </div>
      </Container>
    </Section>
  );
};

export default About;
