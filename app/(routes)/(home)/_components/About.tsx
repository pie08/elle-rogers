import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import { FC } from "react";
import styles from "./About.module.scss";

type AboutProps = object;

const About: FC<AboutProps> = ({}) => {
  return (
    <Section className={styles.about} id="about">
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2>ABOUT ME</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Commodo blandit duis ornare
            mollis volutpat ultrices ullamcorper egestas convallis. Feugiat vel
            nisi dolor urna cras eu cras urna. Imperdiet tincidunt lacus sapien
            pretium turpis eget. Fames mi ut velit cursus dui enim et nisl.
            <br />
            Amet mi senectus pellentesque ultrices ut ante sem commodo. Aliquet
            vitae ut ullamcorper dolor aliquam diam quis amet. Amet ut ut ut
            placerat ac elementum sit fusce venenatis. Sed duis nec volutpat et
            accumsan ut quis. Vestibulum malesuada neque velit id enim.
          </p>
        </div>

        <div className={styles.imageContainer}></div>
      </Container>
    </Section>
  );
};

export default About;
