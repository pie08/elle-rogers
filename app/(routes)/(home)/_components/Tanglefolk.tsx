import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import { FC } from "react";
import styles from "./Tanglefolk.module.scss";
import Button from "@/app/_components/Button";
import tanglefolkImage from "../../../../public/images/tanglefolk.jpeg";
import splashImage from "../../../../public/images/splash.png";
import Image from "next/image";

type TanglefolkProps = object;

const Tanglefolk: FC<TanglefolkProps> = ({}) => {
  return (
    <Section className={styles.tanglefolk} id="tanglefolk">
      <Container className={styles.container}>
        {/* TODO: image slider */}
        <div className={styles.imageContainer}>
          <Image
            src={tanglefolkImage}
            alt="Tanglefolk"
            className={styles.bookImage}
          />
          <Image
            src={splashImage}
            alt="Splash"
            className={styles.splashImage}
          />
        </div>

        <div className={styles.content}>
          <h2>TANGLEFOLK</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Commodo blandit duis ornare
            mollis volutpat ultrices ullamcorper egestas convallis. Feugiat vel
            nisi dolor urna cras eu cras urna. Imperdiet tincidunt lacus sapien
            pretium turpis eget. Fames mi ut velit cursus dui enim et nisl.
          </p>
          <Button btnStyle="cta" href="#tanglefolk">
            BUY TANGLEFOLK
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Tanglefolk;
