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
          <h2>THE TANGLEFOLK</h2>
          <p>
            From Santa’s sleigh to the Tooth Fairy’s wings, from the Easter
            Bunny’s hop to Jack Frost’s sparkling touch, childhood is full of
            magical visitors. Among them are the Tanglefolk—tiny forest people
            who leave tangle kisses in a child’s hair as a thank-you. Each
            night, the Tanglefolk gather the strands children naturally shed and
            spin them into twinkling thread for tiny hats, coats, and dresses.
            Morning bead head? Not an issue. It's a sprinkle of magic, proof
            that tiny weavers visited while your child dreamt.
          </p>
          <Button btnStyle="cta" href="#tanglefolk">
            BUY THE TANGLEFOLK
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Tanglefolk;
