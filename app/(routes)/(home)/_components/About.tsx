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
            As a child, I was a quiet library lurker who grew up into a happily
            married mom of a tribe, then a page at my local library.  I loved
            putting books back on the shelves, because it allowed me to sneakily
            read a few pages of all genres while getting paid. I decided a
            degree in Library Science sounded like a good fit, so I utilized an
            online degree program through the University of Maine at Augusta.
            Nine years later, my four year degree program was complete!  Being a
            page taught me that I wanted to see my own books on library shelves,
            as I have always been a writer. 
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
