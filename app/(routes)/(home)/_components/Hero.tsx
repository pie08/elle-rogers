import Button from "@/app/_components/Button";
import Container from "@/app/_components/Container";
import { FC } from "react";
import styles from "./Hero.module.scss";
import Section from "@/app/_components/Section";
import Image from "next/image";
import heroBg from "../../../../public/images/hero-bg.jpg";

type HeroProps = object;

const Hero: FC<HeroProps> = ({}) => {
  return (
    <Section className={styles.hero} disableObserver>
      {/* content */}
      <Container className={styles.heroContent}>
        <h1>ELLE ROGERS</h1>
        <Button btnStyle="outline" href="#tanglefolk">
          BUY TANGLEFOLK
        </Button>
      </Container>

      {/* background image */}
      <Image
        src={heroBg}
        alt="Hero Background"
        fill
        className={styles.heroBg}
      />
    </Section>
  );
};

export default Hero;
