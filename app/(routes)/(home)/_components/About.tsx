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
            As a child, I was a quiet library lurker who grew up to become a
            happily married mom of a tribe—and later, a page at my local
            library. I loved putting books back on the shelves because it
            allowed me to sneakily read a few pages from every genre while
            getting paid.
            <br />
            <br />I decided a degree in Library Science sounded like a good fit,
            so I enrolled in an online program through the University of Maine
            at Augusta. Nine years later, my four-year degree was complete!
            Working as a page confirmed what had always been true: I didn’t just
            love books—I wanted to write them.
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
